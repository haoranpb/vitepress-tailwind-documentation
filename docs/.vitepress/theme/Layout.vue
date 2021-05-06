<template>
  <Header />
  <div class="w-full mx-auto max-w-7xl lg:flex">
    <SideBar />
    <Content />
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'

export default {
  components: { Header, SideBar },
}
</script>
