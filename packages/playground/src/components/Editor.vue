<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted } from 'vue';
import { basicTemplate } from '../utils/templates';

defineProps({
  modelValue: String
})

const emits = defineEmits(['update:modelValue'])

onMounted(() => {
  emits('update:modelValue', basicTemplate)
  const editor = monaco.editor.create(document.getElementById('container')!, {
    value: basicTemplate,
	  language: 'markdown',
    automaticLayout: true // <<== the important part
  })
  monaco.editor.setTheme('vs-dark')

  editor.onDidChangeModelContent(()=> {
    emits('update:modelValue', editor.getValue())
  })
})
</script>

<template>
  <div id="container" style="width: 50%; height: 100%; border: 1px solid #ccc"></div>
</template>
