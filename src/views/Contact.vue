<script setup lang="ts">
import Button from '@/components/Button.vue'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: null,
  email: null,
  subject: null,
  message: null,
})

const validate = () => {
  errors.name = !form.name ? t('contact.form.errors.name') : null
  errors.email = !form.email
    ? t('contact.form.errors.email_required')
    : !/^\S+@\S+\.\S+$/.test(form.email)
      ? t('contact.form.errors.email_invalid')
      : null
  errors.subject = !form.subject ? t('contact.form.errors.subject') : null
  errors.message =
    !form.message || form.message.length < 10 ? t('contact.form.errors.message') : null

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

const handleSubmit = async () => {
  if (!validate()) return

  try {
    const response = await fetch('https://formspree.io/f/xgvywrod', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await response.json()
    Swal.fire({
      title: t('contact.alerts.success_title'),
      text: t('contact.alerts.success_text'),
      icon: 'success',
      confirmButtonText: 'OK',
    })
    form.name = form.email = form.subject = form.message = ''
  } catch (err) {
    Swal.fire({
      title: t('contact.alerts.error_title'),
      text: t('contact.alerts.error_text'),
      icon: 'error',
      confirmButtonText: 'OK',
    })
  }
}
</script>

<template>
  <div class="md:px-18">
    <div class="my-30 mx-auto container px-5">
      <h1 class="font-bold text-4xl text-sky-800" data-aos="fade-right">
        {{ t('contact.title') }}
      </h1>
      <p class="font-semibold mt-5 text-gray-600" data-aos="fade">
        {{ t('contact.subtitle') }}
      </p>

      <div class="flex flex-col md:flex-row gap-5 md:gap-10" data-aos="fade-up">
        <div class="border rounded-md border-gray-400 mt-5 md:w-3/5 w-full">
          <form @submit.prevent="handleSubmit" class="p-5">
            <div class="flex flex-col md:flex-row gap-5 w-full">
              <div class="w-full">
                <label>{{ t('contact.form.name') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  :placeholder="t('contact.form.placeholder.name')"
                  class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <div class="w-full">
                <label>{{ t('contact.form.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  :placeholder="t('contact.form.placeholder.email')"
                  class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <div class="mt-4">
              <label>{{ t('contact.form.subject') }}</label>
              <input
                v-model="form.subject"
                type="text"
                :placeholder="t('contact.form.placeholder.subject')"
                class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <div class="mt-4">
              <label>{{ t('contact.form.message') }}</label>
              <textarea
                v-model="form.message"
                rows="5"
                :placeholder="t('contact.form.placeholder.message')"
                class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded hover:cursor-pointer"
            >
              {{ t('contact.form.button') }}
            </button>
          </form>
        </div>

        <!-- profile -->
        <div class="md:w-2/5 w-full border p-5 md:mt-5 border-gray-400 rounded-lg shadow-sm">
          <h1 class="font-semibold text-2xl mb-4">{{ t('contact.info.title') }}</h1>

          <div class="flex items-center gap-2 mb-3">
            <i class="ri-mail-line text-gray-600"></i>
            <a href="mailto:suryaerlamba3@gmail.com">suryaerlamba3@gmail.com</a>
          </div>

          <div class="flex items-center gap-2 mb-3">
            <i class="ri-phone-line text-gray-600"></i>
            <a href="https://wa.me/+6289614028027" target="_blank">+6289614028027</a>
          </div>

          <div class="flex items-center gap-2 mb-6">
            <i class="ri-map-pin-line text-gray-600"></i>
            <p>{{ t('contact.info.location') }}</p>
          </div>

          <div>
            <h2 class="font-semibold text-lg mb-2">{{ t('contact.info.connect') }}</h2>
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/suryaerlamba/"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl hover:bg-blue-800 transition-colors"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/sryaerlmba"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl hover:bg-gray-800 transition-colors"
              >
                <i class="ri-github-line"></i>
              </a>
              <a
                href="https://instagram.com/sryaerlmba"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white text-xl hover:bg-pink-600 transition-colors"
              >
                <i class="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
