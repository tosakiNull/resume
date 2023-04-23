import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDomainConfStore = defineStore('useDomainConf', () => {
  const isSideBarOpen = ref(false)

  function switchSideBar() {
    isSideBarOpen.value = !isSideBarOpen.value;
  }

  return {
    isSideBarOpen,
    switchSideBar,
  }
})
