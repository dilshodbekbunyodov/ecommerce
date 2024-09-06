<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "./auth.css";

const emit = defineEmits(['update:auth', 'update:login']);
defineProps({
  auth: {
    type: Boolean,
    default: () => false
  }
});

const register = ref({
  username: null,
  password: null,
  confirmPassword: null,
})

const usernameError = ref('');
const passwordError = ref('');
const confirmPasswordError = ref('');

const validateUsername = () => {
  const usernamePattern = /^(?=.*[A-Z])[A-Za-z\d]{1,}$/;
  usernameError.value = register.value.username ? (usernamePattern.test(register.value.username) ? '' : 'Ваше имя должно содержать 1 символ и 1 заглавную букву.') : 'Введите свое имя';
};

const validatePassword = () => {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  passwordError.value = register.value.password ? (passwordPattern.test(register.value.password) ? '' : 'Ваш пароль должен содержать 1 заглавную букву, 1 строчную букву и 1 специальный символ и иметь длину более 8 символов.') : 'Введите свой пароль\n';
};

const validateConfirmPassword = () => {
  confirmPasswordError.value = register.value.confirmPassword ? (register.value.password === register.value.confirmPassword ? '' : 'Пароль не совпадает') : 'Подтвердите пароль';
};

const validateForm = () => {
  validateUsername();
  validatePassword();
  validateConfirmPassword();

  if (!usernameError.value && !passwordError.value && !confirmPasswordError.value) {
    localStorage.setItem('userData', JSON.stringify(register.value))
    emit('update:auth')
    emit('update:login', true)
    toast.success('Успешно создано');
  }
};
</script>

<template>
   <div :class="{'Modal__Style z-20': true, 'modal': auth, 'hide': !auth}">
     <div class="modal-content">
       <div class="far fa-times mt-1 mr-1" @click="emit('update:auth')"></div>

       <div class="modal-body">
         <div class="!mb-[15px]">
           <input type="text" class="!mb-0" placeholder="Имя пользователя" v-model="register.username" @input="validateUsername">
           <small v-if="usernameError" class="text-[#EA5455]">{{ usernameError }}</small>
         </div>

         <div class="!mb-[15px]">
           <input type="password" class="!mb-0" placeholder="Ваш пароль" v-model="register.password" @input="validatePassword">
           <small v-if="passwordError" class="text-[#EA5455]">{{ passwordError }}</small>
         </div>

         <div class="!mb-[15px]">
           <input type="password" placeholder="Подтвердите пароль" class="!mb-0" v-model="register.confirmPassword" @input="validateConfirmPassword">
           <small v-if="confirmPasswordError" class="text-[#EA5455]">{{ confirmPasswordError }}</small>
         </div>

         <button @click="validateForm">РЕГИСТРАЦИЯ</button>
       </div>
     </div>
   </div>

   <div :class="auth ? 'modal-backdrop' : 'transition'" @click.stop="emit('update:auth')"/>
</template>
