<script setup>
    import { defineProps } from 'vue';
    import { useTransactionStore } from '../../stores/transactions';

    const props = defineProps({
        transactions: {
          type: Array,
          required: true
        }
    });

    const transactionStore = useTransactionStore();

    const handleDelete = (id) => {
        transactionStore.deleteTransaction(id);
    }
    
</script>

<template>
    <h3 class="text-xl font-bold border-b border-gray-300 mt-8">History</h3>
    <ul class="list-none p-0 mb-10">
        <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="transaction.amount < 0 ? 'expense' : 'income'"
        class="relative flex space-between p-2 my-4 bg-white shadow-md"
        >
        {{ transaction.description }} 
        <span v-if="transaction.amount>0" class="ml-auto">${{ transaction.amount }}</span>
        <span v-else="transaction.amount<0" class="ml-auto">-${{ transaction.amount * -1 }}</span>
        <button class="delete-btn" @click="handleDelete(transaction.id)">
            x
        </button>
        </li>
    </ul>
</template>