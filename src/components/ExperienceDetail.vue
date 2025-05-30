<script setup>
import { defineProps } from 'vue';
import Badge from './Badge.vue';

defineProps({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  techStack: {
    type: Array,
    required: true,
  },
})

</script>

<template>
  <div class="border-gray-400 border rounded-sm flex flex-col md:flex-row md:gap-5">
    <div class="bg-gray-200 md:w-1/4 w-full p-5">
      <p class="font-semibold text-black">{{ type }}</p>
      <h1 class="text-black font-bold text-2xl">{{ title }}</h1>
      <p class="text-gray-600">{{ company }}</p>
      <div class="flex gap-1">
        <i class="ri-calendar-line"></i>
        <p>{{ period }}</p>
      </div>
    </div>

    <div class="md:w-3/4 w-full p-5 md:p-5">
      <ul class="flex flex-col gap">
        <li class="font-medium text-gray-600" v-for="(item, index) in details" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="flex flex-wrap gap-2 mt-2">
        <Badge v-for="(item, index) in techStack" :text="item" :key="index" />
      </div>
    </div>
  </div>

</template>
