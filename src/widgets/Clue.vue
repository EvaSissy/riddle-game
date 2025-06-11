<script setup lang="ts">
import { getRiddleContext } from '../entities/riddle/context.ts'

const { clue } = getRiddleContext()
</script>

<template>
<h2>{{ clue }}</h2>
</template>
