<script setup lang="ts"></script>

<template>
  <div class="dragger">
    <div class="line"></div>
    <div class="flod"></div>
  </div>
</template>

<style scoped>
.dragger {
  margin: 0 10px;
  height: 100%;
  display: flex;
  align-items: center;
}
.line {
  background-color: rgb(0 0 0 / 20%);
  width: 2px;
  height: 100%;
}
.flod {
  width: 10px;
  height: 30px;
  background-color: rgb(231, 231, 231);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
 