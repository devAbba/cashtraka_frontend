<script setup>
  import { useAuthStore } from '../stores/auth';
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';
import Button from './Button.vue';

  const route = useRoute();
  const authStore = useAuthStore();

  const form = ref({
    email: route.query.email,
    passwod: "",
    password_confirmation: "",
    token: route.params.token
  });

</script>
<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
            </h2>
            <form @submit.prevent="authStore.handleResetPassword(form)" class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="password" name="password" v-model="form.password" placeholder="••••••••" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                    <div v-if="authStore.errors.password">
                        <span class="text-red-500 text-xs mt-1">{{authStore.errors.password[0]}}</span>
                    </div>
                </div>
                <div>
                    <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" name="password_confirmation" v-model="form.password_confirmation" placeholder="••••••••" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">    
                </div>
                <Button text="Reset Password" />
            </form>
        </div>
    </div>
</template>