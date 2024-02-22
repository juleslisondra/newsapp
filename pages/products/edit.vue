
<script setup lang="ts">
import { useProductStore } from '~/stores/useProductStore';
const form = ref({
        // email: "",
        name: "",
        description: "",
        user_id: 1,
    });
    
    const product = useProductStore();
    
    async function handleCreate() {
        const {error} = await product.create(form.value);
        if (!error.value) {
            navigateTo("/")
        }
        console.log(error);
    }

</script>

<template>
    <form @submit.prevent="handleCreate" 
    class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4 rounded-md shadow-md">
        <div class="flex flex-col">
            <h1 class="flex justify-center">Product</h1>
            <label class="flex justify-between">
                Name:
                <input class="border p-1" v-model="form.name" type="text"/>
            </label>
            <label class="flex justify-between">
                Description:
                <input class="border p-1" v-model="form.description" type="text"/>
            </label>
        </div>
        <button class="p-2 bg-slate-900 text-white">Update</button>
    </form>
</template>