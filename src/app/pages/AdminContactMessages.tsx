import { useEffect, useMemo, useState } from 'react';
import { apiGet, apiPut, API_BASE_URL } from '../lib/api';
import { Mail, Search } from 'lucide-react';

type ContactMessageDTO = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: 'NEW' | 'READ';
  createdAt?: string;
  readAt?: string;
};

export default function AdminContactMessages() {
  const [messages, setMessages] = useState<ContactMessageDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiGet<ContactMessageDTO[]>('/api/contact/messages');
      setMessages(Array.isArray(data) ? data : []);
    } catch (e: any) {
      setError(e?.message ?? 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  const setStatus = async (id: number, status: 'NEW' | 'READ') => {
    setUpdatingId(id);
    setError(null);
    try {
      const updated = await apiPut<ContactMessageDTO>(`/api/contact/messages/${id}/status`, {
        query: { status },
      });
      setMessages((prev) => prev.map((m) => (m.id === id ? updated : m)));
    } catch (e: any) {
      setError(e?.message ?? 'Request failed');
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return messages;
    return messages.filter((m) =>
      [String(m.id), m.name ?? '', m.email ?? '', m.phone ?? '', m.subject ?? '', m.message ?? '', m.status ?? '']
        .join(' ')
        .toLowerCase()
        .includes(q),
    );
  }, [messages, query]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#C5A059',
                fontWeight: 700,
              }}
            >
              Admin
            </div>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 28, fontWeight: 800, color: '#111827' }}>
              Messages de contact
            </h1>
            <div style={{ marginTop: 6, fontSize: 13, color: '#6B7280' }}>
              Consultez tous les messages envoyés via la page Contact.
            </div>
          </div>

          <button
            type="button"
            onClick={() => void load()}
            className="transition-opacity duration-200 hover:opacity-80"
            style={{
              backgroundColor: '#2D472C',
              color: 'white',
              borderRadius: 8,
              height: 40,
              padding: '0 14px',
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Actualiser
          </button>
        </div>

        <div
          className="flex items-center gap-2"
          style={{
            border: '1px solid rgba(45, 71, 44, 0.25)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 10,
            padding: '10px 12px',
            boxShadow: '0 10px 26px rgba(17,24,39,0.06)',
            marginBottom: 16,
          }}
        >
          <Search size={16} style={{ color: '#2D472C' }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher (nom, email, sujet, message...)"
            style={{ width: '100%', outline: 'none', border: 'none', background: 'transparent', fontSize: 14, color: '#111827' }}
          />
        </div>

        {loading ? (
          <div style={{ padding: 18, color: '#6B7280' }}>Chargement...</div>
        ) : error ? (
          <div
            role="alert"
            style={{
              padding: 14,
              borderRadius: 10,
              border: '1px solid rgba(239,68,68,0.35)',
              backgroundColor: 'rgba(239,68,68,0.08)',
              color: '#991B1B',
            }}
          >
            {error}
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(45,71,44,0.06)' }}>
                  {['ID', 'Statut', 'Lu le', 'Créé le', 'Nom', 'Email', 'Téléphone', 'Sujet', 'Message', 'Actions'].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: 'left',
                        padding: '12px 12px',
                        fontSize: 12,
                        color: '#374151',
                        fontWeight: 800,
                        borderTop: '1px solid rgba(45,71,44,0.14)',
                        borderBottom: '1px solid rgba(45,71,44,0.14)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => {
                  const created = m.createdAt ? new Date(m.createdAt).toLocaleString() : '';
                  const readAt = m.readAt ? new Date(m.readAt).toLocaleString() : '-';
                  const status = m.status ?? 'NEW';

                  const mailto =
                    `mailto:${encodeURIComponent(m.email)}` +
                    `?subject=${encodeURIComponent(`Re: ${m.subject}`)}` +
                    `&body=${encodeURIComponent(`Bonjour ${m.name},\n\n`)}` +
                    encodeURIComponent(`\n\n---\nMessage original:\n${m.message}`);

                  return (
                    <tr key={m.id} style={{ backgroundColor: 'white' }}>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13 }}>{m.id}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13 }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: 24,
                            padding: '0 10px',
                            borderRadius: 999,
                            fontSize: 12,
                            fontWeight: 800,
                            border: '1px solid',
                            borderColor: status === 'READ' ? 'rgba(34,197,94,0.35)' : 'rgba(197,160,89,0.45)',
                            backgroundColor: status === 'READ' ? 'rgba(34,197,94,0.10)' : 'rgba(197,160,89,0.12)',
                            color: status === 'READ' ? '#166534' : '#7C5B1A',
                          }}
                        >
                          {status}
                        </span>
                      </td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13, color: '#6B7280' }}>{readAt}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13, color: '#6B7280' }}>{created}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13, fontWeight: 700 }}>{m.name}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13 }}>{m.email}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13 }}>{m.phone ?? '-'}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13 }}>{m.subject}</td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB', fontSize: 13, color: '#374151', maxWidth: 420 }}>
                        <div style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{m.message}</div>
                      </td>
                      <td style={{ padding: 12, borderBottom: '1px solid #E5E7EB' }}>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a
                            href={mailto}
                            className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                            style={{
                              backgroundColor: '#2D472C',
                              color: 'white',
                              borderRadius: 8,
                              padding: '8px 10px',
                              fontSize: 12,
                              fontWeight: 800,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            <Mail size={14} />
                            Répondre
                          </a>

                          <button
                            type="button"
                            disabled={updatingId === m.id}
                            onClick={() => void setStatus(m.id, status === 'READ' ? 'NEW' : 'READ')}
                            className="transition-opacity duration-200 hover:opacity-80"
                            style={{
                              backgroundColor: status === 'READ' ? '#9CA3AF' : '#C5A059',
                              color: 'white',
                              borderRadius: 8,
                              padding: '8px 10px',
                              fontSize: 12,
                              fontWeight: 800,
                              whiteSpace: 'nowrap',
                              opacity: updatingId === m.id ? 0.7 : 1,
                            }}
                          >
                            {updatingId === m.id ? '...' : status === 'READ' ? 'Marquer NEW' : 'Marquer READ'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={10} style={{ padding: 14, color: '#6B7280' }}>
                      Aucun message.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: 10, fontSize: 12, color: '#6B7280' }}>API: {API_BASE_URL}</div>
      </div>
    </div>
  );
}
