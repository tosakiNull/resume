<script setup lang="ts">
import HeaderBar from 'Components/HeaderBar.vue';
import MainBoard from 'Components/MainBoard.vue';
import ProjectCard from 'Components/ProjectCard.vue';
import SideBar from 'Components/SideBar.vue';
</script>

<template>
  <HeaderBar />
  <SideBar />
  <main>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <MainBoard />
    <ProjectCard />
  </main>
</template>
