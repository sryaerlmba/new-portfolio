<script setup>
defineProps({
  link: {
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
  }
})
</script>

<template>
  <RouterLink
    v-if="link"
    v-bind="$attrs"
    :to="link"
    class="flex items-center border bg-sky-800 text-white py-3 px-6 rounded-sm cursor-pointer hover:bg-sky-600 transition duration-300"
  >
    <i v-if="font" :class="font" class="mr-2"></i>
    <span>{{ text }}</span>
  </RouterLink>

  <button
    v-else
    v-bind="$attrs"
    class="flex items-center border bg-sky-800 text-white py-3 px-6 rounded-sm cursor-pointer hover:bg-sky-600 transition duration-300"
  >
    <i v-if="font" :class="font" class="mr-2"></i>
    <span>{{ text }}</span>
  </button>
</template>
