<script setup lang="ts">
import {
  UISelect,
  UISelectContent,
  UISelectItem,
  UISelectTrigger,
  UISelectValue,
} from '@/components/ui/select';

const modelValue = defineModel<'local' | 'ldap'>({ default: 'ldap' });
const emit = defineEmits<{
  change: [];
}>();
</script>

<template>
  <UISelect v-model="modelValue" @update:model-value="emit('change')">
    <UISelectTrigger>
      <UISelectValue placeholder="Выберите тип записи" />
    </UISelectTrigger>

    <UISelectContent>
      <UISelectItem value="local"> Локальная </UISelectItem>
      <UISelectItem value="ldap"> LDAP </UISelectItem>
    </UISelectContent>
  </UISelect>
</template>
