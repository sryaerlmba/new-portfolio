<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

// State
const isOpen = ref(false)
const navref = ref(null)
const dropdownOpen = ref(false)
const active = 'text-sky-800'

// Methods
const handleDropodown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleClickOutside = (event) => {
  if (navref.value && !navref.value.contains(event.target)) {
    isOpen.value = false
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  dropdownOpen.value = false
}

// Change language
function changeLanguage(lang) {
  locale.value = lang
}

// Add event listener when component is mounted
onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="bg-white shadow-xl fixed left-0 right-0 top-0 z-50 px-5 sm:px-0" ref="navref">
    <div class="mx-auto container px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center">
          <RouterLink :to="{ name: 'home' }" class="text-sky-800 font-bold text-2xl"
            >Surya.</RouterLink
          >
        </div>

        <div class="hidden sm:block">
          <div class="flex space-x-1">
            <RouterLink
              :exact-active-class="active"
              :to="{ name: 'home' }"
              class="rounded-md px-3 py-2 text-lg font-medium hover:text-sky-800"
              >{{ t('nav.home') }}</RouterLink
            >
            <RouterLink
              :exact-active-class="active"
              :to="{ name: 'experience' }"
              class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800"
              >{{ t('nav.experience') }}</RouterLink
            >
            <RouterLink
              :exact-active-class="active"
              :to="{ name: 'education' }"
              class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800"
              >{{ t('nav.education') }}</RouterLink
            >
            <RouterLink
              :exact-active-class="active"
              :to="{ name: 'projects' }"
              class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800"
              >{{ t('nav.projects') }}</RouterLink
            >
            <RouterLink
              :exact-active-class="active"
              :to="{ name: 'contact' }"
              class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800"
              >{{ t('nav.contact') }}</RouterLink
            >
            <div class="relative inline-block text-left">
              <button
                @click="handleDropodown"
                class="rounded-md px-3 py-2 text-lg font-medium text-gray-800 hover:text-sky-800 hover:cursor-pointer"
              >
                {{ t('nav.language') }}
                <i class="ri-arrow-down-s-fill transform rotate-180"></i>
              </button>

              <Transition name="fade">
                <div
                  v-if="dropdownOpen"
                  class="absolute mt-2.5 bg-white rounded-b-md w-40 shadow px-4 py-2 z-50"
                >
                  <button
                    to="#"
                    class="px-2 py-1 text-gray-700 hover:text-sky-800 hover:bg-gray-100 rounded flex w-full hover:cursor-pointer items-center gap-2"
                    @click.prevent="changeLanguage('id')"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
                      alt="Indonesia Flag"
                      class="w-5 h-5"
                    />
                    Indonesia
                  </button>
                  <button
                    to="#"
                    class="px-2 py-1 text-gray-700 hover:text-sky-800 hover:bg-gray-100 rounded flex w-full hover:cursor-pointer items-center gap-2"
                    @click.prevent="changeLanguage('en')"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                      alt="USA Flag"
                      class="w-5 h-5"
                    />
                    English
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 hover:cursor-pointer"
            aria-controls="mobile-menu"
            @click.stop="toggleMenu"
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
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

    <Transition name="fade">
      <div v-if="isOpen" class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <RouterLink
            :exact-active-class="active"
            :to="{ name: 'home' }"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800"
            >{{ t('nav.home') }}</RouterLink
          >
          <RouterLink
            :exact-active-class="active"
            :to="{ name: 'experience' }"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800"
            >{{ t('nav.experience') }}</RouterLink
          >
          <RouterLink
            :exact-active-class="active"
            :to="{ name: 'education' }"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800"
            >{{ t('nav.education') }}</RouterLink
          >
          <RouterLink
            :exact-active-class="active"
            :to="{ name: 'projects' }"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800"
            >{{ t('nav.projects') }}</RouterLink
          >
          <RouterLink
            :exact-active-class="active"
            :to="{ name: 'contact' }"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800"
            >{{ t('nav.contact') }}</RouterLink
          >

          <div
            @click="handleDropodown"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-sky-800 hover:cursor-pointer"
          >
          {{ t('nav.language') }} <i class="ri-arrow-down-s-fill"></i>
          </div>

          <Transition name="fade">
            <div
              v-if="dropdownOpen"
              class="mt-2 flex flex-col items-start rounded-md px-3 py-2 text-base font-medium text-gray-800 gap-2 ms-3 border border-gray-400"
            >
              <button
                @click="changeLanguage('id')"
                class="hover:bg-gray-100 hover:text-sky-800 py-1 px-2 w-full flex items-center gap-2 hover:cursor-pointer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
                  alt="Indonesia Flag"
                  class="w-5 h-5"
                />
                Indonesia
              </button>

              <button
                @click="changeLanguage('en')"
                class="hover:bg-gray-100 hover:text-sky-800 py-1 px-2 w-full flex items-center gap-2 hover:cursor-pointer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="USA Flag"
                  class="w-5 h-5"
                />
                English
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.link-exact-active {
  color: #0070f3;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
