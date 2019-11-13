<template>
  <v-app>
    <NavBar />
    <v-content>
        <Index />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '../components/Account/NavBar';

export default {
    name: 'Dashboard',
    components: {
        Index,
        NavBar
    }
}
</script>