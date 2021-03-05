import Vue from 'vue';
import { CustomStore } from '../store/types';

declare module 'vue/types/vue' {
	interface Vue {
		$store: CustomStore;
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		store?: CustomStore;
	}
}
