import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home'

export const SideMenuTopList = [
    {
        link: "/dashboard",
        icon: <HomeIcon />,
        title: "Home",
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
    },
    {
        link: "/profile",
        icon: <AccountCircleIcon />,
        title: "Profile",
    },
]