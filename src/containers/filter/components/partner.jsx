import React, {useContext} from 'react'
import { Card, CardContent , Grid, Avatar, makeStyles, Typography, Divider, CardActionArea} from '@material-ui/core';
import {AppContext} from '../../App.container';
import {useStoreActions} from 'easy-peasy';

const useStyles = makeStyles({
	bigAvatar: {
		margin: 10,
		width: 60,
		height: 60,
		backgroundColor: 'white'
	},
});
export default React.memo(function Partner({url, title, gallery, location, finca, item}) {
	const classes = useStyles();
	const {handleToggleUserResume} = useStoreActions(actions => actions.Main);
	const handleOpenPartner= () => {
		handleToggleUserResume(item);
	}

	return (
		<Card className="mb-10 text-white br-5" style={{backgroundColor: 'rgba(0,0,0,0.3)'}} elevation={0}>
		<CardActionArea onClick={handleOpenPartner}>
			<CardContent>
				<Grid container>
					<Grid item>
						{(gallery && gallery.length) && <Avatar alt="Remy Sharp" src={gallery[0]} className={classes.bigAvatar} />}
					</Grid>
					<Grid item xs={12} sm>
						<Typography className="fs-18 fw-bold" align="left">
							{finca}
						</Typography>
						<Typography className="fs-16" align="left">{title}</Typography>
						<Divider style={{backgroundColor: 'rgba(255,255,255, 0.5)'}}/>
						<Typography className="fs-12"  align="left">
							{location}
						</Typography>
						
						
						<Typography></Typography>
					</Grid>
				</Grid>
			</CardContent>
			</CardActionArea>
		</Card>
	)
})
