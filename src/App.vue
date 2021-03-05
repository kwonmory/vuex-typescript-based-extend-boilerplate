<template>
	<div id="app">
		<div>
			<h1>Apply Typescript in Vuex!</h1>
			<section>
				<ul>
					<li>animal state : {{ $store.state.Animal.list }}</li>
					<li>user state : {{ $store.state.User.list }}</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { UserMutationType } from './store/modules/user/mutation';
import { AnimalMutationType } from './store/modules/animal/mutation';
import { UserActionType } from './store/modules/user/action';
import { AnimalActionType } from './store/modules/animal/action';
import { AnimalGetterType } from './store/modules/animal/getter';

export default Vue.extend({
	created() {
		// commit
		this.$store.commit(UserMutationType.SET_LIST);
		this.$store.commit(AnimalMutationType.SET_LIST);

		// dispatch
		this.$store.dispatch(UserActionType.FETCH_LIST, ['user1', 'user2']);
		this.$store.dispatch(AnimalActionType.FETCH_LIST, ['animal1', 'animal2']);

		// getter
		console.log(this.$store.getters[AnimalGetterType.GET_LIST]);
	},
});
</script>

<style lang="scss">
#app {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
}
</style>
