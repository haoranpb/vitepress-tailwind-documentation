<template>
  <div
    class="text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-4 sm:px-6 md:px-8 min-h-screen"
  >
    <Home v-if="isIndex" />
    <PageLayout v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from '../views/Home.vue'
import PageLayout from '../views/PageLayout.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>
