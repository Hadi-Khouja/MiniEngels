<style scoped></style>

<template>
  <v-carousel>
    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
  <v-form id="form">
        <v-text-field 
            label="email"
            v-model="email"
            variant="filled"
            id="user"
            class="mb-3"
            :autocomplete="'username'"
            ref="usernamefield"
            color="primary"
            :readonly="userNameEntered"
            type="email"
            autofocus
            name="username"
        >
          <template v-slot:append-inner>
            <v-btn
              v-if="!userNameEntered"
              variant="plain"
              icon='mdi-arrow-right'
              @click="userNameEnteredHandler($event)"
              id="enterUserName"
              :loading="isProcessingUsername"
            ></v-btn>
            <v-btn 
              v-else
              id="changeUserName"
              variant="text"
              @click="userNameEntered=false; password=''"
              color="primary"
              :text="'change'"
            ></v-btn>
          </template>
        </v-text-field>
        <v-text-field 
          v-show="userNameEntered"
          :type="showPassword ? 'text' : 'password'"
          :label="'password'"
          placeholder=""
          v-model="password"
          variant="filled"
          hide-details="auto"
          :error-messages="errormessage"
          id="password"
          class="mb-2"
          :autocomplete="'current-password'"
          ref="passwordfield"
          color="primary"
          autofocus
          name="password"
        >
          <template v-slot:append-inner>
            <v-tooltip location="bottom" id="tooltipShowPassword">
              <template v-slot:activator="{ props }">
                <v-btn
                  variant="plain"
                  v-bind="props"
                  id="pwdShowHideBtn"
                  :aria-label="showPassword ? 'hide' : 'show'"
                  :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click.stop="showPassword = !showPassword"
                />
              </template>
              {{ showPassword ? 'hide' : 'show' }}
            </v-tooltip>
          </template>
        </v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const userNameEntered = ref(false);
const isProcessingUsername = ref(false);
const errormessage = ref(''); 


function userNameEnteredHandler(event: Event) {
  userNameEntered.value = true;
}
</script>
