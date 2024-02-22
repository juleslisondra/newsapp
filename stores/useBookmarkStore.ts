import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

type Bookmark = {
    title:string;
    type:string;
}

type BookmarkInfo = {
    title:string;
    type:string;
    published_date:string;
    url:string;
    section_id:string;
    section_name:string
}

type SearchInfo = {
    search:string;
    source:string;
}

export const useBookmarkStore = defineStore('bookmark', () => {

    const bookmark = ref<Bookmark | null>(null)
    const test : any = ''; 
    async function fetchBookmark(id:number) {
        await useApiFetch("/sanctum/csrf-cookie");
        const { data,error} = await useApiFetch(`/api/bookmarks/${id}`);
        console.log(error);
        bookmark.value = data.value as Bookmark;
        // test.value = data;
        // const samp: bookmarks[] = test.data;
    }

    async function create(info: BookmarkInfo) {
        await useApiFetch("/sanctum/csrf-cookie");
        const create = await useApiFetch("/api/bookmarks/",{
            method: "POST",
            body: info,
        });
       
        return create;
    }

    async function update(info: BookmarkInfo,route:any) {
        await useApiFetch("/sanctum/csrf-cookie");
        const update = await useApiFetch(`/api/bookmarks/${route}`,{
            method: "PUT",
            body: info,
        });
       
        return update;
    }

    async function destroy(id:string) {
        await useApiFetch("/sanctum/csrf-cookie");
        const destroy = await useApiFetch(`/api/bookmarks/${id}`,{
            method: "DELETE",
        });
       
        return destroy;
    }

    async function search(info: SearchInfo) {
        await useApiFetch("/sanctum/csrf-cookie");
        const test = await useApiFetch(`/api/news/search`,{
            method: "POST",
            body: info,
            headers: {"Content-Type": "application/json"}
        })
        return test;
    }

    return { fetchBookmark,create,update,destroy,bookmark,search }
})