<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { connectClasses } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div :class="connectClasses('text-sm [&_p]:leading-relaxed', props.class)">
    <slot />
  </div>
</template>
