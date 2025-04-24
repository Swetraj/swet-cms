<template>
  <v-row>
    <v-col cols="12" md="8">
      <p>Hello</p>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})
</script>
