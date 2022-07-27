<script setup lang="ts">
import { ref } from 'vue';

const input = ref('')
</script>

<template>
  <Header></Header>
  <div class="body">
    <Editor v-model="input"></Editor>
    <Dragger></Dragger>
    <div class="preview">
      <Page>
        <Resume :source="input"></Resume>
      </Page>
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 100%;
  display: flex;
  margin: 30px;
}

.preview {
  background-color: aliceblue;
  width: 100%;
  min-height: 1500px;
}
</style>