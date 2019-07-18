import React from 'react'
import { AntTabs, AntTab } from '../../../components/AntTab';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import SearchAppBar from '../../../components/SearchAppBar';

export default React.memo(function Header({tab, onChangeTab}) {
	let title;
	switch(tab){
		case 0: title='La Florida';break;
		case 1: title='Filtrar busqueda por';break;
		default: title='La Florida'
	}
	return (
		<AppBar position="relative" elevation={0}>
			<Toolbar variant="dense" disableGutters>
				<SearchAppBar/>
				<div style={{flexGrow: 1}}></div>
				<AntTabs value={tab} onChange={onChangeTab}>
					<AntTab label="Resultados" />
					<AntTab label="Filtro" />
				</AntTabs>
			</Toolbar>
			<Toolbar>
				<Typography variant="h3">{title}</Typography>
			</Toolbar>
		</AppBar>
	)
})
