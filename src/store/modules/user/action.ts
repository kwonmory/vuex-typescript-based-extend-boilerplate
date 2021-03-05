import { RootStateType } from '@/store/types';
import { ActionContext } from 'vuex';
import { UserMutation, UserMutationType } from './mutation';
import { UserStateType } from './state';

export enum UserActionType {
	FETCH_LIST = 'User/FETCH_LIST',
}

export type UserActionContext = {
	commit<K extends keyof UserMutation>(key: K, payload?: Parameters<UserMutation[K]>[1]): ReturnType<UserMutation[K]>;
} & Omit<ActionContext<UserStateType, RootStateType>, 'commit'>;

export const userAction = {
	async [UserActionType.FETCH_LIST](context: UserActionContext, payload: string[]) {
		context.commit(UserMutationType.SET_LIST, payload);
		return 'return-value';
	},
};

export type UserAction = typeof userAction;
