<script setup>
  import { useAuthStore } from '../stores/auth';
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
  import { ChevronDownIcon } from '@heroicons/vue/20/solid';

  const authStore = useAuthStore();
</script>

<template>
<nav class="fixed top-0 right-0 z-50 w-full bg-white shadow dark:bg-gray-800">
    <div class="flex p-6 text-gray-600 dark:text-gray-300">
        <router-link :to="{name: 'Home'}" class="text-xl font-medium uppercase text-gray-800 transition-colors duration-300 transform dark:text-gray-200 active:border-b-2 hover:border-blue-500 mx-1.5 sm:mx-6">cashtraka</router-link>

        <template v-if="!authStore.user">
            <div class="ml-auto">
                <router-link :to="{name: 'Signup'}" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Register</router-link>

                <router-link :to="{name: 'Login'}" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</router-link>
            </div>   
        </template>
        <template v-else>
            <Menu as="div" class="ml-auto relative inline-block text-left">
                <div>
                    <MenuButton class="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm text-gray-900">
                        {{ authStore.user.name }}
                        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                            <div class="p-1 mx-3 my-1 border-b">{{ authStore.user.email }}</div>
                            
                            <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
                            </MenuItem>
                            
                            <form @submit.prevent="authStore.handleLogout">
                                <MenuItem v-slot="{ active }">
                                    <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
                                </MenuItem>
                            </form>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </template>
    </div>
</nav>
</template>