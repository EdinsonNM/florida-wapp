import React, {useEffect, useState} from 'react';
import {
    Drawer,
    makeStyles,
    useMediaQuery,
    useTheme,
    CardActionArea
} from '@material-ui/core';

import CardInfo from './components/CardInfo';
import CardInfoMobile from './components/CardInfoMobile';

import {useStoreState, useStoreActions} from 'easy-peasy';

const useStyles = makeStyles({
    drawer: {
        position: 'absolute'
    }
});

export default React.memo(function UserResume({width}) {
    const classes = useStyles();
    const {openResume, user = {}} = useStoreState(state => state.Main);
    const {
        handleToggleUserResume,
        loadPartnerInfo,
        handleToggleUserModal
    } = useStoreActions(actions => actions.Main);
    const {id} = user;
    useEffect(() => {
        loadPartnerInfo(id);
    }, [openResume, id, loadPartnerInfo]);
    const handleClose = () => {
        handleToggleUserResume(null);
    };
    const infoChart = () => {
        if (user && user.info && user.info.data && user.info.data.calidad) {
            console.log(user.info.data.calidad);
            return Object.entries(user.info.data.calidad).map(result => {
                const [key, value] = result;
                return {name: key, value: parseFloat(value)};
            });
        }
        return [];
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const Info = isMobile ? CardInfoMobile : CardInfo;

    return (
        <Drawer
            anchor="bottom"
            open={openResume}
            onClose={handleClose}
            className={{modal: classes.drawer}}
            PaperProps={{
                style: {left: isMobile ? 0 : `${width}px`}
            }}
        >
            {openResume && (
                <CardActionArea onClick={() => handleToggleUserModal(user)}>
                    <Info
                        {...user}
                        infoChart={infoChart()}
                        handleClose={handleClose}
                    />
                </CardActionArea>
            )}
        </Drawer>
    );
});
