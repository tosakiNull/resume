<script setup lang="ts">
import MainBoard from 'Components/MainBoard.vue';
import ProjectList from 'Components/ProjectList/ProjectList.vue';
</script>

<template>
  <main id="main">
    <MainBoard />
    <ProjectList />
  </main>
</template>

<style scoped>
#main {
  background-color: aqua;
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
