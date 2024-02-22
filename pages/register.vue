
<script setup lang="ts">
const form = ref({
        // email: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    
    const auth = useAuthStore();
    
    async function handleRegister() {
        const {error} = await auth.register(form.value);
        if (!error.value) {
            navigateTo("/")
        }
        console.log(error);
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
    <form @submit.prevent="handleRegister" 
    class="flex flex-col max-w-md mx-auto items-center space-y-2 bg-slate-600 p-4 rounded-md shadow-md">
        <div class="flex flex-col">
            <label class="flex justify-between">
                User Name:
                <input class="border p-1" v-model="form.name" type="text"/>
            </label>
            <label class="flex justify-between">
                Email:
                <input class="border p-1" v-model="form.email" type="email"/>
            </label>
            <label class="flex justify-between">
                Password:
                <input class="border p-1" v-model="form.password" type="password"/>
            </label>
            <label class="flex justify-between">
                Comfirm Password:
                <input class="border p-1" v-model="form.password_confirmation" type="password"/>
            </label>
        </div>
        <button class="p-2 bg-slate-900 text-white">Register</button>
    </form>

</template>