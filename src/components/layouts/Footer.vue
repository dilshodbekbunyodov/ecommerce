<script setup>

</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ul class="item__one">
          <a href="" class="text-decoration-none">
            <img src="../../assets/img_2.png" alt=""/>
          </a>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </ul>

        <ul class="item__two">
          <h3>Связаться с нами</h3>
          <li><i class="fas fa-envelope"/> dilshodbunyodov2020@gmail.com</li>
          <li><i class="fas fa-phone-alt"/> +99899 089 39 54</li>
          <li>
            <i class="fas fa-map-marker-alt"></i> Tashkent city, Almazar district, Sebzor Ts 17/18 dacha, 194 house
          </li>
        </ul>

        <div class="item__three">
          <h3>Социальные сети</h3>
          <ul class="flex space-x-4">
            <li><i class="fab fa-instagram"/></li>
            <li><i class="fab fa-telegram-plane"/></li>
            <li><i class="fab fa-facebook-f"/></li>
          </ul>
        </div>

        <div class="item__four">
          <h3>Cпособы оплаты</h3>
          <ul class="flex space-x-4">
            <li><img src="../../assets/carts/payme.png" alt="payme"/></li>
            <li><img src="../../assets/carts/uzcart.png" alt="uzcart"/></li>
            <li><img src="../../assets/carts/clikck.png" alt="clikck"/></li>
            <li><img src="../../assets/carts/humo.png" alt="humo"/></li>
          </ul>
        </div>
      </div>
    </div>

    <hr/>

    <div class='sub__text'>
      <h6>© “Uzecom” Created by Dilshod Bunyodov {{new Date().getFullYear()}}</h6>
    </div>
  </div>
</template>

<style>
@import "./layout.css";
</style>
