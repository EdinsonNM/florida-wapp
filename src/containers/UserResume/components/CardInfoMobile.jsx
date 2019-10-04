import React from 'react';
import {
    Typography,
    CardContent,
    Grid,
    Divider,
    Avatar,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    bigAvatar: {
        margin: 'auto',
        width: 80,
        height: 80,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0
    }
});

export default function CardInfoMobile({
    url,
    finca,
    base,
    title,
    gallery,
    location,
    distribucion = [],
    altitud,
    variedades,
    procesos,
    infoChart = [],
    handleClose
}) {
    const classes = useStyles();
    return (
        <div>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        <div
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            {gallery && gallery.length && (
                                <Avatar
                                    alt="Remy Sharp"
                                    src={gallery[0]}
                                    className={classes.bigAvatar}
                                    imgProps={{}}
                                />
                            )}
                        </div>
                    </Grid>

                    <Grid item xs={8} container>
                        <Grid item xs>
                            <Typography className="fs-18 fw-bold">
                                {finca} - {base} - {altitud} msnm
                            </Typography>
                            <Typography className="fs-16">{title}</Typography>
                            <Divider
                                style={{
                                    backgroundColor: 'rgba(255,255,255, 0.5)'
                                }}
                            />
                            <Typography className="fs-12">
                                {location}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    );
}
