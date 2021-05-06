<template>
  <div
    class="sticky h-16 z-10 w-full max-w-7xl mx-auto bg-white flex-none flex border-b border-gray-200 lg:border-b-0"
  >
    <div
      class="items-center flex flex-none pl-4 sm:pl-6 xl:pl-8 lg:w-60 xl:w-72"
    >
      <a href="/" class="overflow-hidden w-10 md:w-auto text-2xl font-medium">
        <span class="sr-only">Tailwind documentation clone</span>
        <Logo class="w-auto h-6" />
      </a>
    </div>

    <div
      class="flex-auto flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"
    >
      <SearchBox />

      <div
        class="lg:w-64 pl-8 flex-shrink-0 flex items-center justify-end space-x-6"
      >
        <OutLink
          href="https://github.com/haoranpb"
          class="text-gray-400 hover:text-gray-500 transition-colors duration-200"
        >
          <span className="sr-only">Haoranpb on GitHub</span>
          <IconGitHub />
        </OutLink>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue'
import OutLink from './OutLink.vue'
import IconGitHub from './icons/IconGitHub.vue'
import Logo from './Logo.vue'

export default {
  components: { SearchBox, OutLink, IconGitHub, Logo },
}
</script>
