import { action } from 'easy-peasy';
import { actionEffect } from '../store.lib';
import {loadPartnersEpic} from './main.epic'
import {loadLocationsEpic} from './main.epic';
import {loadVarietyEpic} from './main.epic';
import {loadProcessEpic} from './main.epic';

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

const loadLocationsDone = actionEffect((state, paylod) => {
	state.locations = paylod

});

// actions for locations
const loadVariety = actionEffect((state) => {
	state.inProgress = true

}, loadVarietyEpic);

const loadVarietyDone = actionEffect((state, paylod) => {
	state.variety = paylod

});


// actions for process
const loadProcess = actionEffect((state) => {
	state.inProgress = true

}, loadProcessEpic);

const loadProcessDone = actionEffect((state, paylod) => {
	state.dataprocess = paylod

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
	loadProcessDone
}
//actions for filter data