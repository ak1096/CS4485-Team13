import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideMenuTopList = [
    {
        link: "/",
        icon: <AccountCircleIcon />,
        title: "Profile",
    },
    {
        link: "/notifs",
        icon: <NotificationsNoneIcon />,
        title: "Notifications"
    },
    {
        link: "/search",
        icon: <SearchIcon />,
        title: "Search"
    },
    {
        link: "/calendar",
        icon: <CalendarMonthIcon />,
        title: "Calendar"
    }
]

export const SideMenuBottomList = [
    {
        link: "/",
        icon: <LogoutIcon />,
        title: "Logout"
    },
    {
        link: "/settings",
        icon: <SettingsIcon />,
        title: "Settings"
    }
]