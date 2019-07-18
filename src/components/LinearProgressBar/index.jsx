import React from 'react'
import {LinearProgress} from '@material-ui/core';
import './styles.scss'

export default function LinearProgressBar() {
	return (
		<div className="LinearProgress">
			<LinearProgress color="secondary" variant="query" />
		</div>

	)
}
