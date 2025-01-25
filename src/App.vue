<style scoped></style>

<template>
  <v-app>
    <v-app-bar :elevation="2" :extension-height="smAndDown ? 0 : 48">
      <template #prepend>
        <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        <v-img :src="logo" :max-height="60" :max-width="200" :position="'left'"></v-img>
      </v-app-bar-title>

      <template #append>
        <v-btn class="mr-2" icon="mdi-magnify" :variant="'text'"></v-btn>
      </template>

      <template #extension>
        <div class="h-auto">
          <v-tabs class="d-none d-sm-none d-md-flex" align-tabs="title" :color="'secondary'">
            <v-tab v-for="item of routes" :text="item.title" :to="item.to"></v-tab>
          </v-tabs>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="item of routes" :title="item.title" :to="item.to"></v-list-item>
      </v-list>
    </v-navigation-drawer>

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
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import logo from '@/assets/logo.png';
import { useDisplay } from 'vuetify';

const drawer = ref(false);
const { smAndDown } = useDisplay();

const routes = [
  { title: 'Home', to: { name: 'HOME' } },
  { title: 'Research', to: { name: 'RESEARCH' } },
  { title: 'Publications', to: { name: 'PUBLICATIONS' } },
  { title: 'News', to: { name: 'NEWS' } },
  { title: 'Events', to: { name: 'EVENTS' } },
  { title: 'Career', to: { name: 'CAREER' } },
  { title: 'Training', to: { name: 'TRAINING' } },
];
</script>
