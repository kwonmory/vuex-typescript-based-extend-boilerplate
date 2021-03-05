import { UserStateType } from './state';

export enum UserGetterType {
	GET_LIST = 'User/GET_LIST',
}

export const userGetter = {
	[UserGetterType.GET_LIST](state: UserStateType) {
		return state.list.map((v) => `${v}-1`);
	},
};

export type UserGetter = typeof userGetter;
