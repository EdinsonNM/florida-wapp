import React from 'react';
import {
    CardActions,
    Button,
    Typography,
    CardContent,
    Grid,
    Divider,
    Avatar,
    makeStyles,
    ListSubheader,
    ListItem
} from '@material-ui/core';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from 'recharts';

const useStyles = makeStyles({
    bigAvatar: {
        margin: 'auto',
        width: 150,
        height: 150,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0
    }
});

export default function CardInfo({
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
                    <Grid item xs={12} sm={3} md={2} lg={2}>
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

                    <Grid item xs={12} sm container>
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
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className="fs-12 fw-bold mt-10">
                                        Distribución
                                    </Typography>
                                    <Typography className="fs-11">
                                        <div className={classes.ul}>
                                            {distribucion.map((item, index) => (
                                                <div
                                                    key={`distribucion-${index}`}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm>
                                    <Typography className="fs-12 fw-bold mt-10">
                                        Variedades
                                    </Typography>
                                    <Typography className="fs-11">
                                        {variedades}
                                    </Typography>
                                </Grid>
                                <Grid item sm>
                                    <Typography className="fs-12 fw-bold mt-10">
                                        Procesos
                                    </Typography>
                                    <Typography className="fs-11">
                                        {procesos}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        alignContent="flex-end"
                        alignItems="center"
                        item
                        style={{fontSize: 11}}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: 220,
                                textAlign: 'center'
                            }}
                        >
                            {infoChart.length && (
                                <RadarChart
                                    cx={140}
                                    cy={100}
                                    outerRadius={50}
                                    width={280}
                                    height={200}
                                    data={infoChart}
                                >
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="name" />
                                    <PolarRadiusAxis />
                                    <Radar
                                        name="results"
                                        dataKey="value"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        fillOpacity={0.6}
                                    />
                                </RadarChart>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    );
}
