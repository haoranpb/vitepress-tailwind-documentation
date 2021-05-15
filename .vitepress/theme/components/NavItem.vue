<template>
  <a
    :href="$site.customData.pages[pageName].href"
    class="px-3 py-2 transition-colors duration-200 relative block rounded-md"
    :class="[
      isActive
        ? 'text-cyan-700 bg-cyan-50'
        : 'hover:text-gray-900 text-gray-500',
    ]"
  >
    <span>{{ $site.customData.pages[pageName].title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return (
        this.$page.relativePath.split('/').pop().split('.')[0] == this.pageName
      )
    },
  },
}
</script>
