import { action } from 'easy-peasy';
import { actionEffect } from '../store.lib';
import {loadPartnersEpic} from './main.effects'
import {loadLocationsEpic} from './main.effects';
import {loadVarietyEpic} from './main.effects';
import {loadProcessEpic} from './main.effects';
import {loadPartnerInfoEpic} from './main.effects';

// actions for partners
const loadPartners = actionEffect((state) => {
	state.inProgress = true

}, loadPartnersEpic);

const addPartner = action((state, payload) => { 
	state.partners.push(payload)
});

const loadPartnersDone = action((state, payload) => { 
	state.inProgress = false
	state.partners = payload
});

// actions for locations
const loadLocations = actionEffect((state) => {
	state.inProgress = true

}, loadLocationsEpic);

const loadLocationsDone = action((state, paylod) => {
	state.locations = paylod

});

// actions for locations
const loadVariety = actionEffect((state) => {
	state.inProgress = true

}, loadVarietyEpic);

const loadVarietyDone = action((state, paylod) => {
	state.variety = paylod

});


// actions for process
const loadProcess = actionEffect((state) => {
	state.inProgress = true

}, loadProcessEpic);

const loadProcessDone = action((state, paylod) => {
	state.dataprocess = paylod
});

// actions for info partner

const loadPartnerInfo = actionEffect((state) => {
	state.inProgress = true

}, loadPartnerInfoEpic);

const loadPartnerInfoDone = action((state, payload) => {
	state.inProgress = false
	state.userResume.info= payload;
});

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
	loadPartnerInfoDone
}
//actions for filter data