import { defineStore } from "pinia";
import { useApiFetch } from "~/composables/useApiFetch";

type Product = {
    name:string;
    description:string;
}

type ProductInfo = {
    name:string;
    description:string;
    user_id:number;
}

export const useProductStore = defineStore('product', () => {

    const product = ref<Product | null>(null)
    const test : any = ''; 
    async function fetchProduct(id:number) {
        await useApiFetch("/sanctum/csrf-cookie");
        const { data,error} = await useApiFetch(`/api/products/${id}`);
        console.log(error);
        product.value = data.value as Product;
        // test.value = data;
        // const samp: Products[] = test.data;
    }

    async function create(info: ProductInfo) {
        await useApiFetch("/sanctum/csrf-cookie");
        const create = await useApiFetch("/api/products/",{
            method: "POST",
            body: info,
        });
       
        return create;
    }

    async function update(info: ProductInfo,route:any) {
        await useApiFetch("/sanctum/csrf-cookie");
        const create = await useApiFetch(`/api/products/${route}`,{
            method: "PUT",
            body: info,
        });
       
        return create;
    }

    async function destroy(route:any) {
        await useApiFetch("/sanctum/csrf-cookie");
        const create = await useApiFetch(`/api/products/${route}`,{
            method: "DELETE",
        });
       
        return create;
    }



    return { fetchProduct,create,update,destroy, product }
})