import Search from './screens/Search'
import Home from './screens/Home'
import ResponsiveDrawer from './components/SideMenu'; 
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/> 
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;