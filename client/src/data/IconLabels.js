import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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