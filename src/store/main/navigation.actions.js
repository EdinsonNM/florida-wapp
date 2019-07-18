import {action} from 'easy-peasy';

const handleToggleUserResume = action((state, payload) => { 
	state.openResume = !state.openResume 
	state.userResume= payload;
});

export default {
	handleToggleUserResume,
}
//actions for filter data