<template>
    <header class="sticky top-0 z-20 border-t border-transparent backdrop-blur-md shadow-sm">
        <div class="flex items-center justify-between px-4 py-2">
            <div class="space-x-2 flex items-center">
                <NuxtLink to="/search">
                    <img class="h-12 w-12 object-cover" src="~assets/cat1.jpg" alt="catImage" />
                </NuxtLink>
            </div>
            <div class="space-x-2">
                <NuxtLink v-if="!auth.isLoggedIn" to="/register">register</NuxtLink>
                <NuxtLink v-if="!auth.isLoggedIn" to="/login">login</NuxtLink>
                <button v-if="auth.isLoggedIn" @click="handleLogout()">logout</button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    const auth = useAuthStore();

    async function handleLogout() {
        await auth.logout();
    }
</script>

<style scoped>

</style>