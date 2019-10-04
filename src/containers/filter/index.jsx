import React, {useState} from 'react';
import Header from './components/header';
import Partners from './components/partners';
import FilterOptions from './components/filterOptions';
import {Divider} from '@material-ui/core';
import SearchAppBar from '../../components/SearchAppBar';
import MapMain from '../map';
export default React.memo(function FilterMain({
    partners,
    locations,
    variety,
    dataprocess,
    certifications,
    bases,
    handleChangeFilter,
    filter
}) {
    const [tab, setTab] = useState(0);
    const handleChangeTab = (event, value) => {
        setTab(value);
    };
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <Header tab={tab} onChangeTab={handleChangeTab} />
            {tab === 0 && (
                <div className="text-white pt-10 pr-20 pb-10 pl-20">
                    <SearchAppBar />
                </div>
            )}
            <Divider className="mb-20" />
            {tab === 0 && <Partners partners={partners} />}
            {tab === 1 && (
                <FilterOptions
                    locations={locations}
                    variety={variety}
                    dataprocess={dataprocess}
                    certifications={certifications}
                    bases={bases}
                    handleChangeFilter={handleChangeFilter}
                    filter={filter}
                />
            )}
            {tab === 2 && <MapMain partners={partners} />}
        </div>
    );
});
