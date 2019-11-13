<template>
  <v-app>
    <NavBar />
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar';
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    NavBar,
    HelloWorld
  },
};
</script>
