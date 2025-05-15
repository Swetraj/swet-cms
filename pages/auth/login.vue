<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card class="px-4 py-8">
          <v-card-title class="text-h4 font-weight-bold mb-2"> Hi, Welcome Back</v-card-title>

          <v-card-subtitle class="text-h6 mb-8">
            Enter your credentials to continue
          </v-card-subtitle>

          <v-text-field
            v-model="credentials.email"
            class="mb-4"
            label="Email Address / Username"
            prepend-inner-icon="mdi-account"
            variant="outlined"
          />
          <v-text-field
            v-model="credentials.password"
            class="mb-4"
            label="Enter Password"
            prepend-inner-icon="mdi-lock"
            type="password"
            variant="outlined"
          />

          <div class="d-flex justify-space-between align-center mb-8">
            <v-checkbox color="primary" hide-details label="Remember me?" />
          </div>

          <v-btn block class="mb-4" color="primary" size="large" @click="login"> Sign In</v-btn>

          <div class="text-center">
            <v-btn color="primary" variant="text"> Don't Have An Account?</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
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
  $fetch('/api/auth/login', {
    method: 'POST',
    body: credentials
  })
    .then(async () => {
      await refreshSession()
      await navigateTo('/admin')
    })
    .catch(() => alert('Bad credentials'))
}
</script>
