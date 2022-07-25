<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { watchEffect, PropType, ref } from 'vue';

const props = defineProps({
  source: String as PropType<string>
})

const md = new MarkdownIt({
  html: true
})
let sourceToMd: any = ref('')
watchEffect(() => {
  sourceToMd.value = md.render(props.source!)
})

</script>

<template>
  <div v-html="sourceToMd"></div>
</template>
