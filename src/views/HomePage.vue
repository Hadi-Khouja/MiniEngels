<style scoped></style>

<template>
  <v-form id="form" class="ma-6">
        <v-text-field 
            label="email"
            v-model="email"
            variant="filled"
            id="user"
            :autocomplete="'username'"
            ref="usernamefield"
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
              :text="'change'"
            ></v-btn>
          </template>
        </v-text-field>
        <v-text-field 
          v-show="userNameEntered"
          :type="showPassword ? 'text' : 'password'"
          :label="'password'"
          v-model="password"
          variant="filled"
          hide-details="auto"
          id="password"
          class="mb-2"
          :autocomplete="'current-password'"
          ref="passwordfield"
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


function userNameEnteredHandler(event: Event) {
  userNameEntered.value = true;
}
</script>
