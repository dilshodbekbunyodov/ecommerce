<script setup>
import {ref, watch} from "vue";
import {toast} from "vue3-toastify";
import {useProductStore} from "../../store/index.js";
import router from "../../router/index.js";

const modalValue = ref({})

const store = useProductStore()
const emit = defineEmits(['update:proModal'])
const props = defineProps({
  proModal: {
    type: Boolean,
    default: () => false
  },
  modalValue: {
    type: Object,
    default: () => {
    }
  }
})

watch(() => props.proModal, (val) => {
  if (val) {
    modalValue.value = props.modalValue
  }
})

const addToBasket = () => {
  store.AddToBasket(modalValue.value)
  toast.success('Успешно добавлено');
}

const buyOnClick = () => {
  store.AddToBasket(modalValue.value)
  router.push('/basket')
}
</script>

<template>
  <div :class="{'Modal__Style z-20 !max-w-[750px]': true, 'modal top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2': proModal, 'hide': !proModal}">
    <div class="modal-content">
      <h3 class="absolute top-[18px]">СОСТАВ, УХОД И ПРОИСХОЖДЕНИЕ</h3>
      <div class="far fa-times mt-1 mr-1" @click="emit('update:proModal')"/>
      <div class="modal-body1 mt-4">
        <div class="md:flex block items-center">
          <img :src="modalValue.img" alt="product-image">

          <div class="body__product">
            <h3>{{ modalValue.h3 }}</h3>
            <h6>{{ modalValue.h6 }}</h6>
            <h6 class="font-bold text-[#000]">{{ modalValue.info }}</h6>
            <strong class="!text-[#003466]">{{ modalValue.cost ? modalValue.cost.toLocaleString() : '' }} cум</strong>

            <div class="mt-[40px] gap-3 flex">
              <button @click="addToBasket">Добавить в корзину</button>
              <button class="blue__btn" @click="buyOnClick">Купить в 1 клик</button>
            </div>
            <button class="btn__dark !text-white !mt-0 md:!w-[90%]" @click="emit('update:proModal')">Продолжить покупки</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div :class="proModal ? 'modal-backdrop' : 'transition'" @click.stop="emit('update:proModal')"/>
</template>

