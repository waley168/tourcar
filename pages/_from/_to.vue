<template>
  <div> <!-- 根元素 -->
    <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a rel="noopener noreferrer" href="https://www.taiwantourcar.com/">首頁</a></li>
            <li class="breadcrumb-item active" aria-current="page">【台灣包車旅遊】宜蘭、台北、台中包車 推薦</li>
          </ol>
        </nav>
        <div class="section_title text-center">
          <h1>【台灣包車旅遊】宜蘭、台北、台中包車 推薦</h1>
        </div>
        <div class="row">
          <div class="col-md">
            <div class="box_content noHover">
              <div class="box_title">
                <h2>【<a rel="noopener noreferrer"
                    href="https://www.taiwantourcar.com/"><strong><em>台灣包車旅遊</em></strong></a>】宜蘭、台北、台中旅遊包車旅薦！</h2>
              </div>
              <div class="text_padding">
                給您最安全的駕駛服務，多元接送服務，提供包車旅遊、機場接送、環島旅遊、商務接送…等服務，帶給您最方便、快速的旅遊方式，專業司機熟稔台灣各區交通路況，安全準時將您送達指定的目的地，費用透明化，絕不隨意亂喊價，車輛均有定期檢查，讓您安心搭乘無負擔。<br />
                北部包車旅遊：
                <h3><a rel="noopener noreferrer" href="single-21.shtml"><strong><em>台北包車自由行</em></strong></a></h3>
                、<a rel="noopener noreferrer" href="single-16.shtml"><strong>宜蘭包車旅遊</strong></a><br />
                中部包車旅遊：
                <h3><a rel="noopener noreferrer"
                    href="https://www.taiwantourcar.com/charter-tour/index-0.shtml"><strong><em>台中包車</em></strong></a>
                </h3>
                、<a rel="noopener noreferrer" href="single-2.shtml"><strong>清境包車</strong></a>、<a rel="noopener noreferrer"
                  href="single-3.shtml"><strong>日月潭包車</strong></a><br />
                接機、送機首選：
                <h3><a rel="noopener noreferrer"
                    href="https://www.taiwantourcar.com/airport/"><strong>台北桃園機場接送</strong></a></h3>
                、<a rel="noopener noreferrer" href="single-15.shtml"><strong>長期學生接送</strong></a>、<a
                  rel="noopener noreferrer" href="single-13.shtml"><strong>商務包車</strong></a>
              </div>
            </div>
            <div class="buttons_container d-flex flex-wrap">
              <div class="button button_1"><a rel="noopener noreferrer"
                  href="https://www.taiwantourcar.com/travel/">車款價格</a></div>
              <div class="button button_1"><a rel="noopener noreferrer" href="#">包車服務</a></div>
              <div class="button button_1"><a rel="noopener noreferrer" href="#contact-us">立即預約</a></div>
            </div>
          </div>
          <div class="col-md">
            <div class="jumbotron">
              <h1>【中部】包車旅遊(台中/苗栗/彰化/南投/雲林/嘉義)</h1>
              <hr class="my-4">
              <label
                for="select">有別於其他包車旅遊平台，需要多重手續費及抽傭，本團隊由司機直接報價，繞過所有中間環節，為旅客提供最優惠的價格，價格保證市面上最划算，夢玩家亦承諾不會嵌入任何未告知的隱藏式收費。</label>
              <select id="urlid" name="urlid" class="form-control form-control-lg" onchange="goUrl();">
                <option value="1">【北部】包車旅遊(台北/新北市/桃園/新竹/宜蘭)</option>
                <option value="0" selected>【中部】包車旅遊(台中/苗栗/彰化/南投/雲林/嘉義)</option>
                <option value="2">【機場接送/點對點接送】</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    <h1>{{ fromLocation.name }} 到 {{ toLocation.name }}</h1>
    <!-- ... 更多內容 -->

    <div>
      <h2>更多從 {{ fromLocation.name }} 附近出發的路線</h2>
      <ul>
        <li v-for="route in relatedRoutes" :key="route.from + route.to">
          <a :href="route.path">{{ route.from }} → {{ route.to }}</a>
        </li>
      </ul>
    </div>

    <div>
      <h2>除了 {{ fromLocation.name }} 到 {{ toLocation.name }}，還有⋯</h2>
      <ul>
        <li v-for="route in recommendedRoutes" :key="route.from + route.to">
          <a :href="route.path">{{ route.from }} → {{ route.to }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// pages/route/_from/_to.vue
import locations from '@/locations.js';

export default {
  head() {
    const pageTitle = `${this.fromLocation.name} 到 ${this.toLocation.name} 專車接送`;

    return {
      title: pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `專業的專車接送服務，從 ${this.fromLocation.name} 到 ${this.toLocation.name}。安全、舒適、便捷。`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: pageTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `專業的專車接送服務，從 ${this.fromLocation.name} 到 ${this.toLocation.name}。安全、舒適、便捷。`
        },
        // 添加其他元数据（如 Twitter Cards）...
      ]
    };
  },
  async asyncData({ params, env }) {
    const fromLocation = locations.find((location) => location.name === params.from);
    const toLocation = locations.find((location) => location.name === params.to);

    const relatedRoutes = locations
      .filter((location) => location.region === fromLocation.region && location.id !== fromLocation.id)
      .slice(0, 10)
      .map((location) => {
        let randomDestination;
        do {
          randomDestination = locations[Math.floor(Math.random() * locations.length)];
        } while (location.id === randomDestination.id);
        return { from: location.name, to: randomDestination.name, path: encodeURI(env.basePath + location.name + '/' + randomDestination.name) };
      });

    const recommendedRoutes = Array.from({ length: 10 }, () => {
      let randomFrom, randomTo;
      do {
        randomFrom = locations[Math.floor(Math.random() * locations.length)];
        randomTo = locations[Math.floor(Math.random() * locations.length)];
      } while (randomFrom.id === randomTo.id);
      return { from: randomFrom.name, to: randomTo.name, path: encodeURI(env.basePath + randomFrom.name + '/' + randomTo.name) };
    });


    return { fromLocation, toLocation, relatedRoutes, recommendedRoutes };
  },
};

</script>