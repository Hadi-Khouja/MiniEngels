<style scoped></style>

<template>
  <p class="text-h5 ma-4">Events</p>
  <v-skeleton-loader v-if="events === 'LOADING'" type="list-item-two-line"></v-skeleton-loader>
  <div v-else>
    <v-card
      v-for="event in events"
      class="ma-4"
      :key="event.id"
      :title="event.name"
      :subtitle="formatDate(event.date)"
      :text="event.description"
    ></v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { EventDto } from '@/types/event';
import { getEvents } from '@/firebase/firebase';

const events: Ref<EventDto[] | 'LOADING'> = ref('LOADING');

getEvents().then((eventsDto) => {
  events.value = eventsDto;
});

function formatDate(isoDate: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return formatter.format(new Date(isoDate));
}
</script>
