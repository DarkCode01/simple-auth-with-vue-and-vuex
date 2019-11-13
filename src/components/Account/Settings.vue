<template>
  <v-container class="pa-2" fluid>
      <v-row>
        <v-col cols="5">
            <v-card>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>

                <v-card-title>Ncknameeeeee</v-card-title>
                <v-card-text>
                    <div>
                        email@gmail.com
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-col>
        <v-col cols="7">
             <v-card>
                <v-card-title>
                    <span class="headline">Editar Cuenta</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field value="darkcoder" label="Nickname" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field value="email" label="Email" required></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="Confirme contraseña*" type="password" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text>Guardar</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>