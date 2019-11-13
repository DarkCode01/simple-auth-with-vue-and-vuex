<template>
  <div>
    <v-navigation-drawer app temporary v-model="isOpen" dark>
        <template v-slot:prepend>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Jane Smith</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item link to="/dashboard">
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        dashboard
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="images">
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Mis Imagenes</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/settings">
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Mi Cuenta</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
        <v-app-bar-nav-icon @click="isOpen = !isOpen"></v-app-bar-nav-icon>

        <div class="flex-grow-1"></div>

        <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn type="success">
                Agregar Imagen
                &ensp;
                <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            &ensp;
            <v-btn color="danger" @click="logout">
                Cerrar Sesion
                &ensp;
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </template>
    </v-toolbar>
  </div>
</template>

<script>
import { ACTION_TYPES_SESSION } from '../../store/actions';

export default {
    data: () => ({
        isOpen: true
    }),
    methods: {
        logout: function() {
            this.$store.dispatch(ACTION_TYPES_SESSION.ACTION_LOG_OUT)
                // .then(() => {
                //     this.$router.push('/');
                // });
        }
    }
}
</script>