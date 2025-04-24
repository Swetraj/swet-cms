<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="px-4 py-8">
          <v-card-title class="text-h4 font-weight-bold mb-2"> Hi, Welcome Back</v-card-title>

          <v-card-subtitle class="text-h6 mb-8">
            Enter your credentials to continue
          </v-card-subtitle>

          <v-text-field
            v-model="credentials.email"
            variant="outlined"
            label="Email Address / Username"
            prepend-inner-icon="mdi-account"
            class="mb-4"
          />
          <v-text-field
            v-model="credentials.password"
            variant="outlined"
            label="Enter Password"
            prepend-inner-icon="mdi-lock"
            type="password"
            class="mb-4"
          />

          <div class="d-flex justify-space-between align-center mb-8">
            <v-checkbox label="Remember me?" color="primary" hide-details />
          </div>

          <v-btn block color="primary" size="large" class="mb-4" @click="login"> Sign In</v-btn>

          <div class="text-center">
            <v-btn variant="text" color="primary"> Don't Have An Account?</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: ''
})

onMounted(async () => {
  if (loggedIn && user) {
    await navigateTo('/admin')
  }
})

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
    .then(async () => {
      // Refresh the session on client-side and redirect to the home page
      await refreshSession()
      await navigateTo('/admin')
    })
    .catch(() => alert('Bad credentials'))
}
</script>
