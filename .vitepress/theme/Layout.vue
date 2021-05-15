<template>
  <Header />
  <div class="w-full mx-auto max-w-7xl lg:flex">
    <SideBar />
    <div
      class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible overflow-hidden max-h-screen fixed"
    >
      <div class="w-full flex">
        <ContentWrapper @contentUpdated="handleContentUpdate" />
        <TableOfContent v-if="$page.headers" :anchors="anchors" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'
import TableOfContent from './TableOfContent.vue'
import ContentWrapper from './ContentWrapper.vue'

export default {
  data() {
    return {
      anchors: null,
    }
  },
  components: { Header, SideBar, TableOfContent, ContentWrapper },
  mounted() {
    this.getAnchors()
  },
  methods: {
    handleContentUpdate() {
      this.getAnchors()
    },
    getAnchors() {
      this.anchors = Array.prototype.slice
        .call(document.querySelectorAll('.header-anchor'))
        .map((item) => {
          return { hash: item.hash, offsetTop: item.offsetTop }
        })
        .filter((item) => {
          // Only need the ones exist in TOC
          return this.$page.headers.some(
            (header) => '#' + header.slug === item.hash
          )
        })
    },
  },
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
