<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    income: {
      type: Number,
      required: true
    },
    expenses: {
      type: Number,
      required: true
    }
  });
</script>
<template>
    <div class="flex space-between my-5 p-5 bg-white shadow-md">
    <div class="flex-1 text-center border-r border-gray-300">
      <h4 class="uppercase m-0">Income</h4>
      <p class="text-base leading-normal tracking-normal my-2 text-green-500">+${{ income.toFixed(2) }}</p>
    </div>
    <div class="flex-1 text-center">
      <h4 class="uppercase m-0">Expense</h4>
      <p class="text-base leading-normal tracking-normal my-2 text-red-700">-${{ (expenses * -1).toFixed(2) }}</p>
    </div>
  </div>
</template>