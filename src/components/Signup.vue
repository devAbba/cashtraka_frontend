<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '../stores/auth';
    import Button from './Button.vue';

    const authStore = useAuthStore();

    const form = ref({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });

</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-6 h-screen mx-auto lg:py-0">
    <h2 class="text-xl font-bold text-center mb-2">Signup for a new account</h2>
    <div class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
    <form @submit.prevent="authStore.handleRegister(form)">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" v-model="form.name" placeholder="John Doe">
          <div v-if="authStore.registrationErrors.name">
            <span class="text-red-500 text-xs mt-1">{{authStore.registrationErrors.name[0]}}</span>
          </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <div>
          <input type="email" id="email" name="email" v-model="form.email" placeholder="john@example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
        </div>
        <div v-if="authStore.registrationErrors.email">
            <span class="text-red-500 text-xs mt-1">{{authStore.registrationErrors.email[0]}}</span>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" v-model="form.password" placeholder="********">
          <div v-if="authStore.registrationErrors.password">
            <span class="text-red-500 text-xs mt-1">{{authStore.registrationErrors.password[0]}}</span>
          </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="password_confirmation" v-model="form.password_confirmation" placeholder="********">
      </div>
      <Button text="Register" />
      <p class="mt-4 text-center text-sm text-gray-500">
        Already have an account?
        <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
      </p>
    </form>
    </div>
  </div>
</template>