<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

</script>

<template>
    <nav class="bg-white shadow-xl">
      <div class="mx-auto container px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <span class="text-sky-800 font-bold text-2xl">Surya.</span>
        </div>

        <div class="hidden sm:block">
          <div class="flex space-x-1">
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-sky-800 hover:text-sky-800">Home</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800">Experience</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800">Education</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800">Projects</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800">Skills</a>
            <a href="#" class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800">Contact</a>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            aria-controls="mobile-menu"
            @click="toggleMenu"
            :aria-expanded="isOpen"
            >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isOpen" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Home</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Experience</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Education</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Projects</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Skills</a>
        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800">Contact</a>
      </div>
    </div>
  </nav>
</template>
