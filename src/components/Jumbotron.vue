<script setup>
import Button from './Button.vue'
import ButtonHover from './ButtonHover.vue'

defineProps({
  name: {
    type: String,
    required: true,
    default: 'Surya Erlamba',
  },
  role: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="lg:container mx-auto my-48">
    <div class="p-10">
      <div
        class="grid md:grid-cols-2 justify-center items-center"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div class="">
          <h1 class="font-bold text-6xl text-sky-800">
            <span class="text-black">Hi, I'm</span> {{ name }}
          </h1>
          <p class="text-2xl mt-5 font-semibold text-gray-700">{{ role }}</p>
          <p class="mt-5 font-medium text-lg">{{ desc }}</p>
          <div class="mt-5 space-x-5">
            <div class="flex space-x-3">
              <Button text="Contact Me" icon="ri-mail-line" :link="email"></Button>
              <ButtonHover text="Github Profile" icon="ri-github-line" :link="github" ></ButtonHover>
            </div>
          </div>
        </div>
        <Transition>
          <div class="hidden md:block" >
            <div class="flex justify-center items-center">
              <div class="overflow-hidden border-4 w-88 h-88 rounded-full text-sky-800 bg-sky-100">
                <img src="/img/surya.png" alt="" class="h-full mx-auto mt-5" />
              </div>
            </div>
          </div>
        </Transition>
        </div>
    </div>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>
