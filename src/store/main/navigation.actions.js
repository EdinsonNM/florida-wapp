import {action} from 'easy-peasy';

const handleToggleUserResume = action((state, payload) => {
    state.openResume = !state.openResume;
    if (state.openResume) {
        state.user = payload;
    }
});

const handleToggleUserModal = action((state, payload) => {
    state.openModalUser = !state.openModalUser;
    if (state.openModalUser) {
        state.user = payload;
    }
});

export default {
    handleToggleUserResume,
    handleToggleUserModal
};
//actions for filter data
