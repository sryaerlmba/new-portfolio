<script setup>
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Portfolio from "@/components/Portfolio.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import { onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// profile data
const profile = ref([]);

// fetch profile data
const fetchProfile = async () => {
  const response = await fetch("data/profile.json");
  const data = await response.json();

  const langKey = `profile_${locale.value}`;
  profile.value = data[langKey];
};

// watch
watch(locale, () => {
  fetchProfile();
});

// on mounted
onMounted(() => {
  fetchProfile();
})

</script>

<template>
  <Jumbotron v-bind="profile" v-if="profile.name" />
  <Portfolio />
  <div class="md:px-18">
    <Experience />
    <Education />
    <Projects />
  </div>
  <Skills />
</template>

<style scoped></style>
