<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted } from 'vue';

defineProps({
  value: String
})

onMounted(() => {
  monaco.editor.create(document.getElementById('container')!, {
    value: [''].join('\n'),
	  language: 'markdown'
  })
  monaco.editor.setTheme('vs-dark')
})
</script>

<template>
  <div id="container" style="width: 600px; height: 600px; border: 1px solid #ccc"></div>
</template>
