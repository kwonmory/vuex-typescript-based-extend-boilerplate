import { Module } from 'vuex';
import { userState, UserStateType } from './state';
import { userMutation } from './mutation';
import { userAction } from './action';
import { userGetter } from '../user/getter';
import { RootStateType } from '@/store/types';

const userModule: Module<UserStateType, RootStateType> = {
	state: userState,
	mutations: userMutation,
	actions: userAction,
	getters: userGetter,
};

export default userModule;
