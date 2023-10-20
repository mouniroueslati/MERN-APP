import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token du stockage local
    localStorage.clear();
    
    // Rediriger vers la page de connexion
    navigate('/login');
  };

  useEffect(() => {handleLogout()})


  return (
    <div>
    
    </div>
  );
};

export default Logout;