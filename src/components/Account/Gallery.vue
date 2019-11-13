<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Mis Imagenes
          </v-card-title>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card>
                  <v-list-item three-line>
                    <v-list-item-content class="align-self-start">
                      <v-list-item-title class="headline mb-2">
                        Simple Name Image
                      </v-list-item-title>

                      <v-list-item-subtitle>
                        Name cloudinary
                      </v-list-item-subtitle>

                      <v-list-item-subtitle>
                        44 x 500
                      </v-list-item-subtitle>

                      <v-card-actions>
                        <v-btn text color="warning">
                          Descargar
                        </v-btn>
                        <v-btn text color="info">
                          Editar
                        </v-btn>
                      </v-card-actions>
                    </v-list-item-content>

                    <v-list-item-avatar size="125" tile hover>
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>