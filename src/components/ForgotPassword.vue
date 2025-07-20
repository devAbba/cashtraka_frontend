<script setup>
  import { useAuthStore } from '../stores/auth';
  import { ref } from 'vue';

  const form = ref({
    email: ""
  });

  const authStore = useAuthStore();
</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0">
        <div class="w-full p-4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot Password
            </h2>
            <p class="block mb-2 mt-2 text-sm font-medium text-gray-500 dark:text-white">Enter your email address and we will send you a reset link</p>
            <form @submit.prevent="authStore.handleForgotPassword(form)" class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <div v-if="authStore.status" class="flex p-1 bg-blue-400 rounded">
                        <font-awesome-icon icon="circle-info" />
                        <span class="text-white text-xs mt-1">{{authStore.status}}</span>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" v-model="form.email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <div v-if="authStore.errors_pass_reset.email">
                        <span class="text-red-500 text-xs mt-1">{{authStore.errors_pass_reset.email[0]}}</span>
                    </div>   
                </div>
                <button class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">Send Reset link</button>
            </form>
        </div>
    </div>
</template>