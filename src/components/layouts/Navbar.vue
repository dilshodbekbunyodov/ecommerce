<script setup>
import {ref} from "vue";
import LoginModal from '../Auth/login.vue'
import RegisterModal from '../Auth/register.vue'
import router from "../../router/index.js";

const search = ref(false)
const login = ref(false)
const register = ref(false)

const toggleSearch = () => search.value = false

const openRegisterModal = () => {
  register.value = true
  login.value = false
}

const getUserData = () => {
  const parseData = localStorage.getItem('UserLog')

  return JSON.parse(parseData)
}

const homePage = () => router.push('/')
</script>

<template>
  <div>
    <div class="header">
        <ul class='navbar_nav'>
          <li class='hover relative'>
            <a class="cursor-pointer">
              ДЛЯ МУЖЧИН <i class="far fa-chevron-down text-[12px]"></i>
            </a>
            <ul class="absolute bg-[#fff] rounded mt-1 overflow-hidden opacity-0 w-[140px] z-[99999]">
              <li
                  class="p-2 px-4 hover:bg-[#5470C6] hover:cursor-pointer transition hover:text-white"
                  @click="router.push('/dashboard')"
              >
                Дашборд
              </li>
              <li class="p-2 px-4 hover:bg-[#5470C6] hover:cursor-pointer transition hover:text-white">Для женщин</li>
              <li class="p-2 px-4 hover:bg-[#5470C6] hover:cursor-pointer transition hover:text-white">Для детей</li>
            </ul>
          </li>
          <li class='hover cursor-pointer text-white' @click="homePage">БРЕНДЫ</li>
          <li class='hover cursor-pointer text-white' @click="router.push('/our-magazine')">НАШИ МАГАЗИНЫ</li>
        </ul>

        <div class='logo cursor-pointer' @click="homePage">
          <img src="../../assets/img.png" alt="logo"/>
        </div>

        <div class='helps_icons'>
          <ul>
            <li @click="search = true">
              <i class="far fa-search"/>
            </li>

            <li class='account_li' @click="router.push('/basket')">
              <i class="fal fa-shopping-cart"/>
            </li>

            <li class="text-white !border-0 capitalize !ml-[40px] mr-5"
                v-if="getUserData() && getUserData().username"
            >
              <div class="flex items-center">
                <i class="fal fa-user-alt mr-2"/>
                {{ getUserData().username }}
              </div>
            </li>

            <li class='account_li ' @click="login = true" v-else>
              <i class="fal fa-user-alt"/>
            </li>

            <select class="select__Style p-2 rounded border border-white">
              <option value="">ENGLISH</option>
              <option value="">RUSSIAN</option>
            </select>
          </ul>
        </div>
    </div>

    <div class='search_pop'>
      <ul :class='search ? "toggleSearch" : " "'>
        <li @click="toggleSearch">
          <i class="fas fa-times absolute !right-[30px] !top-[30px]"/>
        </li>

        <input type="search" placeholder='Поиск...'/>
      </ul>
    </div>

    <LoginModal
        v-model:auth="login"
        @openRegisterModal="openRegisterModal"
    />

    <RegisterModal
        v-model:auth="register"
        v-model:login="login"
    />
  </div>
</template>

<style>
@import "./layout.css";
</style>
