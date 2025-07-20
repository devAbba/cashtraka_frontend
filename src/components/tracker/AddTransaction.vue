<script setup>
  import Button from '../Button.vue';
  import { ref } from 'vue';
  import { useTransactionStore } from '../../stores/transactions';
  import toast from '../../utils/toast';


  const transactionStore = useTransactionStore();

  const form = ref({
    description: '',
    amount: ''
  });

  const handleSubmit = () => {
    if (!form.value.description || !form.value.amount) {
      toast.error("both fields must be provided");
      return;
    }
    
    const data = { 
      description: form.value.description, 
      amount: parseFloat(form.value.amount)
    }

    transactionStore.addTransaction(data)

    //clear form
    form.value.description = '';
    form.value.amount = '';
  }
</script>

<template>
    <h3 class="text-xl font-bold border-b border-gray-300 my-4">Add new transaction</h3>
    <form id="form" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="description" class="inline-block my-0.5">Description</label>
        <input type="text" id="description" placeholder="Enter description..." v-model="form.description" class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"/>
      </div>
      <div class="mb-4">
        <label for="amount" class="inline-block my-0.5"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input
          type="text"
          id="amount"
          placeholder="Enter amount..."
          v-model="form.amount"
          class="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      
      <Button text="Add transaction"/>
    </form>
    
</template>

