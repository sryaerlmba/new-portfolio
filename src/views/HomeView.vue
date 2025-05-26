<script setup>
import Nav from '@/components/Nav.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

</script>

<template>
  <div class="overflow-x-hidden">
    <Nav />
    <RouterView />
    <Footer />
    <Transition name="fade">
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
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
