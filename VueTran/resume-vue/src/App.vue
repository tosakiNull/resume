<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from 'Components/HeaderBar.vue';
import SideBar from 'Components/Sidebar/SideBar.vue';
</script>

<template>
  <header>
    <HeaderBar />
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <SideBar />
  <div id="router-view">
    <RouterView />
  </div>
</template>

<style scoped>
#router-view {
  background-color: #000;
  width: 80%;
  height: 92%;
  display: inline-block;
}
header {
  height: 8%;
}
</style>
