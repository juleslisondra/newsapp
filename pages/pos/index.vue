
<script setup lang="ts">
    // import { useCounterStore } from '~/stores/myStore';
    // import { useAuthStore } from '~/stores/useAuthStore';
    // access the `store` variable anywhere in the component ✨
    const store = useCounterStore()
    const { sayHello,sayGoodbye } = useUtils();
    const counter = useCounter();
    const user = useAuthStore();
    console.log(store);
    definePageMeta({
        layout:"auth",
        middleware:['auth']
    })
</script>
<template>
    <div>
        <div>{{ user?.user?.name }}</div>
        <div>{{ user?.user?.email }}</div>
        <div class="p-4">
            count: {{ counter }}
        </div>
        <div class="p-4">
            count: {{ store.count }}
            double: {{ store.doubleCount }}
        </div>
        <button class="bg-gray-200 py-2 px-3 m-2 text-black rounded-md" @click="store.increment">+</button>
        <button class="bg-gray-200 py-2 px-3 m-2 text-black rounded-md" @click="store.decrement">-</button>
        <button class="bg-gray-200 py-2 px-3 m-2 text-black rounded-md" @click="sayHello()">click</button>
        <button class="bg-gray-200 py-2 px-3 m-2 text-black rounded-md" @click="sayGoodbye()">click</button>
        <div>
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            pos Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est vitae corporis necessitatibus sit officia quasi eos fugiat sed ducimus dolores laudantium tempora eum, quibusdam eaque aliquam. Consequatur, corporis libero.
            

        </div>
    </div>
    <IconsThumbup />
</template>

<style scoped>

</style>