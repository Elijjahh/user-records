<script setup lang="ts">
import {
  UISelect,
  UISelectContent,
  UISelectItem,
  UISelectTrigger,
  UISelectValue,
} from '@/components/ui/select';
</script>

<template>
  <UISelect default-value="local">
    <UISelectTrigger>
      <UISelectValue placeholder="Выберите тип записи" />
    </UISelectTrigger>
    <UISelectContent>
      <UISelectItem value="local"> Локальная </UISelectItem>
      <UISelectItem value="ldap"> LDAP </UISelectItem>
    </UISelectContent>
  </UISelect>
</template>
