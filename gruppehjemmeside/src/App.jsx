import './App.css'
import {Route, Routes} from "react-router";
import Forside from './components/Forside';
import Header from './components/Header';



function App() {

  return (
  <>
  <Header />
  <Routes>
    <Route path="/" element={<Forside />}></Route>
    </Routes>
    </>
  )
}

export default App
