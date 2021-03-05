import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import userModule from './modules/user';
import animalModule from './modules/animal';
import { RootStateType } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootStateType> = {
	modules: {
		User: userModule,
		Animal: animalModule,
	},
};

export default new Vuex.Store(store);
