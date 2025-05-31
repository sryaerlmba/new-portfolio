<script setup>
import { defineProps } from 'vue';
import ButtonHover from './ButtonHover.vue';
console.log("halllo")

defineProps({
  text: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  font: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    required: false,
  }
})

</script>

<template>
  <div
    class="border bg-white rounded-lg shadow-lg border-gray-100 p-5 flex flex-col justify-between"
  >
    <div class="">
      <i :class="font" class="block text-6xl mb-3 text-center text-sky-800"></i>
      <!-- icon contoh -->
      <h1 class="font-bold text-lg mb-2 text-center">{{ title }}</h1>
      <p class="mb-4 text-center">{{ desc }}</p>
    </div>
    <ButtonHover class="w-full text-center" :text="text" :page="to" />
  </div>
</template>
