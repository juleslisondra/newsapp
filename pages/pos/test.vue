<template>
    <div>
        Counter: {{ counter }}
        <div>
            <button class="p-3 m-2 bg-gray-500 text-stone-900" @click="counter++">+</button>
            <button class="p-3 m-2 bg-gray-500 text-stone-900" @click="counter--">-</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const counter = useCounter();
    const { sayHello,sayGoodbye } = useUtils();
    
    definePageMeta({
        layout:"auth"
    })

    
</script>

<style scoped>

</style>