<template>
  <div
    class="fixed z-10 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-red-500 lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block"
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
        SideBar
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$site)
  },
}
</script>
