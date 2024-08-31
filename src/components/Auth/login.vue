<script setup>
import {ref} from "vue";
import {toast} from "vue3-toastify";
import "./auth.css";

const emit = defineEmits(['update:auth', 'openRegisterModal'])
defineProps({
  auth: {
    type: Boolean,
    default: () => false
  }
})

const login = ref({
  username: null,
  password: null
})

const usernameError = ref('');
const passwordError = ref('');

const loginUser = () => {
  if (login.value.username && login.value.password) {
    const data = localStorage.getItem('userData')

    if (!data) {
      toast.error('Такого пользователя не существует');
      return;
    }

    const { username, password } = JSON.parse(data);
    const { username: inputUsername, password: inputPassword } = login.value;

    if (inputUsername === username && inputPassword === password) {
      localStorage.setItem('UserLog', JSON.stringify(login.value))
      emit('update:auth')
      toast.success('Успешно создано');
    } else {
      toast.error('Такого пользователя не существует');
    }
  } else {
    usernameError.value = 'Это поля обязательно для заполнения'
    passwordError.value = 'Это поля обязательно для заполнения'
  }
}

const hideModal = () => {
  emit('update:auth')
  usernameError.value = ''
  passwordError.value = ''
}
</script>

<template>
  <div :class="{'Modal__Style z-20': true, 'modal': auth, 'hide': !auth}">
    <div class="modal-content">
      <div class="far fa-times mt-1 mr-1" @click="hideModal"></div>

      <div class="modal-body">
        <div class="!mb-[15px]">
          <input type="text" class="!mb-0" placeholder="Имя пользователя" v-model="login.username">
          <small v-if="usernameError" class="text-[#EA5455]">{{ usernameError }}</small>
        </div>

        <div class="!mb-[15px]">
          <input type="password" class="!mb-0" placeholder="Ваш пароль" v-model="login.password">
          <small v-if="passwordError" class="text-[#EA5455]">{{ passwordError }}</small>
        </div>


        <label>Забыли пароль?</label>
        <button class="mb-4" @click="loginUser">АВТОРИЗАЦИЯ</button>
        <label>Нет аккаунта?</label>
        <button @click="emit('openRegisterModal')">РЕГИСТРАЦИЯ</button>
      </div>
    </div>
  </div>

  <div :class="auth ? 'modal-backdrop' : 'transition'" @click.stop="hideModal"/>
</template>
