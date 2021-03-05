import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { UserMutation } from './modules/user/mutation';
import { AnimalMutation } from './modules/animal/mutation';
import { UserAction } from './modules/user/action';
import { AnimalAction } from './modules/animal/action';
import { UserGetter } from './modules/user/getter';
import { AnimalGetter } from './modules/animal/getter';
import { AnimalStateType } from './modules/animal/state';
import { UserStateType } from './modules/user/state';

export type RootStateType = { Animal: AnimalStateType; User: UserStateType };
type MergedMutation = UserMutation & AnimalMutation;
type MergedGetter = UserGetter & AnimalGetter;
type MergedAction = UserAction & AnimalAction;

type CustomMutation = {
	commit<K extends keyof MergedMutation, P extends Parameters<MergedMutation[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions,
	): ReturnType<MergedMutation[K]>;
};

type CustomActions = {
	dispatch<K extends keyof MergedAction>(
		key: K,
		payload?: Parameters<MergedAction[K]>[1],
		options?: DispatchOptions,
	): ReturnType<MergedAction[K]>;
};

type CustomGetters = {
	getters: {
		[K in keyof MergedGetter]: ReturnType<MergedGetter[K]>;
	};
};

export type CustomStore = Omit<Store<RootStateType>, 'commit' | 'dispatch' | 'getters'> &
	CustomMutation &
	CustomActions &
	CustomGetters;
