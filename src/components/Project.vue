<script setup>
import { defineProps } from 'vue'
import Badge from './Badge.vue';
import ButtonHover from './ButtonHover.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  badges: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="px-5 sm:p-0">
    <div class="border p-5 border-gray-400 flex flex-col h-full" v-bind="$attrs">
      <div class="flex gap-2 items-center">
        <i class="ri-code-line text-sky-800 text-xl"></i>
        <p class="text-xl font-semibold">{{ title }}</p>
      </div>
      <div class="flex gap-2 items-center mt-3">
        <i class="ri-calendar-line text-gray-600 text-lg"></i>
        <p class="text-lg font-semibold text-gray-600">{{ period }}</p>
      </div>
      <p class="mt-3">{{ desc }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <Badge v-for="(item, index) in badges" :key="index" :text="item" class="shadow-2xl" />
      </div>
      <div class="mt-auto pt-5">
        <ButtonHover :text="`View Project`"/>
      </div>
    </div>
  </div>
</template>
