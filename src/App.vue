<style scoped></style>

<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template #prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <v-img :src="logo" :max-height="60" :max-width="200" :position="'left'"></v-img>
      </v-app-bar-title>
      <template #append>
        <v-btn class="mr-2" icon="mdi-magnify" :variant="'text'"></v-btn>
      </template>

      <template #extension>
        <v-tabs align-tabs="title" :color="'secondary'">
          <v-tab :text="'Home'" :to="{ name: 'HOME' }"></v-tab>
          <v-tab :text="'Research'" :to="{ name: 'RESEARCH' }"></v-tab>
          <v-tab :text="'Publications'" :to="{ name: 'PUBLICATIONS' }"></v-tab>
          <v-tab :text="'News'" :to="{ name: 'NEWS' }"></v-tab>
          <v-tab :text="'Events'" :to="{ name: 'EVENTS' }"></v-tab>
          <v-tab :text="'Career'" :to="{ name: 'CAREER' }"></v-tab>
          <v-tab :text="'Training'" :to="{ name: 'TRAINING' }"></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <RouterView></RouterView>
    </v-main>

    <v-footer class="ga-4" color="secondary">
      <v-icon icon="mdi-facebook"></v-icon>
      <v-icon icon="mdi-instagram"></v-icon>
      <v-icon icon="mdi-twitter"></v-icon>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import logo from '@/assets/logo.png';
</script>
