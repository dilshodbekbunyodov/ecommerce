<script setup>
import '../Basket/index.css'
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="text-center py-[170px]">
    <svg class="fill-[green] m-auto" data-v-d324db16="" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32"
         color="var(--icon-positive)">
      <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm4.778-11.968L11.03 15.78a.75.75 0 0 1-1.06 0l-2.746-2.745a.75.75 0 1 1 1.061-1.06l2.215 2.214 5.218-5.217a.75.75 0 1 1 1.06 1.06Z"></path>
    </svg>

    <p class="text-xl font-bold my-3">Заказ принят</p>

    <div class="mb-[30px]">
      В день доставки вам придёт СМС с кодом. Покажите его,
      чтобы получить заказ
    </div>

    <button @click="router.push('/')" class="blue__btn2 px-[30px] p-2">
      На главную
    </button>
  </div>
</template>

