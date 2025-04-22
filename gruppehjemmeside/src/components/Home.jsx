// src/pages/Home.jsx
const members = [
    { 
      id: "1", 
      Firstname: "Anna",
      Fullname: "Anna Loise Berg", 
      role: "Frontend utvikler", 
      alias: "DesignDronning", 
      email: "anna@hotmail.com" 
    },
    { 
      id: "2", 
      Firstname: "Jonas",
      Fullname: "Jonas Jan Lie", 
      role: "Backend ekspert", 
      alias: "KodeKongen", 
      email: "jonas@gmail.com" 
    },
    { 
      id: "3", 
      Firstname: "Emil", 
      Fullname: "Emil Sandvik Lundsen",
      role: "Fullstack entusiast", 
      alias: "BugBuster", 
      email: "emil@hotmail.com" 
    }
  ];
  
  const logs = [
    { date: "2025-04-01", name: "Anna Loise Berg", task: "Oppstartsmøte", hours: "2 timer" },
    { date: "2025-04-05", name: "Jonas Jan Lie", task: "Designvalg bestemt", hours: "3 timer" },
    { date: "2025-04-10", name: "Emil Sandvik Lundsen", task: "Første kodegjennomgang", hours: "4 timer" },
    { date: "2025-04-15", name: "Anna", task: "Testing og bugfix", hours: "3 timer" }
  ];
  
  const Home = () => {
    return (
      <div className="p-8">
        <h1 className="text-center text-2xl font-bold mb-8">Gruppemedlemmer</h1>
        <div className="flex justify-center flex-wrap gap-8 mb-12">
          {members.map((member) => (
            <div key={member.id} className="border p-4 w-48 text-center shadow rounded-lg">
              <div className="bg-gray-300 h-32 mb-2 flex items-center justify-center rounded">bilde</div>
              <div className="font-bold">{member.name}</div>
              <div className="italic text-sm text-gray-600">({member.alias})</div>
              <div className="text-sm mb-1">{member.role}</div>
              <a href={`mailto:${member.email}`} className="text-blue-600 text-sm">{member.email}</a>
            </div>
          ))}
        </div>
  
        <h2 className="text-center text-2xl font-bold mb-4">Arbeidslogg</h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Dato</th>
              <th className="p-2">Navn</th>
              <th className="p-2">Oppgave</th>
              <th className="p-2">Timer</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2">{log.date}</td>
                <td className="p-2">{log.name}</td>
                <td className="p-2">{log.task}</td>
                <td className="p-2">{log.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Home;
  