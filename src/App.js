import Search from './screens/Search'
import ResponsiveDrawer from './components/SideMenu'; 
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;