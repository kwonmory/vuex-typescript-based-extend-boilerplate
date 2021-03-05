import { AnimalStateType } from './state';

export enum AnimalGetterType {
	GET_LIST = 'Animal/GET_LIST',
}

export const animalGetter = {
	[AnimalGetterType.GET_LIST](state: AnimalStateType) {
		return state.list.map((v) => `${v}-1`);
	},
};

export type AnimalGetter = typeof animalGetter;
