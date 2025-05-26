<script setup>
import { defineProps } from 'vue'
import Badge from './Badge.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
})

</script>

<template>
  <div class="px-5 sm:p-0 h-full">
    <div class="border p-5 bg-white border-gray-800 rounded-sm h-full">
      <h1 class="font-semibold text-xl">{{ title }}</h1>
      <div class="flex mt-5 gap-2 flex-wrap">
        <Badge v-for="(item, index) in skills" :key="index" :text="item.name" :icon-url="item.cdn" bg-color="bg-gray-800" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
