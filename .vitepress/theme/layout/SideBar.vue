<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div
    class="fixed inset-0 flex-none h-full w-full lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block lg:static hidden pb-10 px-8"
  >
    <nav class="lg:text-sm lg:leading-6">
      <!-- TODO: search box -->
      <ul>
        <li
          class="mt-12 lg:mt-8"
          v-for="(titles, section) in theme.collections"
        >
          <h5
            class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200"
          >
            {{ section }}
          </h5>
          <ul
            class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800"
          >
            <li v-for="title in titles">
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                >{{ title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
