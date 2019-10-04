import React, {useEffect} from 'react';
import {
    makeStyles,
    useTheme,
    useMediaQuery,
    withStyles,
    IconButton,
    Toolbar,
    CardMedia
} from '@material-ui/core';

import {useStoreState, useStoreActions} from 'easy-peasy';
import {Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {Close} from '@material-ui/icons';
import CardInfo from '../UserResume/components/CardInfo';
import {DialogContent} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import {AppBar} from '@material-ui/core';
import {Slide} from '@material-ui/core';
import banner from '../../assets/images/58d16c46cbe9f.jpeg';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    drawer: {
        left: '40%'
    }
});

export default React.memo(function PartnerDetail() {
    const classes = useStyles();
    const {openModalUser, user = {}} = useStoreState(state => state.Main);
    const {handleToggleUserModal, loadPartnerInfo} = useStoreActions(
        actions => actions.Main
    );
    const {id} = user;
    useEffect(() => {
        loadPartnerInfo(id);
    }, [openModalUser, id, loadPartnerInfo]);
    const handleClose = () => {
        handleToggleUserModal(null);
    };
    const infoChart = () => {
        if (user && user.info && user.info.data && user.info.data.calidad) {
            console.log(user.info.data.calidad);
            return Object.entries(user.info.data.calidad).map(result => {
                const [key, value] = result;
                return {name: key, value: parseFloat(value || 0)};
            });
        }
        return [];
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog
            fullScreen={fullScreen}
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={openModalUser}
            TransitionComponent={Transition}
        >
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={handleClose}
                    >
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Detalle
                    </Typography>
                </Toolbar>
            </AppBar>
            <div
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center -140px',
                    paddingTop: 100
                }}
            >
                <DialogContent>
                    {openModalUser && (
                        <CardInfo
                            {...user}
                            infoChart={infoChart()}
                            handleClose={handleClose}
                        />
                    )}
                </DialogContent>
            </div>
        </Dialog>
    );
});
