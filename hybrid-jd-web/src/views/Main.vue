<template>
  <div class="main">
    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
    <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>

<script>
import toolBar from '@c/ToolBar.vue';

export default {
  data() {
    return {
      currentComponent: 'home'
    }
  },
  components: {
    'tool-bar': toolBar,
    //异步组件引入方式
    'home': () => import('@c/Home'),
    'shopping': () => import('@c/Shopping'),
    'my': () => import('@c/My')
  },
  methods: {
    onChangeFragment(componentName) {
      this.currentComponent = componentName;
    }
  },
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>