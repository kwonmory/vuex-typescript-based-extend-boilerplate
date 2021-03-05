import { Module } from 'vuex';
import { RootStateType } from '@/store/types';
import { animalState, AnimalStateType } from './state';
import { animalMutation } from './mutation';
import { animalAction } from './action';
import { animalGetter } from '../animal/getter';

const animalModule: Module<AnimalStateType, RootStateType> = {
	state: animalState,
	mutations: animalMutation,
	actions: animalAction,
	getters: animalGetter,
};

export default animalModule;
