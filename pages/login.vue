
<script setup lang="ts">
definePageMeta({
    middleware:['guest']
});
const form = ref({
        // email: "",
        email: "",
        password: "",
    });
    
const auth = useAuthStore();

async function handleLogin() {
    if (auth.isLoggedIn){
        return navigateTo("/login");
    }
    const {error,data} = await auth.login(form.value);
    
    if (!error.value){
        return navigateTo("/search",{external: true});
    }
}

    // async function handleLogin() {
    //     await useApiFetch("/sanctum/csrf-cookie");

    //     await useApiFetch("/login",{
    //         method: "POST",
    //         body: form.value
    //     });

    //     const {data} = await useApiFetch("/api/user/");
    //     console.log(data);
    // }
</script>

<template>
    <form @submit.prevent="handleLogin" 
    class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-600 p-4 rounded-md shadow-md">
        <div class="flex flex-col max-w-lg">
            <label class="flex justify-between">
                Email
                <input class="border p-1" v-model="form.email" type="email"/>
            </label>
            <label class="flex justify-between">
                Password
                <input class="border p-1" v-model="form.password" type="password"/>
            </label>
        </div>
        <button class="p-2 rounded bg-slate-900 text-white">login</button>
    </form>

</template>