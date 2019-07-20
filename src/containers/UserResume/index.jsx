import React, { useEffect } from 'react'
import {Drawer, makeStyles} from '@material-ui/core';

import CardInfo from './components/CardInfo';
import {useStoreState, useStoreActions} from 'easy-peasy';


const useStyles = makeStyles({
	drawer: {
		left: '40%'
	}
});

export default React.memo(function UserResume() {
	const classes = useStyles()
	const {openResume, userResume = {} } = useStoreState(state => state.Main);
	const {handleToggleUserResume, loadPartnerInfo} = useStoreActions(actions => actions.Main);
	const {id} = userResume;
	useEffect(() => {
		loadPartnerInfo(id)
	}, [openResume, id, loadPartnerInfo])
	const handleClose = () =>{
		handleToggleUserResume(null)
	}
	const infoChart = () => {
		if(userResume && userResume.info && userResume.info.data && userResume.info.data.calidad){
			console.log(userResume.info.data.calidad)
			return Object.entries(userResume.info.data.calidad).map(result => {
				const [key, value] = result;
				return {name: key, value: parseFloat(value)}
			})
		}
		return []
	}
	return (
		<Drawer style={{left: '40%'}} anchor="bottom" open={openResume} onClose={handleClose} className={{modal:classes.drawer}}>
			{openResume && <CardInfo {...userResume} infoChart={infoChart()}/>}
		</Drawer>
	)
})
