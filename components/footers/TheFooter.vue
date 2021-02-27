<template>
  <div class="wrapper">
    <v-footer color="green lighten-2">
      <v-col class="text-center" cols="12">
        <div class="footer">
          {{ new Date().getFullYear() }} — Copyright Tomoyuki Kumagai All rights
          reserved
        </div>
      </v-col>
    </v-footer>
  </div>
</template>

<style>
  .footer {
    position: relative;
    bottom: 0;
    color: aliceblue;
  }
</style>
