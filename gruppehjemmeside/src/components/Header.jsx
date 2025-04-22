// Header.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllProfiles } from '../sanity/profileServices';

const Header = () => {
    const [members, setMembers] = useState([]);

    const getAllMembers = async () => {
      const data = await fetchAllProfiles();
      setMembers(data);
    };
  
    useEffect(() => {
      getAllMembers();
    }, []);
    return (
        <header>
        <div>Gruppe 32</div>
        <nav>
          <Link to="/">Hjem</Link>
          {members.map((member) => (
            <Link key={member._id} to={`/profil/${member.name}`}>
              {member.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  };
  
  export default Header;
