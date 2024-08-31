<script setup>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
import {useRoute} from "vue-router";

const route = useRoute()
const checkLayout = () => {
  const layout = route.matched?.[0]?.meta.layout
  return layout === 'MainLayout';
}
</script>

<template>
  <div>
    <Navbar v-if="checkLayout()"/>

    <router-view/>

    <Footer v-if="checkLayout()"/>
  </div>
</template>

