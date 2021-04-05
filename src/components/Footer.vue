<template>
  <v-footer
      color="primary"
      padless
      absolute
  >
    <v-row
        justify="center"
        no-gutters>
      <v-btn v-for="link in links"
      :key="link"
      color="white"
      text
      rouded
      class="my-2">{{ link }}</v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear()}}- <strong>Todo List</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ]

  })
}
</script>

<style scoped>

</style>