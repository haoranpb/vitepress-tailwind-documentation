<template>
  <div
    class="fixed z-10 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch lg:block lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"
    >
      <div
        class="hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-0 bg-gradient-to-b from-white"
      />
      <nav
        class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14"
      >
        <ul
          v-for="(collection, category) in $site.customData.collections"
          :key="category"
        >
          <li class="mb-8">
            <h5
              class="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs"
            >
              {{ category }}
            </h5>
            <ul v-for="page in collection" :key="page">
              <li
                class="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
              >
                {{ page }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$site.customData)
  },
}
</script>
