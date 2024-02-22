
<script setup lang="ts">
    import { useBookmarkStore } from '~/stores/useBookmarkStore';

    const route = useRoute()
    const bookmark = useBookmarkStore();

    // async function handleCreate() {
    //     const {error} = await bookmark.update(form.value,route.params.id);
    //     if (!error.value) {
    //         navigateTo("/")
    //     }
    //     console.log(error);
    // }

    async function handleCreate() {
        const test = await bookmark.update(form.value,route.params.id);
        console.log(test);
    }

    const { data:test }:any = await useApiFetch(`/api/bookmarks/${route.params.id}`);

    async function handleDelete() {
        const { error } = await bookmark.destroy(route.params.id);
        if (!error.value) {
            navigateTo("/")
        }
        console.log(error);
    }

    const form = ref({
        // email: "",
        title: test.value.data.title,
        type: test.value.data.type,
        user_id: test.value.data.user.user_id,
    });
</script>

<template>
    <form @submit.prevent="handleCreate" class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4 rounded-md shadow-md">
        <div class="flex flex-col">
            <h1 class="flex justify-center">Bookmark</h1>
            <label class="flex justify-between">
                Title:
                <input class="border p-1" v-model="form.title" type="text"/>
            </label>
            <label class="flex justify-between">
                Type:
                <input class="border p-1" v-model="form.type" type="text"/>
            </label>
        </div>
        <button class="p-2 bg-slate-900 text-white">Submit</button>
    </form>
    <button v-on:click="handleDelete" class="p-2 bg-slate-900 text-white">Delete</button>
</template>