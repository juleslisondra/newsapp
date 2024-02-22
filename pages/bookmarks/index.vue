<template>
    <div class="flex justify-center flex-col px-28 space-y-3">
        <div>
            <NuxtLink to="/bookmarks/create">
                <button class="py-2 px-4 bg-white text-slate-800 rounded-md">Create</button>
            </NuxtLink>
        </div>
        <table class="table-auto">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <th class="px-6 py-2 text-left "> ID </th>
                <th class="px-6 py-2 text-left "> Title </th>
                <th class="px-6 py-2 text-left "> Type</th>
            </thead>
            <tbody class="text-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="bookmark in bookmarks.data">
                    <td class="px-2 py-2 text-sm font-medium bg-white whitespace-nowrap">
                            {{ bookmark.id }}  
                    </td>
                    <td class="px-2 py-2 text-sm text-blue-800 font-medium bg-white whitespace-nowrap">
                        <NuxtLink :to="{ path: `bookmarks/${bookmark.id}`}">
                            {{ bookmark.title }}
                        </NuxtLink>
                    </td>
                    <td class="px-2 py-2 text-sm font-medium bg-white whitespace-nowrap">
                        {{ bookmark.type }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    const { data:bookmarks }:any = await useApiFetch("/api/bookmarks");
</script>

<style scoped>

</style>