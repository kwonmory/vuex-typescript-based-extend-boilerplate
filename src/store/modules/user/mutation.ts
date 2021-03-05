import { UserStateType } from './state';

export enum UserMutationType {
	SET_LIST = 'User/SET_LIST',
}

export const userMutation = {
	[UserMutationType.SET_LIST](state: UserStateType, list: string[]) {
		state.list = list;
	},
};

export type UserMutation = typeof userMutation;
