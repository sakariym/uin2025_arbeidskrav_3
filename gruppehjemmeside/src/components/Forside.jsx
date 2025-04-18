import { Link } from 'react-router-dom';

const members = [
  { id: '1', name: 'Anna', bio: 'Frontend utvikler' },
  { id: '2', name: 'Jonas', bio: 'Backend ekspert' },
  { id: '3', name: 'Emil', bio: 'Fullstack entusiast' }
];

const groupLog = [
  "01.04 - Oppstartsmøte",
  "05.04 - Designvalg bestemt",
  "10.04 - Første kodegjennomgang",
  "15.04 - Testing og bugfix"
];

const Forside = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Velkommen til Gruppe 32</h1>

      <h2 className="text-xl font-semibold mb-4">Medlemmer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {members.map(member => (
          <div key={member.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2">{member.name}</h3>
            <p className="mb-2">{member.bio}</p>
            <Link to={`/profil/${member.id}`} className="text-blue-500 hover:underline">
              Se profil
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Gruppelogg</h2>
      <ul className="list-disc list-inside space-y-2">
        {groupLog.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default Forside;
