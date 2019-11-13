<template>
  <v-app>
    <NavBarDashboard  v-if="isAuth()" />
    <NavBar v-else />
    
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import NavBar from './components/NavBar';
import NavBarDashboard from './components/Account/NavBar';

export default {
  name: 'App',
  methods: {
    isAuth: () => {
      return localStorage.getItem('isAuthenticated');
    }
  },
  components: {
    NavBar,
    NavBarDashboard
  }
};
</script>
