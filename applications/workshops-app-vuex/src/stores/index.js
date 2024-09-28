import { Store } from 'vuex';
import ThemeModule from './modules/theme';

const store = new Store({
    modules: {
        theme: ThemeModule
    }
});

export default store;