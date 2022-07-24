<script setup lang="ts">
import { PropType } from 'vue';
import { icons } from '../utils/socialIcons';

export interface ILinks {
  icon: string
  url: string
}

defineProps({
  links: Array as PropType<ILinks[]>
})

const getSvg = (iconName: string) => {
  return icons[iconName]
}
</script>

<template>
  <div class="social-links">
    <template v-for="link in links" :key="link.icon">
      <a
        class="VPSocialLink"
        :href="link.url"
        target="_blank"
        rel="noopener"
        v-html="getSvg(link.icon)"
      ></a>
    </template>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
}

.VPSocialLink {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: rgba(60, 60, 60, 0.7);
  transition: color 0.5s;
}

.VPSocialLink:hover {
  color: #213547;
  transition: color 0.25s;
}

.VPSocialLink > :deep(svg) {
  width: 25px;
  height: 25px;
  fill: currentColor;
}
</style>