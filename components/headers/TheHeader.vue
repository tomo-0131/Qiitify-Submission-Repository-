<template>
  <v-tool-bar dense fixed>
    <br>
    <v-toolbar-title class="text-center">
      <nuxt-link to="/"><h2>Q i i t i f y</h2></nuxt-link>
    </v-toolbar-title>

    <v-tabs v-model="tab" centered color="green" hide-slider="true">
      <v-tab>
        <nuxt-link to="/">HOME</nuxt-link>
      </v-tab>
      <v-tab>
        <v-toolbar-items>
          <v-menu offset-y>
            <template #activator="{on}">
              <v-btn text v-on="on">TASK</v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <nuxt-link to="/">課題1</nuxt-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <nuxt-link to="/task2">TASK2</nuxt-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <nuxt-link to="/task3">TASK3</nuxt-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <nuxt-link to="/task4">TASK4</nuxt-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-tab>
      <v-tab>
        <nuxt-link to="/post">POST</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link to="/techstack">TECH STACK</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link to="/contact">CONTACT</nuxt-link>
      </v-tab>
    </v-tabs>
  </v-tool-bar>
</template>

<style>
a {
  text-decoration: none;
  color: #414141 !important;
}
</style>
