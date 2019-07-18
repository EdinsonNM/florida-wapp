import React from 'react'
import Partner from './partner';
import {Grid} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';

export default React.memo(function Partners({partners=[], handleToggleUserResume}) {
	return (
		<Grid container spacing={0} className="pl-20 pr-20">
			{
				partners.map(partner => 
					<Grid key={`partner-${partner.id}`} item xs={12}>
						<Grow in={true}>
							<Partner {...partner} item={partner}/>
						</Grow>
					</Grid>
				)
			}
		</Grid>
	)
})
