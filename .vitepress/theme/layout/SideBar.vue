<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div
    class="fixed inset-0 hidden h-full w-full flex-none px-8 pb-10 lg:static lg:block lg:w-60 lg:overflow-y-visible lg:pt-0 xl:w-72"
  >
    <nav class="lg:text-sm lg:leading-6">
      <!-- TODO: search box -->
      <ul>
        <li
          class="mt-12 lg:mt-8"
          v-for="(titles, section) in theme.collections"
        >
          <h5
            class="mb-8 font-semibold text-slate-900 dark:text-slate-200 lg:mb-3"
          >
            {{ section }}
          </h5>
          <ul
            class="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2"
          >
            <li v-for="title in titles">
              <a
                class="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                >{{ title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
