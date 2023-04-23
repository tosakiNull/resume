<script setup lang="ts">
import { useDomainConfStore } from 'Stores/useDomainConf';
const domainConfStore = useDomainConfStore();

function switchMenu() {
    domainConfStore.switchSideBar();
}
</script>
<template>
<nav id="header-bar">
    Home
    <button
        type="button"
        @click="switchMenu"
    >
        click
    </button>
</nav>
</template>
<style scoped>
#header-bar {
    width: 100%;
    height: 20%;
}
</style>
