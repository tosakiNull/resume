<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { useDomainConfStore } from 'Stores/useDomainConf';
import SideBarItem from './SideBarItem.vue';

type SideBarListChildren = {
    id: number;
    name: string;
    toTag: string;
    svgPath: string;
};

type SideBarList = {
    id: number;
    name: string;
    toTag: string;
    svgPath: string;
    children?: SideBarListChildren[];
};

const domainConfStore = useDomainConfStore();
const { isSideBarOpen } = toRefs(domainConfStore);

const projectsList: SideBarListChildren[] = [
    { id: 2, name: 'Vue', toTag: '#project_vue', svgPath: '' },
    { id: 3, name: 'React', toTag: '#project_react', svgPath: '' },
    { id: 4, name: 'CocosCreator', toTag: '#project_cocos', svgPath: '' },
    { id: 5, name: 'nodejs', toTag: '#project_nodejs', svgPath: '' },
    { id: 6, name: 'python', toTag: '#project_python', svgPath: '' },
];

const list:SideBarList[] = [
    {
        id: 0,
        name: 'Home',
        toTag: '#home',
        svgPath: 'M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    },
    {
        id: 1,
        name: 'Project',
        toTag: '#projects',
        svgPath: 'M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
        children: projectsList,
    },
];


function switchMenu() {
    domainConfStore.switchSideBar();
}

const asideClass = computed(() => {
    const transformClass = isSideBarOpen.value ? 'transition-transform' : '-translate-x-full';

    return [transformClass];
});

</script>
<template>
    <aside
        id="sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen"
        :class="asideClass"
    >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <button
                type="button"
                @click="switchMenu"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close menu</span>
            </button>

            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li v-for="item in list" :key="item.id">
                        <a :href="item.toTag" class="sidebar-link" v-if="!item.children">
                            <svg v-if="item.svgPath" aria-hidden="true" class="svg-path" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path :d="item.svgPath"></path>
                            </svg>
                            <span class="ml-3">{{ item.name }}</span>
                        </a>

                        <SideBarItem :data="item" v-if="item.children" />
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>
<style scoped>
.sidebar-link {
    @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;
}
.sidebar-link-children {
    /* @extend sidebar-link
    @apply ; */
}
.svg-path {
    @apply flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white;
}
</style>
