import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideMenuTopList = [
    {
        link: "/dashboard",
        icon: <HomeIcon />,
        title: "Home",
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
    },
    {
        link: "/settings",
        icon: <SettingsIcon />,
        title: "Settings"
    }
]