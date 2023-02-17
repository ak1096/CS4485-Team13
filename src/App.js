import ResponsiveAppBar from './components/AppBar';
import Search from './screens/Search'
import ResponsiveDrawer from './components/SideMenu'; 
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}
      <ResponsiveDrawer/>
      <Search />
    </div>
  );
}

export default App;