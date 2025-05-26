<script setup>
import { defineProps } from 'vue'

defineProps({
  text: String,
  iconUrl: {
    type: String,
    required: false
  },
  bgColor: {
    type: String,
    default: 'bg-sky-800'
  }
})
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[
      'text-white py-1 px-4 rounded-2xl w-fit flex items-center gap-2',
      bgColor
    ]"
  >
    <img v-if="iconUrl" :src="iconUrl" :alt="text" class="w-4 h-4" />
    <p class="text-xs">{{ text }}</p>
  </div>
</template>
