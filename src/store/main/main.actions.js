import {action} from 'easy-peasy';
import {actionEffect} from '../store.lib';
import {loadPartnersEpic} from './main.effects';
import {loadLocationsEpic} from './main.effects';
import {loadVarietyEpic} from './main.effects';
import {loadProcessEpic} from './main.effects';
import {loadPartnerInfoEpic} from './main.effects';
import {loadCertificationsEpic} from './main.effects';
import {loadBaseEpic} from './main.effects';
import {filterEpic} from './main.effects';

// actions for partners
const loadPartners = actionEffect(state => {
    state.inProgress = true;
}, loadPartnersEpic);

const addPartner = action((state, payload) => {
    state.partners.push(payload);
});

const loadPartnersDone = action((state, payload) => {
    state.inProgress = false;
    state.partners = payload;
});

// actions for locations
const loadLocations = actionEffect(state => {
    state.inProgress = true;
}, loadLocationsEpic);

const loadLocationsDone = action((state, paylod) => {
    state.locations = paylod;
    state.inProgress = false;
});

// actions for locations
const loadVariety = actionEffect(state => {
    state.inProgress = true;
}, loadVarietyEpic);

const loadVarietyDone = action((state, paylod) => {
    state.variety = paylod;
    state.inProgress = false;
});

// actions for process
const loadProcess = actionEffect(state => {
    state.inProgress = true;
}, loadProcessEpic);

const loadProcessDone = action((state, paylod) => {
    state.dataprocess = paylod;
    state.inProgress = false;
});

// actions for process
const loadCertifications = actionEffect(state => {
    state.inProgress = true;
}, loadCertificationsEpic);

const loadCertificationsDone = action((state, paylod) => {
    state.certifications = paylod;
    state.inProgress = false;
});

// actions for info partner

const loadPartnerInfo = actionEffect(state => {
    state.inProgress = true;
}, loadPartnerInfoEpic);

const loadPartnerInfoDone = action((state, payload) => {
    state.inProgress = false;
    state.user.info = payload;
});

// actions for info partner

const loadBase = actionEffect(state => {
    state.inProgress = true;
}, loadBaseEpic);

const loadBaseDone = action((state, payload) => {
    state.inProgress = false;
    state.bases = payload;
});

const handleChangeFilter = actionEffect((state, payload) => {
    let filter = new Set(state.filter[payload.key]);
    if (filter.has(payload.value)) {
        filter.delete(payload.value);
    } else {
        filter.add(payload.value);
    }
    state.filter[payload.key] = [...filter];
}, loadPartnersEpic);
export default {
    loadLocations,
    loadLocationsDone,
    addPartner,
    loadPartners,
    loadPartnersDone,
    loadVariety,
    loadVarietyDone,
    loadProcess,
    loadProcessDone,
    loadPartnerInfo,
    loadPartnerInfoDone,
    loadCertifications,
    loadCertificationsDone,
    loadBase,
    loadBaseDone,
    handleChangeFilter
};
//actions for filter data
