import React from 'react'
import { Divider, Typography, TextField, makeStyles} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import FilterOptionsCheckbox from './FilterOptionsCheckbox';

const useStyles = makeStyles({
	root: {
		color: 'white',
	},
	underline: {
		color: 'yellow'
	}
  });
export default function FilterOptions({locations, variety, dataprocess}) {
	const classes = useStyles();
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
				<Grid container className="pr-20 pl-20 text-white">
					<Grid item xs={12}>
						<Typography className="fs-16 fw-200 text-white mb-20 mt-10" color="text-primary" align="left">
							Certificaciones
						</Typography>
						<TextField
							id="standard-select-currency-native"
							select
							fullWidth
							classes={classes}
							SelectProps={{
								native: true,
								MenuProps: {
								
								},
							}}
							helperText="Please select your currency"
							margin="normal"
						>
							{variety.map(option => (
							<option key={option.ID} value={option.id}>
								{option.nombre}
							</option>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<Typography className="fs-16 fw-200 text-white mb-20 mt-10" color="text-primary" align="left">
							Certificaciones
						</Typography>
						<TextField
							id="standard-select-currency-native"
							select
							fullWidth
							SelectProps={{
								native: true,
								MenuProps: {
								
								},
							}}
							helperText="Please select your currency"
							margin="normal"
						>
							{variety.map(option => (
							<option key={option.ID} value={option.id}>
								{option.nombre}
							</option>
							))}
						</TextField>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<FilterOptionsCheckbox title="Localidades" key="id" label="nombre" data={locations}/>
				<Divider />
				<FilterOptionsCheckbox title="Variedades" key="id" label="nombre" data={variety}/>
				<Divider />
				<FilterOptionsCheckbox title="Procesos" key="id" label="nombre" data={dataprocess}/>
			</Grid>
		</Grid>
	)
}
