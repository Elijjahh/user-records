<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { connectClasses } from '@/lib/utils';
import { type AlertVariants, alertVariants } from '.';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  variant?: AlertVariants['variant'];
}>();
</script>

<template>
  <div :class="connectClasses(alertVariants({ variant }), props.class)" role="alert">
    <slot />
  </div>
</template>
