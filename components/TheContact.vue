<template>
    <div>
        <div class="footer-admin">
            <div class="social-media">
                <a href="https://line.me/R/ti/p/@662hnbde" class="icon-media" id="icon1" target="_blank"
                    rel=" noreferrer noopener"><img width="25px"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"> Line預約</a>
                <a href="https://wa.me/886907701070" class="icon-media" id="icon2" target="_blank"
                    rel=" noreferrer noopener"><i class="fa fa-whatsapp fa-lg"></i> WhatsApp預約</a>
                <a href="javascript:void(0)" class="icon-media" id="icon3" @click="toggleImage"><i
                        class="fa fa-wechat fa-lg"></i> WeChat預約</a>
            </div>
        </div>
        <div id="image-container" class="image-container" v-show="isImageVisible">
            <img id="toggle-image" src="https://wholealphard.com/wp-content/uploads/2023/06/wc.png" alt="WeChat加入QRcode">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isImageVisible: false, // 新增的data property
        }
    },
    methods: {
        toggleImage() { // 新增的方法
            this.isImageVisible = !this.isImageVisible;
        }
    },
}
</script>