
<script setup lang="ts">
import { useBookmarkStore } from '~/stores/useBookmarkStore';
const auth = useAuthStore();
const form = ref({
        // email: "",
        title: "",
        type: "",
        user_id: auth.user?.id,
    });
    
    const bookmark = useBookmarkStore();
  
    
    // async function handleCreate() {
    //     const {error,data} = await bookmark.create(form.value);
    //     if (!error.value) {
    //         console.log(data);
    //     }
    //     console.log(error);
    // }
    async function handleCreate() {
        const test = await bookmark.create(form.value);
        
        console.log(test);
    }

</script>

<template>
    <form @submit.prevent="handleCreate" 
    class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4 rounded-md shadow-md">
        <div class="flex flex-col">
            <h1 class="flex justify-center">Bookmark</h1>
            <label class="flex justify-between">
                title:
                <input class="border p-1" v-model="form.title" type="text"/>
            </label>
            <label class="flex justify-between">
                type:
                <input class="border p-1" v-model="form.type" type="text"/>
            </label>
        </div>
        <button class="p-2 bg-slate-900 text-white">Submit</button>
    </form>
</template>