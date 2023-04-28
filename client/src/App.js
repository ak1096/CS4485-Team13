import Search from './screens/Search'
import Home from './screens/Home'
import NotificationsPage from './screens/Notifications';
import SettingsPage from './screens/Settings';
import CalendarPage from './screens/Calendar';
import LoginPage from './screens/Login';
import SignUpPage from './screens/SignUp';
import ResponsiveDrawer from './components/SideMenu'; 
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage />}/> 
            <Route path="/signup" element={<SignUpPage />}/> 
            <Route path="/notifs" element={<NotificationsPage />}/> 
            <Route path="/search" element={<Search />}/> 
            <Route path="/calendar" element={<CalendarPage />}/> 
            <Route path="/settings" element={<SettingsPage />}/> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;