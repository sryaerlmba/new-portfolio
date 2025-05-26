<script setup>
defineProps({
  page: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true, // wajib, biar button gak kosong
  },
  font: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <RouterLink
    v-if="page"
    v-bind="$attrs"
    :to="page"
    class="flex items-center border bg-sky-800 text-white py-3 px-6 rounded-sm cursor-pointer hover:bg-sky-600 transition duration-300"
  >
    <i v-if="font" :class="font" class="mr-2"></i>
    <span>{{ text }}</span>
  </RouterLink>

  <a
    v-else
    v-bind="$attrs"
    :href="link"
    class="flex items-center border bg-sky-800 text-white py-3 px-6 rounded-sm cursor-pointer hover:bg-sky-600 transition duration-300"
  >
    <i v-if="font" :class="font" class="mr-2"></i>
    <span>{{ text }}</span>
  </a>
</template>
