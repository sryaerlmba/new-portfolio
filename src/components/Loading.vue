<script setup>
import { useLoadingStore } from '@/stores/loading'

const loadingStore = useLoadingStore()
</script>

<template>
  <Transition>
    <div
      v-if="loadingStore.isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50"
    >
      <div
        class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"
      ></div>
      <p class="text-white text-lg font-semibold">Loading...</p>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
