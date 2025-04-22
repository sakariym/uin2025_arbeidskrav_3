  import './App.css'
  import {Route, Routes} from 'react-router-dom';
  import Forside from './components/Forside';
  import Header from './components/Header';
  import Profil from './components/Profil';
  import Home from './pages/Home';


  

  function App() {

    return (
    <>
    <Header /> 
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Forside />}></Route>
      <Route path="/profil/:id" element={<Profil />} />
      </Routes>
      </>
    )
  }

  export default App;
