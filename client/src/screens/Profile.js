import { ThemeProvider, createTheme } from '@mui/system';
export default function ProfilePage() {
    const theme = createTheme({
        palette: {
          background: {
            default: '#FFE1B9',
          },
          text: {
            primary: '#173A5E',
            secondary: '#46505A',
          },
        },
      });
    return (
        <h3>Profile</h3>
    );
}


