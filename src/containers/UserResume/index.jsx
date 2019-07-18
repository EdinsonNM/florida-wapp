import React from 'react'
import {Drawer} from '@material-ui/core';

import CardInfo from './components/CardInfo';
import {useStoreState, useStoreActions} from 'easy-peasy';

export default function UserResume() {
	const {openResume, userResume } = useStoreState(state => state.Main);
	const {handleToggleUserResume} = useStoreActions(actions => actions.Main);
	return (
		<Drawer anchor="bottom" open={openResume} onClose={handleToggleUserResume}>
			<CardInfo {...userResume} />
		</Drawer>
	)
}
