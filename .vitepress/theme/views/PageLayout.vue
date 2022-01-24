<script setup>
import Header from '../layout/Header.vue'
import SideBar from '../layout/SideBar.vue'
import TableOfContent from '../layout/TableOfContent.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <Header />

    <div class="lg:flex w-full">
      <SideBar />
      <div class="min-w-0 flex lg:static lg:max-h-full pt-10">
        <div class="min-w-0 flex-auto">
          <header>
            <h1
              class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
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
