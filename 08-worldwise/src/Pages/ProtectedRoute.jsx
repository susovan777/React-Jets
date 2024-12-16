import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/FakeAuthContext';
import { useEffect } from 'react';

export default function ({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
