<template>
  <v-app>
    <NavBar />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld
  },
  data: () => ({
    //
  }),
};
</script>
