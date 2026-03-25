import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowUp, Calendar, Eye, MessageSquare, MousePointer, Search, TrendingUp } from 'lucide-react';
import { apiGet } from '../lib/api';
import LogoutButton from '../components/LogoutButton';

type DashboardStatsDTO = {
  totalDemoRequests: number;
  pendingRequests: number;
  completedRequests: number;
  conversionRate: number;
  dailyTrends: Array<{ date: string; requests: number; conversions: number }>;
  requestsByStatus: Record<string, number>;
};

type DemoRequestDTO = {
  id: number;
  createdAt?: string;
  fullName: string;
  email: string;
  phone?: string;
  status: string;
  subject?: string;
  message?: string;
  schoolName?: string;
};

export default function AdminAnalytics() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [stats, setStats] = useState<DashboardStatsDTO | null>(null);
  const [demoRequests, setDemoRequests] = useState<DemoRequestDTO[]>([]);
  const [contactMessagesCount, setContactMessagesCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingRequests, setLoadingRequests] = useState(false);

  const navigate = useNavigate();

  const openMessagesAdmin = () => {
    navigate('/admin/contact-messages');
  };

  const formatDateTime = (dateStr: string | undefined) => {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString();
  };

  // Load data on mount
  useEffect(() => {
    loadContactMessagesCount();
    loadDashboard();
    loadDemoRequests();
  }, []);

  const loadDashboard = async () => {
    setLoadingStats(true);
    setApiError(null);
    try {
      const data = await apiGet<DashboardStatsDTO>('/api/analytics/dashboard');
      setStats(data);
      loadDemoRequests();
    } catch (e: any) {
      setApiError(e?.message ?? 'Erreur API');
      setStats(null);
    } finally {
      setLoadingStats(false);
    }
  };

  const loadDemoRequests = async () => {
    setLoadingRequests(true);
    setApiError(null);
    try {
      // Cast to any because the API might return a Page object or an Array depending on backend implementation
      const res = await apiGet<any>('/api/demo/requests');
      const rows: any[] = Array.isArray(res) ? res : (res?.content && Array.isArray(res.content)) ? res.content : [];

      const normalized: DemoRequestDTO[] = rows.map((r) => ({
        id: Number(r.id),
        createdAt: r.createdAt ?? r.created_at,
        fullName: r.fullName ?? r.full_name ?? r.name ?? '',
        email: r.email ?? '',
        phone: r.phone ?? r.telephone ?? r.tel,
        schoolName: r.schoolName ?? r.school_name ?? r.school ?? '',
        status: r.status ?? 'PENDING',
        subject: r.subject,
        message: r.message
      }));

      setDemoRequests(normalized);
    } catch (e: any) {
      setApiError(e?.message ?? 'Erreur API');
    } finally {
      setLoadingRequests(false);
    }
  };

  const loadContactMessagesCount = async () => {
    try {
      const count = await apiGet<number>('/api/contact/messages/count');
      setContactMessagesCount(count);
    } catch (e: any) {
      setApiError(e?.message ?? 'Erreur API');
    }
  };

  const conversion = useMemo(() => {
    if (!stats) return '0.0%';
    return `${(stats.conversionRate ?? 0).toFixed(1)}%`;
  }, [stats]);

  // Filter demo requests based on search query
  const filteredRequests = useMemo(() => {
    if (!searchQuery.trim()) return demoRequests;
    const query = searchQuery.toLowerCase();
    return demoRequests.filter(req => 
      req.fullName?.toLowerCase().includes(query) ||
      req.email?.toLowerCase().includes(query) ||
      req.schoolName?.toLowerCase().includes(query) ||
      req.phone?.toLowerCase().includes(query)
    );
  }, [demoRequests, searchQuery]);

  // Calculate growth percentage (mock for now - would need historical data)
  const calculateGrowth = (current: number) => {
    // This is a placeholder - in production you'd compare with previous period
    return current > 0 ? '+12.5%' : '0%';
  };

  return (
    <div style={{ padding: 32, maxWidth: 1200, margin: '0 auto' }}>
      {apiError && (
        <div style={{ marginBottom: 16, padding: 12, borderRadius: 10, border: '1px solid rgba(239,68,68,0.35)', background: 'rgba(239,68,68,0.08)', color: '#991B1B' }}>
          {apiError}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 20, fontWeight: 800, color: '#2D472C' }}>Omnischool</div>
        <LogoutButton />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
            <Eye size={18} style={{ color: '#2D472C' }} /> Total Demandes
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, marginTop: 8 }}>
            {loadingStats ? '…' : stats?.totalDemoRequests ?? 0}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: '#10B981', fontWeight: 700 }}>
            <ArrowUp size={14} /> {calculateGrowth(stats?.totalDemoRequests ?? 0)}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
            <MousePointer size={18} style={{ color: '#C5A059' }} /> En attente
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, marginTop: 8 }}>
            {loadingStats ? '…' : stats?.pendingRequests ?? 0}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: '#F59E0B', fontWeight: 700 }}>
            <ArrowUp size={14} /> {calculateGrowth(stats?.pendingRequests ?? 0)}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
            <Calendar size={18} style={{ color: '#2D472C' }} /> Complétées
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, marginTop: 8 }}>
            {loadingStats ? '…' : stats?.completedRequests ?? 0}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: '#10B981', fontWeight: 700 }}>
            <ArrowUp size={14} /> {calculateGrowth(stats?.completedRequests ?? 0)}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
              <MessageSquare size={18} style={{ color: '#C5A059' }} /> Messages
            </div>
            <button
              type="button"
              onClick={openMessagesAdmin}
              style={{
                backgroundColor: 'rgba(45,71,44,0.10)',
                color: '#2D472C',
                border: '1px solid rgba(45,71,44,0.25)',
                borderRadius: 999,
                padding: '6px 10px',
                fontSize: 12,
                fontWeight: 900,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Voir
            </button>
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, marginTop: 8 }}>{contactMessagesCount}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: '#10B981', fontWeight: 700 }}>
            <ArrowUp size={14} /> {calculateGrowth(contactMessagesCount)}
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6B7280', fontSize: 13, fontWeight: 600 }}>
            <TrendingUp size={18} style={{ color: '#2D472C' }} /> Conversion
          </div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 30, fontWeight: 900, marginTop: 8 }}>{loadingStats ? '…' : conversion}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: stats && stats.conversionRate > 50 ? '#10B981' : '#F59E0B', fontWeight: 700 }}>
            <ArrowUp size={14} /> {stats ? `${stats.conversionRate > 0 ? '+' : ''}${stats.conversionRate.toFixed(1)}%` : '0%'}
          </div>
        </div>
      </div>

      <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: 12, padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 16, fontWeight: 900, color: '#111827' }}>Dernières demandes de démo</div>
          <div style={{ position: 'relative', width: 280, maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher..."
              style={{ width: '100%', height: 36, paddingLeft: 32, paddingRight: 10, border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 13 }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(45,71,44,0.06)' }}>
                {['ID', 'Créé le', 'Nom', 'Email', 'Téléphone', 'École', 'Statut'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: 10, fontSize: 12, color: '#374151', fontWeight: 900, borderBottom: '1px solid #E5E7EB' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loadingRequests ? (
                <tr>
                  <td colSpan={7} style={{ padding: 12, color: '#6B7280' }}>
                    Chargement…
                  </td>
                </tr>
              ) : filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ padding: 12, color: '#6B7280' }}>
                    {searchQuery ? 'Aucun résultat trouvé.' : 'Aucune demande.'}
                  </td>
                </tr>
              ) : (
                filteredRequests.map((r) => (
                  <tr key={r.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: 10, fontSize: 13 }}>{r.id}</td>
                    <td style={{ padding: 10, fontSize: 13, color: '#6B7280' }}>{formatDateTime(r.createdAt)}</td>
                    <td style={{ padding: 10, fontSize: 13, fontWeight: 800 }}>{r.fullName}</td>
                    <td style={{ padding: 10, fontSize: 13 }}>{r.email}</td>
                    <td style={{ padding: 10, fontSize: 13 }}>{r.phone ?? '-'}</td>
                    <td style={{ padding: 10, fontSize: 13 }}>{r.schoolName}</td>
                    <td style={{ padding: 10, fontSize: 13 }}>{r.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
