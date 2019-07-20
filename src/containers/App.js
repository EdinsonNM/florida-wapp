import React, {useEffect} from 'react';
import './App.css';
import FilterMain from './filter';
import MapMain from './map';
import {Grid} from '@material-ui/core';
import {useStoreState, useStoreActions} from 'easy-peasy';
import UserResume from './UserResume';
import LinearProgressBar from '../components/LinearProgressBar';

function App() {
    const {
        partners,
        locations,
        variety,
        dataprocess,
        inProgress
    } = useStoreState(state => state.Main);
    const {
        loadLocations,
        loadPartners,
        loadVariety,
        loadProcess
    } = useStoreActions(actions => actions.Main);

    useEffect(() => {
        loadPartners();
        loadLocations();
        loadVariety();
        loadProcess();
    }, [loadLocations, loadPartners, loadProcess, loadVariety]);
    return (
        <Grid className="App" container spacing={0}>
            <Grid
                item
                xs={12}
                sm={4}
                md={4}
                className="App-Filter"
                style={{height: '100%'}}
            >
                <FilterMain
                    partners={partners}
                    locations={locations}
                    variety={variety}
                    dataprocess={dataprocess}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={8} className="App-Map">
                <MapMain />
                <UserResume />
            </Grid>
            {inProgress && <LinearProgressBar />}
        </Grid>
    );
}

export default App;
