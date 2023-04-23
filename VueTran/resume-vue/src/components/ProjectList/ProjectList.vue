<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

const ProjectType = {
  Vue: 1,
  React: 2,
  CocosCreator: 3,
}

const dataList = [
  { id: 1, name: 'vue1', alias: '', type: ProjectType.Vue, description: '', img: ''},
  { id: 2, name: 'vue2', alias: '', type: ProjectType.Vue, description: '', img: ''},
  { id: 3, name: 'cocos1', alias: '', type: ProjectType.CocosCreator, description: '', img: ''},
  { id: 4, name: 'cocos2', alias: '', type: ProjectType.CocosCreator, description: '', img: ''},
];

</script>
<template>
    <div class="project-list">
      <ProjectCard v-for="item in dataList" :data="item" :key="item.id" />
    </div>
</template>
<style scoped>
.project-list {
  width: 100%;
  height: 100%;
}
</style>
