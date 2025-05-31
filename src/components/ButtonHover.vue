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
  icon: {
    type: String,
    required: false,
  },
  page: {
    type: String,
    required: false,
  }
})

</script>

<template>
  <RouterLink
    v-if="page"
    v-bind="$attrs"
    :to="{ name:page }"
    class="flex border py-3 px-6 hover:bg-sky-800 rounded-sm hover:text-white cursor-pointer transition ease-in-out duration-300 items-center justify-center"
  >
    <i :class="[icon, `mr-2`]"></i>
    <span>{{ text }}</span>
  </RouterLink>
  <a
    v-else
    v-bind="$attrs"
    target="_blank"
    :href="link"
    class="flex border py-2 px-6 hover:bg-sky-800 rounded-sm hover:text-white cursor-pointer transition ease-in-out duration-300 items-center justify-center"
  >
    <i :class="[icon, `mr-2`]"></i>
    <span>{{ text }}</span>
  </a>
</template>
