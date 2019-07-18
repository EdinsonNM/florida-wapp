import React, { useState } from 'react'
import Header from './components/header'
import Partners from './components/partners'
import FilterOptions from './components/filterOptions';
import { Divider } from '@material-ui/core';

export default React.memo(function FilterMain({partners, locations, variety, dataprocess}) {
	const [tab, setTab] = useState(0)
	const handleChangeTab = (event, value) => {
		setTab(value)
	}
	return (
		<div>
			<Header tab={tab} onChangeTab={handleChangeTab}/>
			<Divider className="mb-20"/>
			{tab===0 && <Partners partners={partners}/>}
			{tab===1 && <FilterOptions locations={locations} variety={variety} dataprocess={dataprocess}/>}
		</div>
	)
})
