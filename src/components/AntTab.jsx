import { Tab } from '@material-ui/core';
import {withStyles, Tabs} from '@material-ui/core';
import React from 'react';

export const AntTabs = withStyles({
	root: {
		
	},
	indicator: {
		backgroundColor: '#EA8963',
		height: 5,
		borderRadius: 10
	},
	})(Tabs);

export const AntTab = withStyles(theme => ({
root: {
	textTransform: 'none',
	minWidth: 60,
	fontWeight: theme.typography.fontWeightBold,
	marginRight: theme.spacing(2),
	fontSize: 14,
	fontFamily: [
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
	].join(','),
	'&:hover': {
	color: '#fff',
	opacity: 1,
	},
	'&$selected': {
	color: '#fff',
	fontWeight: theme.typography.fontWeightBold,
	},
	'&:focus': {
	color: '#EA8963',
	},
},
selected: {},
}))(props => <Tab disableRipple {...props} />);
