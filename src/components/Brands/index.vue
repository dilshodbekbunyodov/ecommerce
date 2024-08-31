<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from 'vue';

import {brand} from '../../store/db.js'

const modules = ref([Navigation]);
const imageArr = ref(brand)
</script>

<template>
  <div id="brands">
    <!-- -------------------------------------------БРЕНДЫ--------------------------------------->
    <div class='brands'>
      <h1>БРЕНДЫ</h1>
    </div>

    <div class="container swiper__slide">
      <Swiper
          :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
          :navigation="true"
          :slidesPerView="7"
          :modules="modules"
          class="mySwiper brands__carousel"
      >
        <SwiperSlide v-for="(item, index) in imageArr" :key="index">
          <div class='item' :key="index">
            <div class='item_border cursor-pointer'>
              <img :src="item.img" alt="sd"/>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- -------------------------------------------БРЕНДЫ--------------------------------------->


    <!---------------------------------------НОВАЯ КОЛЛЕКЦИЯ----------------------------------->
    <div class='brands'>
      <h1>НОВАЯ КОЛЛЕКЦИЯ</h1>
    </div>

    <div class="container">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        <div class="text-center">
          <div class="images">
            <img src="../../assets/humans/chto-privezti-yaroslavlya-podarok-photo3 1.png" alt=""/>
            <div class="bg_gradient">
              <p>Общее</p>
            </div>
          </div>
        </div>

        <div class="images">
          <img src="../../assets/humans/beautiful-3116587_1920 1.png" alt=""/>
          <div class="bg_gradient">
            <p>Для женщин</p>
          </div>
        </div>

        <div class="images">
          <img src="../../assets/humans/19c6af69c9a77a86a3cb2db2ec466ee4 1.png" alt=""/>
          <div class="bg_gradient">
            <p>Для мужчин</p>
          </div>
        </div>

        <div class="images">
          <img src="../../assets/humans/children-817368_1920 1.png" alt=""/>
          <div class="bg_gradient">
            <p>Для детей</p>
          </div>
        </div>
      </div>
    </div>
    <!---------------------------------------НОВАЯ КОЛЛЕКЦИЯ----------------------------------->
  </div>
</template>

<style>
@import "./brand.css";

.swiper__slide .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
  content: 'prev';
  font-size: 20px;
  color: #000;
  margin-right: 15px;
}

.swiper__slide .swiper-button-next:after, .swiper-rtl .swiper-button-next:after {
  content: 'next';
  font-size: 20px;
  color: #000;
  margin-left: 15px;
}
</style>
