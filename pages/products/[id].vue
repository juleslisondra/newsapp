
<script setup lang="ts">
    import { useProductStore } from '~/stores/useProductStore';


    const route = useRoute()
    const product = useProductStore();

    async function handleCreate() {
        const {error} = await product.update(form.value,route.params.id);
        if (!error.value) {
            navigateTo("/")
        }
        console.log(error);
    }

    const { data:test }:any = await useApiFetch(`/api/products/${route.params.id}`);

    async function handleDelete() {
        const { error } = await product.destroy(route.params.id);
        if (!error.value) {
            navigateTo("/")
        }
        console.log(error);
    }

    const form = ref({
        // email: "",
        name: test.value.data.product_name,
        description: test.value.data.product_description,
        user_id: test.value.data.product_id,
    });
</script>

<template>
    <form @submit.prevent="handleCreate" class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4 rounded-md shadow-md">
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
        <button class="p-2 bg-slate-900 text-white">Submit</button>
    </form>
    <button v-on:click="handleDelete" class="p-2 bg-slate-900 text-white">Delete</button>
</template>