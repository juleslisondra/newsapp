<template>
    <div class="flex justify-center">
        <table class="table-auto">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <th class="px-6 py-2 text-left "> ID </th>
                <th class="px-6 py-2 text-left "> Name </th>
                <th class="px-6 py-2 text-left "> Description</th>
                <th class="px-6 py-2 text-left "> Action </th>
            </thead>
            <tbody class="text-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="product in products.data">
                    <td class="px-2 py-2 text-sm font-medium bg-white whitespace-nowrap">
                            {{ product.product_id }}  
                    </td>
                    <td class="px-2 py-2 text-sm text-blue-800 font-medium bg-white whitespace-nowrap">
                        <NuxtLink :to="{ path: `products/${product.product_id}`}">
                            {{ product.product_name }}
                        </NuxtLink>
                    </td>
                    <td class="px-2 py-2 text-sm font-medium bg-white whitespace-nowrap">
                        {{ product.product_description }}
                    </td>
                    <td>
                        --
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    const { data:products }:any = await useApiFetch("/api/products");
</script>

<style scoped>

</style>