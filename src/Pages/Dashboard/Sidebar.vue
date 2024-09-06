<script setup>
import {ref} from "vue";

const routes = ref([
  {
    id: 1,
    title: 'Отчет продаж',
    icon: 'fal fa-chart-line',
    router: ''
  },
  {
    id: 2,
    title: 'Клиенты',
    icon: 'fal fa-user-alt',
    router: ''
  },
  {
    id: 3,
    title: 'Канбан',
    icon: 'far fa-address-card',
    router: ''
  },
])

const isFirst = (item) => routes.value.indexOf(item) === 0;
</script>

<template>
  <div class="!w-[270px] fixed left-0 z-20 h-screen bg-[#003466]">
    <div class="px-8 my-6 cursor-pointer">
      <img src="../../assets/img.png" alt="logo">
    </div>

    <template v-for="items in routes" :key="items.id">
      <div
          class="menu-items p-2 rounded-md mx-4 mb-2 cursor-pointer select-none"
          :class="{'bg-white text-[#003466]': isFirst(items), 'text-white': !isFirst(items)}"
      >
        <div class="font-medium">
          <i :class="items.icon" class="ml-1"/>
          <span class="ml-2">{{ items.title }}</span>
        </div>
      </div>
    </template>
  </div>
</template>
