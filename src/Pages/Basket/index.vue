<script setup>
import {useProductStore} from "../../store/index.js";
import {useRouter} from "vue-router";
import './index.css'

const store = useProductStore()
const router = useRouter()

const removeProduct = (index) => {
  store.basket.splice(index, 1)
}

const submitOrders = () => {
  if (store.basket && store.basket.length) {
    router.push('/ordered')
  }
}
</script>

<template>
  <div>
    <img class='w-full mb-4' src="../../assets/images/launderette_dry_cleaning_wiltshire_271.png" alt=""/>

    <div class="container py-5">
      <div class="brands text-center">
        <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
      </div>

      <template v-for="(item, index) in store.basket" :key="index">
        <div class='border__dash'>
          <div class='basket_ordering'>
            <div class='col-md-3 clothe'>
              <img :src="item.img" alt=""/>
              <div>
                <h2>{{ item.h3 }} рубашка</h2>
                <h6>{{ item.h6 }}</h6>
              </div>
            </div>

            <div class='col-md-2 calculation'>
              <button :disabled="item.count === 1" class='minus' @click="item.count--">
                <svg width="15" height="3" viewBox="0 0 15 3" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3V0H15V3H0Z" fill="black"/>
                </svg>
              </button>
              <span>{{ item.count }} шт</span>
              <div class='plus' @click="item.count++">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9 0H6V6H0V9H6V15H9V9H15V6H9V0Z"
                        fill="white"/>
                </svg>
              </div>
            </div>

            <div class='col-md-2 text-center total__cost'>
              <h3>{{ Number(item.cost * item.count).toLocaleString() }} cум. </h3>
            </div>

            <div class='col-md-2 text-center'>
              <div @click="removeProduct(index)" class="cursor-pointer">
                <svg class="p-1" width="45" height="46" viewBox="0 0 45 46" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.0924 10.4672L10.1437 13.4159L19.7262 22.9984L10.1421 32.5825L13.0908 35.5312L22.6749 25.9471L32.2591 35.5312L35.2078 32.5825L25.6236 22.9984L35.2061 13.4158L32.2574 10.4671L22.6749 20.0496L13.0924 10.4672Z"
                        fill="#003466"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </template>


      <!------------------------------------if basket empty------------------------->
      <div
          class="text-center flex flex-col items-center"
          v-if="store.basket && !store.basket.length"
      >
        <h1 class="text-xl font-bold mb-3"> В корзине пока нет товаров</h1>

        <small class="mb-3">Начните с подборок на главной странице или найдите нужный товар через поиск</small>

        <button @click="router.push('/')" class="blue__btn2 px-[30px] p-2 !mb-5">
          На главную
        </button>
      </div>
      <!------------------------------------if basket empty------------------------->
    </div>


    <!----------------------ВЫБЕРИТЕ ВАРИАНТ ДОСТАВКИ-------------------------->
    <div v-if="store.basket && store.basket.length" class="information">
      <div class="container">
        <div class="row">

          <div class="col-lg-6">
            <h1>ВЫБЕРИТЕ ВАРИАНТ ДОСТАВКИ</h1>

            <div class='delivery'>
              <label for="radio" class="flex cursor-pointer">
                <input type="radio" id="radio" name="daa"/>
                <div>
                  <h3>Забрать самостоятельно на складе</h3>
                  <p>Доступно - сегодня(кроме выходных)</p>
                </div>
              </label>
            </div>

            <div class='delivery'>
              <label for="radio1" class="flex cursor-pointer">
                <input type="radio" id="radio1" name="daa"/>
                <div>
                  <h3>Бесплатная доставка автотранспортом.</h3>
                  <p>Для заказов от 400 000 сум.</p>
                </div>
              </label>
            </div>

            <div class='delivery'>
              <label for="radio2" class="flex cursor-pointer">
                <input type="radio" name="daa" id="radio2"/>
                <div>
                  <h3>Платная доставка автотранспортом.</h3>
                  <p>Для заказов не сумму мене 200 000сум.</p>
                </div>
              </label>
            </div>

            <div class='delivery'>
              <label for="radio3" class="flex cursor-pointer">
                <input type="radio" id="radio3" name="daa"/>
                <div>
                  <h3>Доступно в регионы Узбекистан</h3>
                  <p>Стоимость доставки оговаривается отделно.</p>
                </div>
              </label>
            </div>

          </div>

          <div class="col-lg-6 labels">
            <h1>УКАЖИТЕ ВАШИ ДАННЫЕ</h1>

            <input type="text" placeholder='ФИО'/>

            <input type="number" placeholder='Номер телефон'/>

            <input type="email" placeholder='Ваш е-mail'/>

            <select class="w-full p-2 mb-4">
              <option selected disabled>Ваш Город</option>
              <option v-for="(e, inx2) in store.region" :key="inx2">{{ e.title }}</option>
            </select>

            <input type="text" placeholder='Адресс доставки'/>
          </div>

          <div class="col-lg-12 text-center">
            <button class='ordering' @click="submitOrders">ОФОРМИТЬ ЗАКАЗ</button>
          </div>
        </div>
      </div>
    </div>
    <!--  --------------------ВЫБЕРИТЕ ВАРИАНТ ДОСТАВКИ-------------------------->
  </div>
</template>
