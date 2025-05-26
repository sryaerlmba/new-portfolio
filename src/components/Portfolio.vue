<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ButtonHover from './ButtonHover.vue'
import CardPorto from './CardPorto.vue'

const cardPorto = ref([])
onMounted(async () => {
  const res = await fetch('data/cardPorto.json')
  const data = await res.json()
  cardPorto.value = data
})
</script>

<template>
  <section class="bg-gray-100 py-10 overflow-visible">
    <div class="xl:px-18">
      <div class="container mx-auto">
        <h1 class="text-center text-2xl font-bold text-sky-800 uppercase" data-aos="fade-down">
          Explore My Portfolio
        </h1>
        <hr class="my-5 text-sky-800 max-w-[90vw] mx-auto" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 sm:p-0 my-10">
          <CardPorto
            v-for="(item, index) in cardPorto"
            v-bind="item"
            :text="item.textButton"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
            :key="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>
