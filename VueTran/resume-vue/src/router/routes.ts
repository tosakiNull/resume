// https://router.vuejs.org/guide/advanced/scroll-behavior.html
const routes = [
  {
    name: 'Home',
    el: '#mainBoard',
    top: -10,
    behavior: 'smooth',
  },
  {
    name: 'Projects',
    el: '#projects',
    top: -10,
    behavior: 'smooth',
  },
]

export default routes;
