import React from 'react'
import {CardActions, Button, Typography, CardContent, Grid, Divider, Avatar, makeStyles, ListSubheader, ListItem} from '@material-ui/core';
import {
	Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  } from 'recharts';
const useStyles = makeStyles({
	bigAvatar: {
		margin: 10,
		width: 150,
		height: 150,
		backgroundColor: 'white'
	},
	ul: {
		backgroundColor: 'inherit',
		padding: 0,
	  },
});

const data = [
	{
	  subject: 'Math', A: 120, B: 110, fullMark: 150,
	},
	{
	  subject: 'Chinese', A: 98, B: 130, fullMark: 150,
	},
	{
	  subject: 'English', A: 86, B: 130, fullMark: 150,
	},
	{
	  subject: 'Geography', A: 99, B: 100, fullMark: 150,
	},
	{
	  subject: 'Physics', A: 85, B: 90, fullMark: 150,
	},
	{
	  subject: 'History', A: 65, B: 85, fullMark: 150,
	},
  ];

export default function CardInfo({url, base, title, gallery, location, finca, distribucion = [], altitud, variedades, procesos}) {
	const classes = useStyles();
	return (
		<div>
			<CardContent>
				<Grid container>
						<Grid item>
							{(gallery && gallery.length) && <Avatar alt="Remy Sharp" src={gallery[0]} className={classes.bigAvatar} />}
						</Grid>
						
						<Grid item xs={12} sm container>
							<Grid item xs={12}>
								<Typography className="fs-18 fw-bold" align="left">
									{base} - {altitud} msnm
								</Typography>
								<Typography className="fs-16" align="left">{title}</Typography>
								<Divider style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}/>
								<Typography className="fs-12"  align="left">
									{location}
								</Typography>
								<Grid container>
									<Grid item sm>
										<Typography className="fs-12 fw-bold mt-10">Distribución</Typography>
										<Typography className="fs-11">
											<div className={classes.ul}>
												{distribucion.map((item, index) => <div key={`distribucion-${index}`}>{item}</div>)}
											</div>
										</Typography>
									</Grid>
									<Grid item sm>
										<Typography className="fs-12 fw-bold mt-10">Variedades</Typography>
										<Typography className="fs-11">
											{variedades}
										</Typography>
									</Grid>
									<Grid item sm>
										<Typography className="fs-12 fw-bold mt-10">Procesos</Typography>
										<Typography className="fs-11">
											{procesos}
										</Typography>
									</Grid>
								</Grid>
								
								
								
							</Grid>
							
						</Grid>
						<Grid alignContent="flex-end" alignItems="center" item style={{fontSize: 11}}>
							<RadarChart cx={100} cy={100} outerRadius={50} width={200} height={200} data={data}>
								<PolarGrid />
								<PolarAngleAxis dataKey="subject" />
								<PolarRadiusAxis />
								<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
							</RadarChart>
						</Grid>
				</Grid>
			</CardContent>
			
		</div>
	)
}
