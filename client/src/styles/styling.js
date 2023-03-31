import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4),
      },
    customInput: {
        width: "70%",
    },
    divider: {
        marginBottom: "3%"
    },
    customButton: {
        backgroundColor: '#F99285',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#456B63',
        },
        width: "70%",
        height: "5%"
    },
}));