import { defineStore } from 'pinia'
import {ref} from "vue";

export const useProductStore = defineStore('products', () => {
    const basket = ref([])

    const region = ref([
        {
            title: 'Tashkent'
        },
        {
            title: 'Республика Каракалпакстан'
        }, {
            title: 'Андижанская область'
        }, {
            title: 'Бухарская область'
        }, {
            title: 'Джизакская область'
        }, {
            title: 'Кашкадарьинская область'
        }, {
            title: 'Навоийская область'
        }, {
            title: 'Наманганская область'
        }, {
            title: 'Самаркандская область'
        },
        {
            title: '\tСурхандарьинская область'
        },
        {
            title: 'Сырдарьинская область'
        },
        {
            title: 'Ташкентская область'
        },
        {
            title: 'Ферганская область'
        },
        {
            title: 'Хорезмская область'
        },
    ])

    function AddToBasket(value) {
        basket.value.push(value)
    }

    return {
        AddToBasket,
        basket,
        region
    }
})
