<template>
    <div>
        <header class="text-[100px] text-gray-600 font-extralight">
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="pos">Pos</NuxtLink>
                </li>
            </ul>
        </header>
        event id: {{ $route.params.id }}
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:"auth",
    middleware:['auth']
})


</script>

<style scoped>

</style>