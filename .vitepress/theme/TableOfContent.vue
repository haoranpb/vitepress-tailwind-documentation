<template>
  <div class="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8">
    <div
      className="flex flex-col justify-between overflow-y-auto sticky pt-10 pb-6 top-16"
    >
      <div className="mb-8">
        <h5
          class="text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"
        >
          On this page
        </h5>
        <ul class="overflow-x-hidden text-gray-500 font-medium">
          <li
            v-for="section in $page.headers"
            :key="section.slug"
            :class="{ 'ml-4': section.level == 3 }"
          >
            <a
              :href="section.slug"
              class="block transform transition-colors duration-200 py-2 hover:text-gray-900"
            >
              {{ section.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
