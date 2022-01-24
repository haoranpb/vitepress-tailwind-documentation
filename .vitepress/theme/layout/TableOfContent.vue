<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<template>
  <div class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
    <h5
      class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"
    >
      On this page
    </h5>
    <ul class="text-slate-700 text-sm leading-6">
      <li
        v-for="section in page.headers"
        :class="{ 'ml-4': section.level == 3 }"
      >
        <a
          class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <svg
            v-if="section.level == 3"
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
          {{ section.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
