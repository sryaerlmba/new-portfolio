<script setup>
import Nav from '@/components/Nav.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import Loading from '@/components/Loading.vue'
import { useLoadingStore } from '@/stores/loading'
import { nextTick } from 'vue'

const loadingStore = useLoadingStore()

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

// kasih event listener saat komponen dimount
onMounted(async () => {
  window.addEventListener('scroll', checkScroll)

  // MULAI loading
  loadingStore.startLoading()

  // Tunggu render semua komponen
  await nextTick()

  // Hentikan loading setelah 500ms
  setTimeout(() => {
    loadingStore.stopLoading()
  }, 1000)
})

// buang event listener saat kkomponen di unmount
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Loading />
  <div class="overflow-x-hidden">
    <Nav />
    <RouterView />
    <Footer />
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
  </div>
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
