import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Total from './Pages/Total';
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/total" element={<Total/>}></Route>
        <Route path="/todo/:id" element={<Todo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
