<template>
  <Header />
  <div class="w-full mx-auto max-w-7xl lg:flex">
    <SideBar />
    <div
      class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible overflow-hidden max-h-screen fixed"
    >
      <div class="w-full flex">
        <div
          class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16"
        >
          <Content class="prose" />
        </div>
        <TableOfContent />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'
import TableOfContent from './TableOfContent.vue'

export default {
  components: { Header, SideBar, TableOfContent },
}
</script>

<style>
a.header-anchor {
  @apply float-left opacity-0 no-underline text-gray-400;
  margin-top: 0.125em;
  margin-left: -0.87em;
  padding-right: 0.23em;
  font-size: 0.85em;
}

h1:hover .header-anchor,
h1:focus .header-anchor,
h2:hover .header-anchor,
h2:focus .header-anchor,
h3:hover .header-anchor,
h3:focus .header-anchor,
h4:hover .header-anchor,
h4:focus .header-anchor,
h5:hover .header-anchor,
h5:focus .header-anchor,
h6:hover .header-anchor,
h6:focus .header-anchor {
  opacity: 1;
}
</style>
