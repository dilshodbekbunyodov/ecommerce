<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref } from 'vue';

const modules = ref([Navigation]);
</script>

<template>
  <div>
    <Swiper :slidesPerView="1" :navigation="true" :modules="modules" class="mySwiper">
      <SwiperSlide v-for="(index) in 4" :key="index">
        <img src="../../assets/img_1.png" class="w-full" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.mySwiper {
  width: 100%;
  height: 100%;
  user-select: none;
}

.mySwiper .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
  content: 'prev';
  font-size: 25px;
  color: #ffffff;
  margin-right: 15px;
}

.mySwiper .swiper-button-next:after, .swiper-rtl .swiper-button-next:after {
  content: 'next';
  font-size: 25px;
  color: #fff;
  margin-left: 15px;

}
</style>
