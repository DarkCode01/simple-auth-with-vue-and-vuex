<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <span>Im-Edit</span>
      <span class="font-weight-light">
        <v-chip color="danger">Beta</v-chip>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialogLogin" persistent max-width="50%">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">
          Acceder
        </v-btn>
      </template>
      <v-card :loading="isLoading">
        <v-card-title class="headline">
          <span class="text-center">Inicio de sesion</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-alert v-if="isNotification" style="color: white;" :color="notification.type" class="text-center font-weight-black" close>
              {{ notification.message }}
            </v-alert>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="login.email" label="Nickname o Email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="login.password" label="Contraseña" type="password" required></v-text-field>
              </v-col>
              <v-divider></v-divider>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="danger" text @click="handleLogin">Cerrar</v-btn>
          <v-btn color="green darken-1" text @click="getToken">Acceder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    &ensp;
    <v-dialog v-model="dialogRegister" persistent max-width="50%">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on">
          Registrase
        </v-btn>
      </template>
      <v-card :loading="isLoading">
        <v-card-title class="headline">
          <span class="text-center">Registrar nueva cuenta</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-alert v-if="isNotification" style="color: white;" :color="notification.type" class="text-center font-weight-black" close>
              {{ notification.message }}
            </v-alert>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Escribe tu nikname: darkcoder" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field type="email" label="Escriba su Email"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Contraseña" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Confirma Contraseña" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="danger" text @click="handleRegister">Cerrar</v-btn>
          <v-btn color="warning darken-1" text @click="createAccount">Crear Cuenta</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { ACTION_TYPES_SESSION, ACTION_TYPES_ACCOUNT } from '../store/actions';

export default {
  name: 'NavBar',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      isNotification: state => state.isNotification,
      notification: state => state.notification
    })
  },
  data: () => ({
    dialogLogin: false,
    dialogRegister: false,
    login: {
      email: '',
      password: ''
    },
    register: {
      nickname: '',
      email: '',
      password: '',
      password1: ''
    }
  }),
  methods: {
    handleLogin: function() {
      this.dialogLogin = false;
    },
    handleRegister: function() {
      this.dialogRegister = false;
    },
    getToken: function() {
      this.$store.dispatch(
        ACTION_TYPES_SESSION.ACTION_GET_TOKEN,
        {
          email: this.login.email,
          password: this.login.password,
        }
      ).then(() => {
          this.$router.push('/dashboard');
        });
    },
    createAccount: function() {
      this.$store.dispatch(
        ACTION_TYPES_ACCOUNT.ACTION_CREATE_NEW_ACCOUNT,
        {
          nickname: this.register.nickname,
          email: this.register.email,
          password: this.register.password,
        }
      )
        .then(() => {
          this.$router.push('/dashboard');
        })
    }
  }
}
</script>