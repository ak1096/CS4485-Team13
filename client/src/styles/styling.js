import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
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
    avatar: {
        height: 200,
        width: 200,
      },
      divider2: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      info: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
      },
      icon: {
        marginRight: theme.spacing(1),
      }
}));