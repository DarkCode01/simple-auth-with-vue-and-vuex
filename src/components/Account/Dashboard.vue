<template>
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col cols="6">
          <v-card dark >
            <v-card-text class="white--text">
              <div class="headline mb-2">Imagene Subidas</div>
              100
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card dark >
            <v-card-text class="white--text">
              <div class="headline mb-2">Imagenes Editadas</div>
              90
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div class="headline mb-2">Estadisticas Imagenes [Editadas]</div>
              <column-chart :data="data"></column-chart>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div class="headline mb-2">
                Estadisticas Imagenes [Subidas]
              </div>
              <column-chart :data="data"></column-chart>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    data: [
      ['Enero', 32],
      ['Febrero', 78],
      ['Marzo', 89],
      ['Abril', 67],
      ['Mayo', 7],
      ['Junio', 78],
      ['Julio', 78],
      ['Agosto', 45],
      ['Septiembre', 67],
      ['Octubre', 45],
      ['Noviembre', 56],
      ['Diciembre', 45]
    ]
  })
}
</script>