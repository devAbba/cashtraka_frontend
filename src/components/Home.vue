<script setup>
  import { onMounted } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useTransactionStore } from '../stores/transactions';

  import Balance from './tracker/Balance.vue';
  import TransactionList from './tracker/TransactionList.vue';
  import AddTransaction from './tracker/AddTransaction.vue';
  import IncomeExpenses from './tracker/IncomeExpenses.vue';


  const authStore = useAuthStore();
  const transactionStore = useTransactionStore();

  onMounted(async () => {
    await authStore.getUser();
    await transactionStore.getTransactions();
  })
</script>

<template>
  <div class="mx-auto my-20 max-w-xs">
    <Balance :total="transactionStore.balance"/>
    <IncomeExpenses :income="transactionStore.income" :expenses="transactionStore.expenses"/>
    <TransactionList :transactions="transactionStore.allTransactions"/>
    <AddTransaction/>
  </div> 
</template>