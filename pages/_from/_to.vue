<template>
  <div>
    <h1>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送|機場接送|跨縣市包車服務|旅遊接駁</h1>
    <div class="content">
      <div class="section portion45">

        <h2>【<a rel="noopener noreferrer" href="https://wanma.tw/">{{ fromLocation.name }}{{ toLocation.name ? '、'
          + toLocation.name : '' }}<strong><em>專車接送</em></strong></a>】PTT、Dcard推薦！</h2>
        <div class="text_box">
          <p>
            選擇萬馬接送體驗非凡的接送服務，萬馬接送為您提供一系列乾淨新穎的車款，包括五人座轎車、休旅車以及九人座休旅車，滿足各種需求。無論是機場接送、商務行程、家庭出遊、一日或多日遊，乃至環島旅遊和隱私保障的醫美旅程，甚至企業活動用車，我們都能為您提供最適合的選擇。
          </p>
          <p>我們的多元化接送方案，能夠確保您的每次出行的舒適與效率。司機團隊對{{ fromLocation.name }}{{ toLocation.name ? '、' + toLocation.name : ''
          }}交通狀況了如指掌，保證您的安全與準時抵達。</p>
          <p>我們嚴格遵循政府規定，定期進行車輛檢查，並為每輛車投保高額乘客保險，確保您的行程安全無慮。在萬馬接送，我們承諾費用透明，無隱藏額外收費，讓您的每一次乘坐都輕鬆愉快，無後顧之憂。</p>
          機場接送：
          <h3><a rel="noopener noreferrer" href="https://wanma.tw/express/"><strong><em>{{ fromLocation.name
          }}接機服務</em></strong></a>
          </h3>
          、<a rel="noopener noreferrer" href="https://wanma.tw/express/"><strong>送機服務</strong></a><br />
          各地接駁：
          <h3><a rel="noopener noreferrer" href="https://wanma.tw/express/"><strong><em>{{ toLocation.name
          }}全台灣各地接駁</em></strong></a>
          </h3>
          、<a rel="noopener noreferrer"
            href="https://wanma.tw/express/"><strong>跨縣市包車服務</strong></a>、<strong>墾丁-高雄專線</strong><br />
          接機、送機首選：
          <h3><a rel="noopener noreferrer" href="https://wanma.tw/express/"><strong>小港機場接送</strong></a>
          </h3>
          、<a rel="noopener noreferrer" href="https://wanma.tw/express/"><strong>企業長期接送</strong></a>、<a
            rel="noopener noreferrer" href="https://wanma.tw/express/"><strong>商務包車</strong></a>
        </div>
        <hr>
        <div class="buttons_container">
          <a href="https://wanma.tw/express/">
            <div class="refined-button">車款價格</div>
          </a>
          <a href="https://wanma.tw/express/">
            <div class="refined-button">接送/包車服務</div>
          </a>
          <a href="https://line.me/R/ti/p/@165hwivs" target="_blank" rel="noopener noreferrer">
            <div class="refined-button">立即預約</div>
          </a>
        </div>
      </div>
      <div class="section portion45">
        <div class="jumbotron">
          <h2>機場接送|跨縣市包車服務|旅遊接駁</h2>
          <hr>
          萬馬接送帶您探索城市的奇蹟，享受旅途的樂趣。我們的高檔新穎車隊，包括舒適的五人座轎車、寬敞的休旅車，以及豪華的九人座休旅車，每一輛都代表著我們對品質、舒適度以及創新技術的追求。無論是短途或長途旅行，我們的車隊都能提供最佳的駕駛體驗。
          <h3>客製化行程訂製</h3>
          我們明白標準化行程並不適合每位客戶。您可以在萬馬接送預訂系統量身定制最滿意的路線規劃。
          <h3>透明合理的價格</h3>
          相較於其他服務，「萬馬接送」提供直接報價，避免中間環節，為您帶來市場上最具競爭力的價格。我們承諾價格透明，無隱藏費用，讓您的旅程無後顧之憂。
          <h3>隨時可達的客戶服務</h3>
          若在旅途中遇到任何問題，您可以通過我們的官方通訊渠道隨時聯繫我們。我們承諾快速響應，確保您的旅行愉快而順暢。
          <h3>專業的司機團隊</h3>
          我們的司機團隊不僅有豐富的駕駛經驗，還經過專業訓練，以確保您的行程安全舒適。
          <h3>創新與進步的承諾</h3>
          萬馬接送始終致力於創新和改善服務。無論遇到任何挑戰，我們都準備好迅速解決，確保您的旅程充滿愉快的回憶。
        </div>
      </div>
    </div>
    <div class="content">
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
  </div>
</template>

<script>
// pages/route/_from/_to.vue
import locations from '@/locations.js';
function createSchema(fromLocation, toLocation) {
  return {
    "@context": "http://schema.org/", "@type": "Product", "name": `${fromLocation.name} - ${toLocation.name} 接送|機場接送|跨縣市包車服務|旅遊接駁`, "image": "https://wanma.tw/wp-content/uploads/2024/01/cover_wanma.jpg", "description": `尋找便捷、舒適的專車接送體驗？${fromLocation.name} 到 ${toLocation.name} 僅需$起，保證無菸車。萬馬接送為您提供客製化行程、即時航班追蹤的機場接送，並滿足特殊需求如嬰兒座椅、多語言司機等。讓您的寶貴時間不再因為不熟悉${toLocation.name}而找不到路、或是在大眾運輸上浪費時間，立刻輕鬆體驗舒適便捷的萬馬接送。`, "brand": { "@type": "Brand", "name": "萬馬接送", "logo": "https://wanma.tw/wp-content/uploads/2023/08/wanma.png" }, "offers": { "@type": "Offer", "priceCurrency": "TWD", "price": "900", "priceValidUntil": "2028-06-16", "availability": "https://schema.org/InStock", "url": "https://wanma.tw/route/" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "1583", "reviewCount": "643", "worstRating": "1", "bestRating": "5" }, "review": [{ "@type": "Review", "name": "車子超乾淨又新司機配合度超高駕駛技術超安全大推", "author": { "@type": "Person", "name": "Nicole Shih" }, "datePublished": "2022-07-20", "reviewBody": "司機親切人又好玩得很開心～", "reviewRating": { "@type": "Rating", "ratingValue": "5", "worstRating": "1", "bestRating": "5" } }, { "@type": "Review", "name": "新車氣味很好...", "author": { "@type": "Person", "name": "阮嫈娜" }, "datePublished": "2021-12-25", "reviewBody": "司機服務很好，車況也很好下次有機會還會再請你們服務喔", "reviewRating": { "@type": "Rating", "ratingValue": "5", "worstRating": "1", "bestRating": "5" } }, { "@type": "Review", "name": "非常自由的客製化行程...", "author": { "@type": "Person", "name": "徐繹舜" }, "datePublished": "2021-09-23", "reviewBody": "服務是很好，車子乾淨，時間控制的剛好，特別是客服時時關心我們客戶，謝謝你們，值得再使用", "reviewRating": { "@type": "Rating", "ratingValue": "5", "worstRating": "1", "bestRating": "5" } }]
  };
}
export default {
  head() {
    const pageTitle = `${this.fromLocation.name} - ${this.toLocation.name} 接送|機場接送|跨縣市包車服務|旅遊接駁`;

    return {
      title: pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `尋找便捷、舒適的專車接送體驗？${this.fromLocation.name} 到 ${this.toLocation.name} 僅需$起，保證無菸車。萬馬接送為您提供客製化行程、即時航班追蹤的機場接送，並滿足特殊需求如嬰兒座椅、多語言司機等。讓您的寶貴時間不再因為不熟悉${this.toLocation.name}而找不到路、或是在大眾運輸上浪費時間，立刻輕鬆體驗舒適便捷的萬馬接送。`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: pageTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `尋找便捷、舒適的專車接送體驗？${this.fromLocation.name} 到 ${this.toLocation.name} 僅需$起，保證無菸車。萬馬接送為您提供客製化行程、即時航班追蹤的機場接送，並滿足特殊需求如嬰兒座椅、多語言司機等。讓您的寶貴時間不再因為不熟悉${this.toLocation.name}而找不到路、或是在大眾運輸上浪費時間，立刻輕鬆體驗舒適便捷的萬馬接送。`
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: createSchema(this.fromLocation, this.toLocation)
        }
      ]
    };
  },
  async asyncData({ params, env, store }) {
    const fromLocation = locations.find((location) => location.name === params.from);
    const toLocation = locations.find((location) => location.name === params.to);

    store.commit('setFromLocation', fromLocation);
    store.commit('setToLocation', toLocation);

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