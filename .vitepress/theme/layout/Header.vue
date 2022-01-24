<template>
  <div
    class="pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
  >
    <Logo class="text-slate-900 dark:text-white w-auto h-5" />
    <div class="flex items-center">
      <nav>
        <ul class="flex items-center space-x-8">
          <!-- TODO: switch to links -->
          <li>Docs</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div
        class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
      >
        <!-- TODO: dark theme button -->
        <OutLink href="github.com">
          <IconGitHub />
        </OutLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import OutLink from '../components/OutLink.vue'
import IconGitHub from '../icons/IconGitHub.vue'
</script>
