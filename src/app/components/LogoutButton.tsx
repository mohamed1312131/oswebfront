import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '8px 16px',
        backgroundColor: '#EF4444',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      Déconnexion
    </button>
  );
}
