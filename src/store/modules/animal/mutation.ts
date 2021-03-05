import { AnimalStateType } from './state';

export enum AnimalMutationType {
	SET_LIST = 'Animal/SET_LIST',
}

export const animalMutation = {
	[AnimalMutationType.SET_LIST](state: AnimalStateType, list: string[]) {
		state.list = list;
	},
};

export type AnimalMutation = typeof animalMutation;
