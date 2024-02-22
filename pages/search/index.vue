
<script setup lang="ts">
import { useBookmarkStore } from '~/stores/useBookmarkStore';
const auth = useAuthStore();
definePageMeta({
    layout:"auth",
    middleware:['auth']
})
const form = ref({
        search: 'philippines',
        source: 'theguardian',
    });

interface News {
    title: any,
    url: any
}

async function handleDelete(id) {
        const { error } = await bookmark.destroy(id);
        if (!error.value) {
            navigateTo("/search")
            const { data }:any = await useApiFetch(`/api/bookmarks/user/${auth.user.id}`);
            let temp:any = data.value;
            userMarks.value = temp.search as News;
        }
        console.log(error);
    }

const post = ref({
        title: '',
        section_id: '',
        section_name: '',
        published_date: '',
        url:'',
        type: '',
    });

const news = ref<News | null>(null)
const userMarks = ref<News | null>(null)
const bookmark = useBookmarkStore();

async function handleSearch() {
    const {error,data} = await bookmark.search(form.value);
    const test:any = data.value;
    news.value = test.search as News;
    console.log(data.value.search);
    if(data.value.search.length < 1){
        alert('no result');
    }
}
async function handleCreate(x,k,q,n,y,l) {
    post.value = {
        title : x, 
        url: k,
        type : q,
        published_date : n,
        section_id : y,
        section_name : l,
    }
    const {error} = await bookmark.create(post);
    console.log(error);
    if (error.value){
        alert(error.value?.data.message)
    }
    const { data }:any = await useApiFetch(`/api/bookmarks/user/${auth.user.id}`);
    let temp:any = data.value;
    userMarks.value = temp.search as News;
}

const { data }:any = await useApiFetch(`/api/bookmarks/user/${auth.user.id}`);
let temp:any = data.value;
userMarks.value = temp.search as News;

const { data:bookmarks }:any = await useApiFetch("/api/bookmarks");
</script>

<template>
    <div class="flex justify-center">

        <div class="flex flex-row">
            <div class="flex-1 flex">
                <div>
                    <form @submit.prevent="handleSearch" class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4  shadow-md">
                        <div class="flex flex-col">
                            <h1 class="flex justify-center mb-2">Bookmark</h1>
                            <div class="flex flex-row space-x-2">
                                <label class="flex space-x-2" >
                                    <span>search:</span>
                                    <input class="border p-1" v-model="form.search" type="text"/>
                                </label>
                                <label class="flex space-x-2">
                                    <label>source:</label>
                                    <input class="border p-1" v-model="form.source" type="text"/>
                                </label>
                            </div>
                        </div>
                        <button class="p-2 bg-slate-900 text-white">Submit</button>
                    </form>
                    <div class="flex flex-col max-w-lg mx-auto items-center space-y-2 bg-slate-700 p-4  shadow-md">
                        <div  v-for="test in news" class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <div class="px-6 py-4">
                                <div class="font-bold text-gray-700 text-xl mb-2">{{ test.title }}</div>
                                <p class="text-blue-700 text-base p-2">
                                    <a :href="test.url" target="_blank">{{ test.url }}</a>
                                </p>
                                <p class="text-slate-700 text-base p-2 font-black">
                                    {{ test.type }}
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ test.publish_date }}</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ test.section_id }}</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ test.section_name }}</span>
                            </div>
                            <button class="py-2 px-4 bg-blue-400" @click="handleCreate(test.title,test.url,test.type,test.publish_date,test.section_id,test.section_name)">mark</button>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <h1 class="font-black text-lg">Bookmarks</h1>
                    <table class="table">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                            <th class="px-6 py-2 text-left "> Title </th>
                            <th class="px-6 py-2 text-left "> Type</th>
                            <th class="px-6 py-2 text-left "> Action</th>
                        </thead>
                        <tbody class="text-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr v-for="bookmark in userMarks">
                                <td class="px-2 py-2 text-sm text-blue-800 font-medium bg-white whitespace-nowrap">
                                    <a :href="bookmark.url" target="_blank">
                                        {{ bookmark.title }}
                                    </a>
                                </td>
                                <td class="px-2 py-2 text-sm font-medium bg-white whitespace-nowrap">
                                    {{ bookmark.type }}
                                </td>
                                <td><button class="p-3 bg-red-600 text-white" @click="handleDelete(bookmark.id)">DEL</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>   
