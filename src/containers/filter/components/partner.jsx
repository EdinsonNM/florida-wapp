import React from 'react';
import {useStoreActions} from 'easy-peasy';
import {
    Card,
    CardContent,
    Grid,
    Avatar,
    makeStyles,
    Typography,
    Divider,
    CardActionArea,
    useTheme,
    useMediaQuery
} from '@material-ui/core';

const useStyles = makeStyles({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        backgroundColor: 'white'
    }
});
export default React.memo(function Partner({
    url,
    title = '[title]',
    gallery = ['https://via.placeholder.com/150'],
    location = ['location'],
    finca = '[finca]',
    item
}) {
    const classes = useStyles();
    const {handleToggleUserResume, handleToggleUserModal} = useStoreActions(
        actions => actions.Main
    );
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleOpenPartner = () => {
        if (matches) handleToggleUserResume(item);
        else handleToggleUserModal(item);
    };
    return (
        <Card
            className="text-white br-5 mb-10"
            style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
            elevation={0}
        >
            <CardActionArea onClick={handleOpenPartner}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={4} lg={3}>
                            {gallery && gallery.length && (
                                <Avatar
                                    alt="Remy Sharp"
                                    src={gallery[0]}
                                    className={classes.bigAvatar}
                                />
                            )}
                        </Grid>
                        <Grid item xs={9} sm={9} md={8} lg={9}>
                            <Typography
                                className="fs-18 fw-bold"
                                align="left"
                                noWrap
                            >
                                {finca}
                            </Typography>
                            <Typography className="fs-16" align="left" noWrap>
                                {title}
                            </Typography>
                            <Divider
                                style={{
                                    backgroundColor: 'rgba(255,255,255, 0.5)'
                                }}
                            />
                            <Typography className="fs-12" align="left" noWrap>
                                {location}
                            </Typography>
                            <Typography />
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});
