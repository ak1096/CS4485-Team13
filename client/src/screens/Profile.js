import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from "../styles/styling";
import Avatar from'@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {Email, Person, Lock} from '@material-ui/icons'
import {TextField} from '@mui/material'

export default function ProfilePage() {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%', mt: '7rem', pl:'5rem' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Avatar className={classes.avatar} src="profile-pic.jpg" alt="Profile Picture" />
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={10}>
                    <Typography variant="h3">Hi, John Doe</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>Basic Information</Typography>
                <div className={classes.info}>
                    <Person className={classes.icon} />
                    <Typography variant="body1">John Doe</Typography>
                </div>
                <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                />
                <div className={classes.info}>
                    <Email className={classes.icon} />
                    <Typography variant="body1">john.doe@utdallas.com</Typography>
                </div>
                <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                />
                <div className={classes.info}>
                    <Lock className={classes.icon} />
                    <Typography variant="body1">Change Password</Typography>
                </div>
                <TextField
                id="current-password"
                label="Current Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                />
                <TextField
                id="new-password"
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                />
                <TextField
                id="confirm-new-password"
                label="Confirm New Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                />  
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Button variant="contained" color="primary">Save Changes</Button>
        </Box>
    );
}


