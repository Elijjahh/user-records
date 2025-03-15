<script setup lang="ts">
import { HelpCircle } from 'lucide-vue-next';
import { UIAlert, UIAlertDescription } from '@/components/ui/alert';
</script>

<template>
  <UIAlert>
    <HelpCircle class="h-4 w-4 shrink-0" />
    <UIAlertDescription>
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
    </UIAlertDescription>
  </UIAlert>
</template>
