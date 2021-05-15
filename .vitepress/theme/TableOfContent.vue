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
              :href="'#' + section.slug"
              class="block transform transition-colors duration-200 py-2 hover:text-gray-900"
              :class="{ 'text-gray-900': activeHash === '#' + section.slug }"
            >
              {{ section.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeHash: null,
      anchors: null,
    }
  },
  mounted() {
    this.initActiveHash()
  },
  methods: {
    initActiveHash() {
      this.activeHash = '#' + this.$page.headers[0].slug

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
    handleScroll() {
      const y = window.pageYOffset
      const windowHeight = window.innerHeight

      if (y < 0) {
        this.activeHash = '#' + this.$page.headers[0].slug
      } else if (y + windowHeight >= document.body.scrollHeight) {
        this.activeHash =
          '#' + this.$page.headers[this.$page.headers.length - 1].slug
      } else {
        const middle = y + windowHeight / 2
        for (let i = 0; i < this.anchors.length; i++) {
          if (middle >= this.anchors[i].offsetTop) {
            this.activeHash = this.anchors[i].hash
          }
        }
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
