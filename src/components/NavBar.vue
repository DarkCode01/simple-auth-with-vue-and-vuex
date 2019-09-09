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
    <v-dialog v-model="dialog" persistent max-width="50%">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on">
            Acceder
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
            Inicio de sesion
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="12" sm="6">
                  <v-btn dark v-on="on">
                    Iniciar con Google
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn dark v-on="on">
                    Iniciar con Facebook
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="danger" text @click="handle">Cerrar</v-btn>
            <v-btn color="green darken-1" text @click="handle">Acceder</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    dialog: false
  }),
  methods: {
    handle: function() {
      this.dialog = false;
    }
  }
}
</script>