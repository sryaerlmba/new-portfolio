<script setup lang="ts">
import Button from '@/components/Button.vue'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

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

// validate form
const validate = () => {
  errors.name = !form.name ? 'Name is required' : null
  errors.email = !form.email
    ? 'Email is required'
    : !/^\S+@\S+\.\S+$/.test(form.email)
      ? 'Invalid email format'
      : null
  errors.subject = !form.subject ? 'Subject is required' : null
  errors.message =
    !form.message || form.message.length < 10 ? 'Message must be at least 10 characters' : null

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

// handle submit form data
const handleSubmit = async () => {
  if (!validate()) {
    return
  }

  try {
    const response = await fetch('https://formspree.io/f/xgvywrod', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await response.json()
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent.',
      icon: 'success',
      confirmButtonText: 'OK',
    })
    form.name = form.email = form.subject = form.message = ''
  } catch (err) {
    Swal.fire({
      title: 'Error!',
      text: 'An error occurred while sending your message.',
      icon: 'error',
      confirmButtonText: 'OK',
    })
  }
}
</script>

<template>
  <div class="md:px-18">
    <div class="my-30 mx-auto container px-5">
      <h1 class="font-bold text-4xl text-sky-800" data-aos="fade-right">Get In Touch</h1>
      <p class="font-semibold mt-5 text-gray-600">
        Have a project in mind or want to discuss potential opportunities? I'd love to hear from
        you! Feel free to reach out using the contact form or through my contact information below.
      </p>

      <!-- contact form -->
      <div class="flex gap-10">
        <div class="border rounded-md border-gray-400 mt-5 w-3/5">
          <!-- contact form -->
          <form @submit.prevent="handleSubmit" class="p-5">
            <div class="flex flex-col md:flex-row gap-5 w-full">
              <div class="w-full">
                <label>Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your Name"
                  class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
              </div>

              <div class="w-full">
                <label>Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Your Email"
                  class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <div class="mt-4">
              <label>Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
              />
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <div class="mt-4">
              <label>Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Your Message"
                class="border border-gray-400 py-1 px-2 mt-2 w-full rounded focus:border-sky-800 focus:outline-none"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- profile -->

        <div class="w-2/5 border p-5 mt-5 border-gray-400 rounded-lg shadow-sm">
          <h1 class="font-semibold text-2xl mb-4">Contact Information</h1>

          <div class="flex items-center gap-2 mb-3">
            <i class="ri-mail-line text-gray-600"></i>
            <p>youremail@example.com</p>
          </div>

          <div class="flex items-center gap-2 mb-3">
            <i class="ri-phone-line text-gray-600"></i>
            <p>+62 812-3456-7890</p>
          </div>

          <div class="flex items-center gap-2 mb-6">
            <i class="ri-map-pin-line text-gray-600"></i>
            <p>Jakarta, Indonesia</p>
          </div>

          <div>
            <h2 class="font-semibold text-lg mb-2">Connect with me</h2>
            <div class="flex gap-4 ">
              <a href="https://facebook.com" target="_blank" class="text-blue-600 text-xl">
                <i class="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="text-sky-500 text-xl">
                <i class="ri-twitter-x-line"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="text-pink-500 text-xl">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-blue-700 text-xl">
                <i class="ri-linkedin-box-line"></i>
              </a>
              <a href="https://github.com" target="_blank" class="text-black text-xl">
                <i class="ri-github-line"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
