import React, {useEffect, useState} from 'react';
import './App.css';
import FilterMain from './filter';
import MapMain from './map';
import {Grid} from '@material-ui/core';
import {useStoreState, useStoreActions} from 'easy-peasy';
import UserResume from './UserResume';
import LinearProgressBar from '../components/LinearProgressBar';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PartnerDetail from './PartnerDetail/index';

function App() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const {
        partners,
        locations,
        variety,
        dataprocess,
        inProgress,
        certifications,
        bases,
        filter
    } = useStoreState(state => state.Main);
    const {
        loadLocations,
        loadPartners,
        loadVariety,
        loadProcess,
        loadCertifications,
        loadBase,
        handleChangeFilter
    } = useStoreActions(actions => actions.Main);

    useEffect(() => {
        loadPartners();
        loadLocations();
        loadVariety();
        loadProcess();
        loadCertifications();
        loadBase();
    }, [
        loadBase,
        loadCertifications,
        loadLocations,
        loadPartners,
        loadProcess,
        loadVariety
    ]);
    const [widthResume, setWidthResume] = useState(0);

    useEffect(() => {
        setWidthResume(document.getElementById('filter-container').offsetWidth);
        window.addEventListener('resize', () => {
            let width = document.getElementById('filter-container').offsetWidth;
            console.log('resize....', width);
            setWidthResume(width);
        });
    }, []);
    return (
        <Grid className="App" container spacing={0}>
            <Grid
                id="filter-container"
                item
                xs={12}
                sm={6}
                md={4}
                className="App-Filter"
                style={{height: '100%'}}
            >
                <FilterMain
                    partners={partners}
                    locations={locations}
                    variety={variety}
                    dataprocess={dataprocess}
                    certifications={certifications}
                    bases={bases}
                    handleChangeFilter={handleChangeFilter}
                    filter={filter}
                />
            </Grid>
            {matches && (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}
                    className="App-Map"
                    id="map-container"
                >
                    <MapMain partners={partners} />
                </Grid>
            )}
            <UserResume width={widthResume} />
            <PartnerDetail />
            {inProgress && <LinearProgressBar />}
        </Grid>
    );
}

export default App;
