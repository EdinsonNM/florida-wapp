import React from 'react'
import { Typography , FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';
import {Grid} from '@material-ui/core';

export default function FilterOptionsCheckbox({title, data=[], key, label}) {
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedF: true,
		checkedG: true,
	});
	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	}
	return (
		<Grid container className="pr-20 pl-20 text-white">
			<Grid item xs={12}>
			<Typography className="fs-16 fw-200 text-white mb-20 mt-10" color="text-primary" align="left">
				{title}
			</Typography>
			<FormGroup row style={{textAlign: 'left'}}>
				{
					data.map(item => (
						<Grid item xs={6}><FormControlLabel
							control={
							<Checkbox checked={state.checkedA} onChange={handleChange(`chk${item[label]}`)} value={`chk${item[label]}`} />
							}
							label={item[label]}
						/></Grid>
					))
				}
			</FormGroup>
			</Grid>
		</Grid>
	)
}
