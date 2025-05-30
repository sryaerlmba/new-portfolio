<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const showButton = ref(false)

// fungsi untuk mengecek posisi scroll
const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
// end function

onMounted(async () => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

</script>

<template>
  <Transition>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-sky-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
      aria-label="Back to top"
    >
      <!-- Icon panah ke atas (bisa pakai SVG) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>
