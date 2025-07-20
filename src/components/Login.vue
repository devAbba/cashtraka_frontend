<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import Button from './Button.vue';


  const authStore = useAuthStore();

  const form = ref({
    email: '',
    password: ''
  });


</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0">
    <h2 class="text-xl font-bold mb-4 text-center">
      Login to your account
    </h2>
    <div class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <form @submit.prevent="authStore.handleLogin(form)">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email address</label>
        
        <input name="email" type="email" v-model="form.email" autocomplete="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        
        <div v-if="authStore.errors.email">
          <span class="text-red-500 text-xs mt-1">{{authStore.errors.email[0]}}</span>
        </div> 
      </div>

      <div class="mb-4">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <router-link :to="{name: 'ForgotPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
          </div>
        </div>
        <div class="mt-2">
          <input name="password" type="password" v-model="form.password" autocomplete="current-password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="********">
        </div>
        <div v-if="authStore.errors.password">
          <span class="text-red-500 text-xs mt-1">{{authStore.errors.password[0]}}</span>
        </div>
      </div>
    <Button text="Sign in"/>
    </form>

    <p class="mt-4 text-center text-sm text-gray-500">
      Not a member?
      <router-link :to="{name: 'Signup'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">register for an account here</router-link>
    </p>
    </div>
  </div>
</template>