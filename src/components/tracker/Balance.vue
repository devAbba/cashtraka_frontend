<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        total: {
            type: Number,
            required: true
        }
    });
   
</script>

<template>
    <div class="p-6">
        <h4 class="uppercase text-lg font-medium m-0">Your Current Balance</h4>
        <h5 class="text-lg">${{ total.toFixed(2) }}</h5>
    </div>
</template>
