<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  font: {
    type: String,
    required: false,
  },
})

</script>

<template>
  <RouterLink
    v-if="link"
    v-bind="$attrs"
    :to="link"
    class="flex border py-3 px-6 hover:bg-sky-800 rounded-sm hover:text-white cursor-pointer transition ease-in-out duration-300 items-center justify-center"
  >
    <i :class="[font, `mr-2`]"></i>
    <span>{{ text }}</span>
  </RouterLink>
  <button
    v-else
    v-bind="$attrs"
    class="flex border py-2 px-6 hover:bg-sky-800 rounded-sm hover:text-white cursor-pointer transition ease-in-out duration-300 items-center justify-center"
  >
    <i :class="[font, `mr-2`]"></i>
    <span>{{ text }}</span>
  </button>
</template>
