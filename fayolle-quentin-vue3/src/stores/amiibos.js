import { defineStore } from 'pinia';
import { ref } from 'vue';
import ky from 'ky';

export const useAmiibosStore = defineStore('amiibos', () => {

    const allAmiibos = ref([])
    const currentAmiibo = ref(null)

    const fetchAllAmiibos = async ()=>{
        const tryToFetch = await ky.get('https://www.amiiboapi.com/api/amiibo/').json()
        const {amiibo}  = tryToFetch
        allAmiibos.value = amiibo
    }

    const fetchAmiibo = async (id)=>{
        const tryToFetch = await ky.get(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`).json()
        currentAmiibo.value = tryToFetch
        console.log(currentAmiibo.value)
    }

    return { allAmiibos, fetchAllAmiibos , currentAmiibo, fetchAmiibo}
});