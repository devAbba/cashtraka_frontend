import { defineStore } from 'pinia';
import axios from 'axios';
import toast from '../utils/toast';


export const useTransactionStore = defineStore('transactions', {
    state: () => ({
        transactions: [],
        loading: false,
    }),
    getters: {
        allTransactions: (state) => state.transactions,
        balance: (state) => {
            return state.transactions.reduce((acc, transaction) => {
                return acc + transaction.amount
            }, 0)
        },
        income: (state) => {
            return state.transactions.filter((transaction) => transaction.amount > 0)
            .reduce((acc, transaction) => acc + transaction.amount, 0)
            
        },
        expenses: (state) => {
            return state.transactions.filter((transaction) => transaction.amount < 0)
            .reduce((acc, transaction) => acc + transaction.amount, 0)
                 
        },
        loadingState: (state) => state.loading,
        
    },
    actions: {
        async getTransactions(){   
            this.loading = true
            
            try {
                const res = await axios.get('/api/transactions')
                this.transactions = res.data.data;
                this.loading = false;
            } catch (error){
                console.log(error);
                if (error.response.status === 500){
                    toast.error('unexpected error');
                }
            }   
        },
        async addTransaction(data){  
            try {
                await axios.post('/api/transactions', data);
                this.transactions.push(data);

            } catch (error){
                console.log(error);
                if (error.response.status){
                    toast.error(error.response.statusText);
                }
            }
        },
        async deleteTransaction(id){
            try {
                await axios.delete(`/api/transactions/${id}`);
                this.transactions.forEach((transaction, index) => {
                    if (transaction.id === id) {
                        this.transactions.splice(index, 1)
                    }
                })
                
            } catch (error){
                console.log(error);
                if (error.response.status){
                    toast.error(error.response.statusText);
                }
            }
        }
    }
})
