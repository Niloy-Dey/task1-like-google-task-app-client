import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calender from './Component/Calender';
import CompletedTask from './Component/CompletedTask';
import Home from './Component/Home';
import ToDo from './Component/ToDo';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/completedTask" element={<CompletedTask></CompletedTask>}> </Route>
        <Route path='/toDo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
