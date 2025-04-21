// Forside.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllProfiles } from '../sanity/profileServices';

const Forside = () => {
  const [medlemmer, setmedlemmer] = useState([]);
  const [gruppelogg, setgruppelogg] = useState([]);

  useEffect(() => {
    fetchAllProfiles().then(data => {
      setmedlemmer(data);
      
      const alleLogger = data.flatMap(medlem => 
        (medlem.Logg || []).map(log => ({
          ...log,
          medlemName: medlem.name
        }))
      );
      
      setgruppelogg(alleLogger.sort((a, b) => new Date(b.dato) - new Date(a.dato)));
    });
  }, []);

  return (
    <div>
      <h1>Velkommen til Gruppe 32</h1>
      <h2>Medlemmer</h2>
      <div>
        {medlemmer.map(medlem => (
          <div key={medlem._id}>
            <h3>{medlem.name}</h3>
            <p>{medlem.email}</p>
            <Link to={`/profil/${medlem.name}`}>
              Se profil
            </Link>
          </div>
        ))}
      </div>
      <h2>Gruppelogg</h2>
      <ul>
        {gruppelogg.map((indeks, index) => (
          <li key={index}>
            {new Date(indeks.dato).toLocaleDateString()} - {indeks.medlemName}: {indeks.Arbeid} ({indeks.Timer} timer)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forside;