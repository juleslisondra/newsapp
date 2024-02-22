<template>
    <div class="min-h-screen bg-gray-950 text-white">
       <Header />
       <Alert />
       <slot />
    </div>
    
</template>

<script setup lang="ts">
    const auth = useAuthStore();
</script>

<style scoped>

</style>