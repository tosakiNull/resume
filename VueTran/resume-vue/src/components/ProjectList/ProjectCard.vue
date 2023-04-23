<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
import type { CardData } from './type';

interface ProjectCard {
    data: CardData;
}

const props = defineProps<ProjectCard>();
const { data } = toRefs(props);

</script>
<template>
  <div class="card">
    <h1>{{ data.name }}</h1>
  </div>
</template>
<style scoped>
.card {
  border: solid 1px #000;
  width: 50%;
  height: 20%;
  display: inline-block;
}
</style>
