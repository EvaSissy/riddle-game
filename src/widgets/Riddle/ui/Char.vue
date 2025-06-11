<script setup lang="ts">
defineProps<{ char: string }>()
</script>

<template>
  <span class="riddle-char" :class="{ 'riddle-char-border': char !== ' '}">
    {{char}}
  </span>
</template>

<style scoped>
.riddle-char-border {
  border-radius: 8px;
  border: 0.125rem solid wheat;
}

.riddle-char {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.125rem;
}
</style>