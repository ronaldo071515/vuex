import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const counterStore = {
    //TODO: falta algo = namespaced
    namespaced: true,
    state,
    mutations,/* las mutations siempre son sicronas */
    actions,/* las actions pueden ser asincronas */
    getters
}

export default counterStore