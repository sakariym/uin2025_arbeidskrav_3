//  Header.jsx
import { Link } from 'react-router-dom';
const members = [
    {id:'1', name: 'Anna'},
    {id:'2', name: 'Jonas'},
    {id:'3', name: 'Emil'}
]; 
const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Gruppe 32</div>
        <nav className="space-x-4">
          <Link to="/">Hjem</Link>
          {members.map((member) => (
            <Link key={member.id} to={`/profil/${member.id}`}>
              {member.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  };
  
  export default Header;
