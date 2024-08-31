<script setup>
import {ref} from "vue";
import {toast} from "vue3-toastify";
import {products} from '../../store/db.js'
import {useProductStore} from "../../store/index.js";
import DetailModal from '../ProductModal/index.vue'

const store = useProductStore()

const productArr = ref(products)
const proModal = ref(false)
const modalValue = ref({})

const openDetail = (item) => {
  proModal.value = true
  modalValue.value = item
}

const addToBasket = (value) => {
  store.AddToBasket(value)
  toast.success('Успешно добавлено');
}
</script>

<template>
  <div>
    <!----------------------------------products------------------------------------------->
    <div class="container">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in productArr" :key="index">
          <div class="columns relative group cursor-pointer" @click="openDetail(item)">
            <img :src="item.img" alt="product_image"/>
            <div class="absolute top-0 bg-black/60 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i class="far fa-search text-white p-1"/>
            </div>
          </div>
          <div class='body__product'>
            <h3>{{ item.h3 }}</h3>
            <h6>{{ item.h6 }}</h6>
            <strong>{{ item.cost ? item.cost.toLocaleString() : '' }} cум</strong>
            <button @click="addToBasket(item)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------products------------------------------------------->


    <!----------------------------------banner img------------------------------------------->
    <div class="container">
      <div class="mt-5 pt-5 mb-5 pb-5">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <div class="flex flex-col space-y-4 cursor-pointer">
              <img src="../../assets/images/buildingds.png" alt="" class="w-full h-auto object-cover"/>
              <img src="../../assets/images/tommy.png" alt="" class="w-full h-auto object-cover"/>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-2 cursor-pointer">
            <img src="../../assets/images/women.png" alt="" class="w-full h-auto object-cover"/>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------banner img------------------------------------------->


    <!-----------------------------------НОВАЯ КОЛЛЕКЦИЯ----------------------------------->
    <div class="container">
      <div class="brands mb-1"><h1>НОВАЯ КОЛЛЕКЦИЯ</h1></div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in productArr.slice(0, 4)" :key="index">
          <div class='columns relative group cursor-pointer' @click="openDetail(item)">
            <img :src="item.img" alt="product_image"/>
            <div
                class="absolute top-0 bg-black/60 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i class="far fa-search text-white p-1"></i>
            </div>
          </div>
          <div class='body__product'>
            <h3>{{ item.h3 }}</h3>
            <h6>{{ item.h6 }}</h6>
            <strong>{{ item.cost ? item.cost.toLocaleString() : '' }} cум</strong>
            <button @click="addToBasket(item)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>

    <div class='more_btn'>
      <button
          class="hover:bg-[#003466] transition hover:text-white border border-[#003466] h-[33px] outline-none bg-transparent mb-[10px] w-[179px] font-normal text-[#003466] duration-400">
        <i class="far fa-sync-alt"/> Eщё
      </button>
    </div>
    <!-----------------------------------НОВАЯ КОЛЛЕКЦИЯ----------------------------------->

    <DetailModal
        v-model:proModal="proModal"
        :modalValue="modalValue"
    />
  </div>
</template>

<style>
@import "./product.css";
</style>
