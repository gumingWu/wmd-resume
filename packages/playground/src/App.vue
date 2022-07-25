<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>

<template>
  <Header></Header>
  <div class="body">
    <Editor v-model="input"></Editor>
    <Resume :source="input"></Resume>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  margin: 30px;
}
</style>