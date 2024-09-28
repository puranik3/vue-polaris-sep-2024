<template>
    <div>
        <b-navbar toggleable="lg" :type="themeValue" :variant="themeValue">
            <b-navbar-brand to="/">Workshops App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- Locally setting up active-class -->
                    <!-- <b-nav-item to="/" active-class="active"> -->

                    <!-- We have set up active-class globally -->
                    <b-nav-item to="/" exact>
                        <!-- Without Vue Bootstrap -->
                        <!-- <router-link to="/">Home</router-link> -->
                        Home
                    </b-nav-item>
                    <b-nav-item to="/workshops">List of Workshops</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="#">Change theme</b-nav-item>
                    <b-nav-item to="/login">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="js">
export default {
    name: 'AppMenu',
    // inject: [ 'theme' ],
    inject: {
        themeValue: {
            "from": 'theme',
            // default: 'light'
        }
    }
}
</script>

<style lang="scss" scoped></style>