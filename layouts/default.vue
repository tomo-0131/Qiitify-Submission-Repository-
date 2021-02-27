<template>
  <v-app>
    <v-main>
      <TheHeader />
      <v-container>
        <nuxt />
      </v-container>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/headers/TheHeader.vue'
import TheFooter from '@/components/footers/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}

</script>
