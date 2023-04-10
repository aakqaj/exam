<script setup lang="ts"></script>

<template>
  <Suspense>
    <RouterView></RouterView>
  </Suspense>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss">
@import url("@/assets/reset.css");
</style>
