const ThemeModule = {
    state() {
        return {
            value: 'light'
        };
    },
    getters: {
        contrastTheme(state) {
            return state.value === 'light' ? 'dark' : 'light'
        }
    },
    mutations: {
        toggleTheme(state) {
            state.value = (state.value === 'light' ? 'dark' : 'light');
        }
    }
};

export default ThemeModule;