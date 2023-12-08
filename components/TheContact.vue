<template>
    <div class="navbarbottom" :class="{ responsive: isResponsive }" id="mynavbarbottom">
      <a href="https://page.line.me/?accountId=yyy888" target="_blank" class="active">
        <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"> Line詢問報價
      </a>
      <a href="tel:+886968738810">
        <i class="fa fa-phone fa-lg"></i> 電話 0968738810
      </a>
      <a href="#">
        <i class="fa fa-wechat fa-lg"></i> a0968738810
      </a>
      <a href="https://wa.me/886975552776" target="_blank">
        <i class="fa fa-whatsapp fa-lg"></i> Whatsapp +886975552776
      </a>
      <!-- <a href="mailto:bigplayer68810@gmail.com"><i class="fa fa-envelope fa-lg"></i> email來信</a> -->
      <a href="javascript:void(0);" class="icon" @click="toggleResponsive">&#9776; 其他聯絡方式</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isResponsive: false
      };
    },
    methods: {
      toggleResponsive() {
        this.isResponsive = !this.isResponsive;
      },
    }
  }
  </script>