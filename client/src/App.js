import Search from './screens/Search'
import Home from './screens/Home'
import SettingsPage from './screens/Settings';
import CalendarPage from './screens/Calendar';
import LoginPage from './screens/Login';
import SignUpPage from './screens/StudentSignUp';
import TutorSignUp from './screens/TutorSignUp';
import StartingPage from './screens/StartingPage';
import SideMenu from './components/SideMenu';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TutorHome from './screens/TutorHome';
import { AuthProvider } from './AuthContext';
import ProfilePage from './screens/Profile';
import StickyFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/tutor-dashboard" element={<TutorHome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/tutor-signup" element={<TutorSignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<ProfilePage />} />
          </Routes>
          <StickyFooter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );

}

export default App;