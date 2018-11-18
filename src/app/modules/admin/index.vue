<template>
    <v-app id="inspire">
      <v-toolbar
        color="blue-grey"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>University</v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auditories</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid class="full-height">
             <router-view/>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import routes from './routes'

export default {
  routes,
  data: () => ({
    drawer: false,
    Title: 'Admin'
  }),
  props: {
    source: String
  }
}
</script>

<style scoped>
  .full-height{
    height: 100%;
  }
</style>
