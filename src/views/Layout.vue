<script setup>
import Nav from '@/components/Nav.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import Loading from '@/components/Loading.vue'
import { useLoadingStore } from '@/stores/loading'
import { nextTick } from 'vue'
import ToTop from '@/components/ToTop.vue'

const loadingStore = useLoadingStore()

const showButton = ref(false)
// kasih event listener saat komponen dimount
onMounted(async () => {
  // MULAI loading
  loadingStore.startLoading()

  // Tunggu render semua komponen
  await nextTick()

  // Hentikan loading setelah 500ms
  setTimeout(() => {
    loadingStore.stopLoading()
    loadingStore.showContent = true
  }, 1000)
})
</script>

<template>
  <Loading />
  <ToTop />
  <div class="overflow-x-hidden" v-if="loadingStore.showContent">
    <Nav />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
