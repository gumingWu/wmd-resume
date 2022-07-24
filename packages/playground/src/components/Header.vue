<script setup lang="ts">
import { icons } from '../utils/socialIcons'
import { computed } from 'vue';
import type { ILinks } from './SocialLinks.vue';

const homeLogo = computed(() => {
  return icons.home
})

const links: ILinks[] = [
  {
    icon: 'github',
    url: 'https://github.com/gumingWu/wmd-resume'
  }
]
</script>

<template>
  <div class="header">
    <div class="header-logo">
      <a class="logo" href="/" v-html="homeLogo"></a>
      <div class="title">wmd简历系统</div>
    </div>

    <SocialLinks :links="links"></SocialLinks>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%);
}
.header-logo {
  display: flex;
  align-items: center;
}
.logo {
  width: 50px;
  height: 50px;
}
.title {
  font-size: 20px;
}
</style>
