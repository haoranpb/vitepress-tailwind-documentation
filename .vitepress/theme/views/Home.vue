<template>
  <header class="px-4 sm:px-6 md:px-8 h-screen">
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
    <div class="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1
        class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
      >
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p
        class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"
      >
        A utility-first CSS framework packed with classes like
        <HText>flex</HText>, <HText>pt-4</HText>, <HText>text-center</HText> and
        <HText>rotate-90</HText>
        that can be composed to build any design, directly in your markup.
      </p>
      <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <!-- <route-link to="/docs/"></route-link> -->
        <a
          href="/docs/"
          class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        >
          Get started
        </a>
        <!-- TODO: search box -->
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import IconGitHub from '../icons/IconGitHub.vue'
import OutLink from '../components/OutLink.vue'
import HText from '../components/HighlightText.vue'
</script>
