<template>
  <div class="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
    <div class="pb-10 border-b border-gray-200 mb-10">
      <h1
        class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight"
      >
        {{ $page.title }}
      </h1>
      <p class="mt-1 text-lg text-gray-500">{{ $page.description }}</p>
    </div>
    <Content class="prose" />
  </div>
</template>

