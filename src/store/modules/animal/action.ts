import { RootStateType } from '@/store/types';
import { ActionContext } from 'vuex';
import { AnimalMutation, AnimalMutationType } from './mutation';
import { AnimalStateType } from './state';

export enum AnimalActionType {
	FETCH_LIST = 'Animal/FETCH_LIST',
}

export type AnimalActionContext = {
	commit<K extends keyof AnimalMutation>(
		key: K,
		payload?: Parameters<AnimalMutation[K]>[1],
	): ReturnType<AnimalMutation[K]>;
} & Omit<ActionContext<AnimalStateType, RootStateType>, 'commit'>;

export const animalAction = {
	async [AnimalActionType.FETCH_LIST](context: AnimalActionContext, payload: string[]) {
		context.commit(AnimalMutationType.SET_LIST, payload);
		return 'return anything..';
	},
};

export type AnimalAction = typeof animalAction;
