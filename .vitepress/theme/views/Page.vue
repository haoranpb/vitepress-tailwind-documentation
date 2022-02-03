<script setup>
import Header from '../layout/Header.vue'
import SideBar from '../layout/SideBar.vue'
import TableOfContent from '../layout/TableOfContent.vue'
</script>

<template>
  <div class="mx-auto max-w-8xl">
    <div
      class="sticky top-0 w-full backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:border-b"
    >
      <Header class="py-4" />
    </div>

    <div class="w-full lg:flex">
      <SideBar />
      <div class="flex min-w-0 pt-10 lg:static lg:max-h-full">
        <div class="min-w-0 flex-auto px-6">
          <header>
            <h1
              class="inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl"
            >
              {{ $frontmatter.title }}
            </h1>
            <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">
              {{ $frontmatter.description }}
            </p>
          </header>
          <Content class="prose prose-slate mt-8 dark:prose-dark" />
          <footer></footer>
        </div>

        <TableOfContent />
      </div>
    </div>
  </div>
</template>
