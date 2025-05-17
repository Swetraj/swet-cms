<script lang="ts" setup>
import { ref } from 'vue'

const menuItems = [
  { name: 'dashboard', icon: 'mdi-view-dashboard-outline', tooltip: 'Dashboard', to: '/admin' },
  { name: 'students', icon: 'mdi-school-outline', tooltip: 'Academics' },
  { name: 'chat', icon: 'mdi-message-outline', tooltip: 'Messages'},
]

const activeMenu = ref<string | null>()
const showSubDrawer = ref(false)

function toggleSubDrawer(name:string | null) {
  if (activeMenu.value === name) {
    showSubDrawer.value = !showSubDrawer.value
  } else {
    activeMenu.value = name
    showSubDrawer.value = true
  }
}
</script>
<template>
  <v-navigation-drawer class="primary-navbar" color="primary" rail permanent>
    <v-list color="white">
      <v-list-item>
        <v-img src="https://picsum.photos/seed/picsum/40/40" height="40" contain></v-img>
      </v-list-item>

      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :active="activeMenu === item.name"
        :to="item.to"
        :prepend-icon="item.icon"
        @click="toggleSubDrawer(item.name)"
        density="comfortable"
        class="my-1"
        :value="item.name"
        :title="item.tooltip"
      />
    </v-list>

    <v-spacer></v-spacer>

    <v-list>
      <v-list-item prepend-icon="mdi-cog-outline" title="Settings" />
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer
    v-model="showSubDrawer"
    width="220"
  >
    <v-list v-if="activeMenu === 'students'">
      <v-list-item title="Overview" prepend-icon="mdi-home-outline" />
      <v-list-item title="Students" prepend-icon="mdi-account-multiple-outline" active />
      <v-list-item title="Teachers" prepend-icon="mdi-account-tie-outline" />
      <v-list-item title="Class Records" prepend-icon="mdi-file-document-outline" />
    </v-list>
    <!-- Add more conditions if you want different menus per section -->
  </v-navigation-drawer>
</template>
