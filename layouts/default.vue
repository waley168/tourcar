<template>
    <div>
        <TheHeader />
        <div class="entry-content">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a rel="noopener noreferrer" href="https://wanma.tw/">首頁</a></li>
                    <li aria-current="page" class="breadcrumb-item active">{{ fromLocation.name }}{{ toLocation.name ? ' - '
                        + toLocation.name : '' }}接送|機場接送|跨縣市包車服務|旅遊接駁</li>
                </ol>
            </nav>
            <div class="hero-img"
                style="background-image: url('https://wanma.tw/wp-content/uploads/2024/01/cover_wanma.jpg');">
            </div>
            <nuxt></nuxt>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送服務</h2>
            <div class="content">
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wanma.tw/wp-content/uploads/2023/10/marco-lopez-qK6HAkB91Yc-unsplash.jpg');">
                    </div>
                    <h3>無縫接駁：您的個性化接送方案</h3>
                    <p>在「萬馬接送」，我們專注於提供量身打造的接送服務，以滿足您不同的出行需求。無論是五人座轎車、休旅車還是九人座休旅車，我們都能提供。從城市間的跨縣市接送到機場的專車服務，我們的目標是讓您的旅程更加順暢舒適。透過我們簡單易用的線上預訂系統，您可以迅速預約所需車型，無需通過客服，節省您的寶貴時間。選擇「萬馬接送」，享受個性化、靈活的交通解決方案。
                    </p>
                    <ol>
                        <li><strong>車型多樣化：選擇適合您的車輛</strong>：「萬馬接送」提供多種車型選擇，滿足不同客戶需求。從豪華轎車到寬敞的休旅車，每一種車型都經過精心挑選，確保乘坐的舒適與安全。
                        </li>
                        <li><strong>跨城市接送：我們的覆蓋範圍</strong>：我們的接送服務橫跨台灣各主要城市，無論您身在哪裡，「萬馬接送」都能為您提供便捷的跨城市接送服務。
                        </li>
                        <li><strong>即時預訂：線上下單的便捷性</strong>：通過我們的線上平台，您可以輕鬆預訂接送服務。我們的系統操作簡單，讓您能夠快速且方便地安排您的行程。
                        </li>
                        <li><strong>靈活排程：符合您時間表的服務</strong>：我們提供的接送服務可以完全根據您的時間表和需求來安排。無論是早晨的商務行程還是晚間的聚會，我們都能為您提供適時的接送。
                        </li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wanma.tw/wp-content/uploads/2023/10/L1000064.jpg');">
                    </div>
                    <h3>全程舒適，安全可靠的旅程</h3>
                    <p>我們在「萬馬接送」深知，舒適與安全是每次旅程中最重要的部分。我們的車隊經過精心挑選和定期維護，確保在您的每次旅行中提供最高標準的舒適體驗。我們的專業司機團隊不僅經過嚴格的篩選和培訓，而且對台灣的道路環境有深入了解，保證您的行程安全可靠。透過先進的技術和嚴格的車輛檢查，我們承諾為您提供一次又一次無憂無慮的旅行體驗。
                    </p>
                    <ol>
                        <li><strong>專業司機：您的安全守護者</strong>：我們的司機團隊由經驗豐富的專業人士組成，他們不僅熟悉路況，而且在駕駛技巧和客戶服務方面都接受過嚴格的培訓。
                        </li>
                        <li><strong>車輛維護：確保行車安全與舒適</strong>：我們重視您的安全與舒適，因此我們的車輛都定期接受嚴格的檢查和維護，確保每一次行程都能達到最高的安全標準。
                        </li>
                        <li><strong>客戶評價：我們服務的見證</strong>：客戶的正面評價是我們服務質量的最佳證明。我們感謝那些分享他們經驗的乘客，並將這些反饋視為不斷進步的動力。
                        </li>
                        <li><strong>安全政策：我們的承諾</strong>：安全是「萬馬接送」的首要承諾。從司機培訓到車輛維護，我們都採取一切必要措施，以確保每次行程都是安全可靠的。
                        </li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wanma.tw/wp-content/uploads/2023/10/000011.jpg');">
                    </div>
                    <h3>探索台灣：獨特旅遊接駁服務</h3>
                    <p>「萬馬接送」的旅遊接駁服務旨在為台灣的遊客提供無與倫比的旅行體驗。我們的服務連接台灣各大旅遊景點，從迷人的日月潭到活力四射的墾丁，我們的接送服務讓您的旅程更加順利和愉快。我們提供的不僅僅是從一地到另一地的轉移，更是一種深入探索台灣之美的方式。無論是家庭旅遊、團體出遊還是個人冒險，「萬馬接送」都能提供靈活的行程安排和專業的旅遊建議，讓您的台灣之旅成為難忘的回憶。
                    </p>
                    <ol>
                        <li><strong>熱門旅遊路線：探索台灣之美</strong>：我們提供的旅遊接駁服務連接台灣各大景點，從知名的觀光勝地到隱秘的小徑，讓您深入體驗台灣的自然美景和文化魅力。
                        </li>
                        <li><strong>定制旅遊行程：您的個人導遊</strong>：「萬馬接送」為您提供個性化的旅遊行程設計服務。我們將根據您的興趣和需求安排行程，確保您的台灣之旅獨一無二。
                        </li>
                        <li><strong>文化體驗：深入當地生活</strong>：我們的服務不僅是一次旅程，更是一次文化體驗。我們帶您深入當地社區，體驗台灣的傳統和現代生活方式。
                        </li>
                        <li><strong>科技服務：超越傳統接送</strong>：「萬馬接送」的科技服務超越傳統接送，提供快速方便的預訂系統，快速查詢司機及車號服務，讓您的每次旅行都成為難忘的回憶。
                        </li>
                    </ol>
                </div>
            </div>

            <div class="content">
                <div class="section portion45">
                    <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送價目表</h2>
                    <p class="align-right"><a href="https://wanma.tw/express/">價格為平日五人座轎車市區接送參考價格，起點終點可互換，詳細報價請以點系統報價為準</a></p>
                    <table>
                        <thead>
                            <tr>
                                <th>出發地區</th>
                                <th>前往地區</th>
                                <th>價格</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>台北</td>
                                <td>台北</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>新北</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>桃園</td>
                                <td>1300</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>新竹</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>苗栗</td>
                                <td>2400</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>台中</td>
                                <td>2600</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>彰化</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>雲林</td>
                                <td>3800</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>嘉義</td>
                                <td>4400</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>台南</td>
                                <td>5100</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>高雄</td>
                                <td>5600</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>屏東</td>
                                <td>6100</td>
                            </tr>
                            <tr>
                                <td>台北</td>
                                <td>墾丁</td>
                                <td>7600</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>新北</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>桃園</td>
                                <td>1300</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>新竹</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>苗栗</td>
                                <td>2400</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>台中</td>
                                <td>2600</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>彰化</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>雲林</td>
                                <td>3800</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>嘉義</td>
                                <td>4400</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>台南</td>
                                <td>5100</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>高雄</td>
                                <td>5600</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>屏東</td>
                                <td>6100</td>
                            </tr>
                            <tr>
                                <td>新北</td>
                                <td>墾丁</td>
                                <td>7600</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>桃園</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>新竹</td>
                                <td>1449</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>苗栗</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>台中</td>
                                <td>2300</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>彰化</td>
                                <td>2600</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>雲林</td>
                                <td>3400</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>嘉義</td>
                                <td>3900</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>台南</td>
                                <td>4700</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>高雄</td>
                                <td>5200</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>屏東</td>
                                <td>5700</td>
                            </tr>
                            <tr>
                                <td>桃園</td>
                                <td>墾丁</td>
                                <td>7200</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>新竹</td>
                                <td>1400</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>苗栗</td>
                                <td>1800</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>台中</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>彰化</td>
                                <td>2300</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>雲林</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>嘉義</td>
                                <td>3700</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>台南</td>
                                <td>4200</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>高雄</td>
                                <td>4700</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>屏東</td>
                                <td>5200</td>
                            </tr>
                            <tr>
                                <td>新竹</td>
                                <td>墾丁</td>
                                <td>6600</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>苗栗</td>
                                <td>1900</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>台中</td>
                                <td>2200</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>彰化</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>雲林</td>
                                <td>2900</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>嘉義</td>
                                <td>3500</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>台南</td>
                                <td>3600</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>高雄</td>
                                <td>4300</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>屏東</td>
                                <td>4800</td>
                            </tr>
                            <tr>
                                <td>苗栗</td>
                                <td>墾丁</td>
                                <td>6000</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>台中</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>彰化</td>
                                <td>1900</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>雲林</td>
                                <td>2400</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>嘉義</td>
                                <td>2800</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>台南</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>高雄</td>
                                <td>3600</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>屏東</td>
                                <td>4200</td>
                            </tr>
                            <tr>
                                <td>台中</td>
                                <td>墾丁</td>
                                <td>5400</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>彰化</td>
                                <td>1800</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>雲林</td>
                                <td>2200</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>嘉義</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>台南</td>
                                <td>2600</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>高雄</td>
                                <td>3300</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>屏東</td>
                                <td>4000</td>
                            </tr>
                            <tr>
                                <td>彰化</td>
                                <td>墾丁</td>
                                <td>5200</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>雲林</td>
                                <td>1900</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>嘉義</td>
                                <td>2100</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>台南</td>
                                <td>2200</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>高雄</td>
                                <td>2900</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>屏東</td>
                                <td>3400</td>
                            </tr>
                            <tr>
                                <td>雲林</td>
                                <td>墾丁</td>
                                <td>4900</td>
                            </tr>
                            <tr>
                                <td>嘉義</td>
                                <td>嘉義</td>
                                <td>1800</td>
                            </tr>
                            <tr>
                                <td>嘉義</td>
                                <td>台南</td>
                                <td>1600</td>
                            </tr>
                            <tr>
                                <td>嘉義</td>
                                <td>高雄</td>
                                <td>2300</td>
                            </tr>
                            <tr>
                                <td>嘉義</td>
                                <td>屏東</td>
                                <td>2900</td>
                            </tr>
                            <tr>
                                <td>嘉義</td>
                                <td>墾丁</td>
                                <td>4400</td>
                            </tr>
                            <tr>
                                <td>台南</td>
                                <td>台南</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>台南</td>
                                <td>高雄</td>
                                <td>1400</td>
                            </tr>
                            <tr>
                                <td>台南</td>
                                <td>屏東</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>台南</td>
                                <td>墾丁</td>
                                <td>3300</td>
                            </tr>
                            <tr>
                                <td>屏東</td>
                                <td>屏東</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>屏東</td>
                                <td>墾丁</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>高雄</td>
                                <td>高雄</td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>高雄</td>
                                <td>屏東</td>
                                <td>900</td>
                            </tr>
                            <tr>
                                <td>高雄</td>
                                <td>墾丁</td>
                                <td>2200</td>
                            </tr>
                            <tr>
                                <td>墾丁</td>
                                <td>墾丁</td>
                                <td>2200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="section portion45">
                    <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送價格整理</h2>
                    <p class="align-right"><a href="https://wanma.tw/express/">價格為平日五人座轎車市區接送參考價格，起點終點可互換，詳細報價請以點系統報價為準</a></p>
                    <h3>台北地區出發接送價格整理</h3>
                    <ul>
                        <li>台北接送台北，單程交通900元起</li>
                        <li>台北接送新北，單程交通900元起</li>
                        <li>台北接送桃園，單程交通1300元起</li>
                        <li>台北接送新竹，單程交通1700元起</li>
                        <li>台北接送苗栗，單程交通2400元起</li>
                        <li>台北接送台中，單程交通2600元起</li>
                        <li>台北接送彰化，單程交通3000元起</li>
                        <li>台北接送雲林，單程交通3800元起</li>
                        <li>台北接送嘉義，單程交通4400元起</li>
                        <li>台北接送台南，單程交通5100元起</li>
                        <li>台北接送高雄，單程交通5600元起</li>
                        <li>台北接送屏東，單程交通6100元起</li>
                        <li>台北接送墾丁，單程交通7600元起</li>
                    </ul><h3>新北地區出發接送價格整理</h3><ul>
                        <li>新北接送新北，單程交通900元起</li>
                        <li>新北接送桃園，單程交通1300元起</li>
                        <li>新北接送新竹，單程交通1700元起</li>
                        <li>新北接送苗栗，單程交通2400元起</li>
                        <li>新北接送台中，單程交通2600元起</li>
                        <li>新北接送彰化，單程交通3000元起</li>
                        <li>新北接送雲林，單程交通3800元起</li>
                        <li>新北接送嘉義，單程交通4400元起</li>
                        <li>新北接送台南，單程交通5100元起</li>
                        <li>新北接送高雄，單程交通5600元起</li>
                        <li>新北接送屏東，單程交通6100元起</li>
                        <li>新北接送墾丁，單程交通7600元起</li>
                    </ul><h3>桃園地區出發接送價格整理</h3><ul>
                        <li>桃園接送桃園，單程交通900元起</li>
                        <li>桃園接送新竹，單程交通1449元起</li>
                        <li>桃園接送苗栗，單程交通2000元起</li>
                        <li>桃園接送台中，單程交通2300元起</li>
                        <li>桃園接送彰化，單程交通2600元起</li>
                        <li>桃園接送雲林，單程交通3400元起</li>
                        <li>桃園接送嘉義，單程交通3900元起</li>
                        <li>桃園接送台南，單程交通4700元起</li>
                        <li>桃園接送高雄，單程交通5200元起</li>
                        <li>桃園接送屏東，單程交通5700元起</li>
                        <li>桃園接送墾丁，單程交通7200元起</li>
                    </ul><h3>新竹地區出發接送價格整理</h3><ul>
                        <li>新竹接送新竹，單程交通1400元起</li>
                        <li>新竹接送苗栗，單程交通1800元起</li>
                        <li>新竹接送台中，單程交通2000元起</li>
                        <li>新竹接送彰化，單程交通2300元起</li>
                        <li>新竹接送雲林，單程交通3000元起</li>
                        <li>新竹接送嘉義，單程交通3700元起</li>
                        <li>新竹接送台南，單程交通4200元起</li>
                        <li>新竹接送高雄，單程交通4700元起</li>
                        <li>新竹接送屏東，單程交通5200元起</li>
                        <li>新竹接送墾丁，單程交通6600元起</li>
                    </ul><h3>苗栗地區出發接送價格整理</h3><ul>
                        <li>苗栗接送苗栗，單程交通1900元起</li>
                        <li>苗栗接送台中，單程交通2200元起</li>
                        <li>苗栗接送彰化，單程交通2500元起</li>
                        <li>苗栗接送雲林，單程交通2900元起</li>
                        <li>苗栗接送嘉義，單程交通3500元起</li>
                        <li>苗栗接送台南，單程交通3600元起</li>
                        <li>苗栗接送高雄，單程交通4300元起</li>
                        <li>苗栗接送屏東，單程交通4800元起</li>
                        <li>苗栗接送墾丁，單程交通6000元起</li>
                    </ul><h3>台中地區出發接送價格整理</h3><ul>
                        <li>台中接送台中，單程交通1500元起</li>
                        <li>台中接送彰化，單程交通1900元起</li>
                        <li>台中接送雲林，單程交通2400元起</li>
                        <li>台中接送嘉義，單程交通2800元起</li>
                        <li>台中接送台南，單程交通3000元起</li>
                        <li>台中接送高雄，單程交通3600元起</li>
                        <li>台中接送屏東，單程交通4200元起</li>
                        <li>台中接送墾丁，單程交通5400元起</li>
                    </ul><h3>彰化地區出發接送價格整理</h3><ul>
                        <li>彰化接送彰化，單程交通1800元起</li>
                        <li>彰化接送雲林，單程交通2200元起</li>
                        <li>彰化接送嘉義，單程交通2500元起</li>
                        <li>彰化接送台南，單程交通2600元起</li>
                        <li>彰化接送高雄，單程交通3300元起</li>
                        <li>彰化接送屏東，單程交通4000元起</li>
                        <li>彰化接送墾丁，單程交通5200元起</li>
                    </ul><h3>雲林地區出發接送價格整理</h3><ul>
                        <li>雲林接送雲林，單程交通1900元起</li>
                        <li>雲林接送嘉義，單程交通2100元起</li>
                        <li>雲林接送台南，單程交通2200元起</li>
                        <li>雲林接送高雄，單程交通2900元起</li>
                        <li>雲林接送屏東，單程交通3400元起</li>
                        <li>雲林接送墾丁，單程交通4900元起</li>
                    </ul><h3>嘉義地區出發接送價格整理</h3><ul>
                        <li>嘉義接送嘉義，單程交通1800元起</li>
                        <li>嘉義接送台南，單程交通1600元起</li>
                        <li>嘉義接送高雄，單程交通2300元起</li>
                        <li>嘉義接送屏東，單程交通2900元起</li>
                        <li>嘉義接送墾丁，單程交通4400元起</li>
                    </ul><h3>台南地區出發接送價格整理</h3><ul>
                        <li>台南接送台南，單程交通1000元起</li>
                        <li>台南接送高雄，單程交通1400元起</li>
                        <li>台南接送屏東，單程交通1700元起</li>
                        <li>台南接送墾丁，單程交通3300元起</li>
                    </ul><h3>屏東地區出發接送價格整理</h3><ul>
                        <li>屏東接送屏東，單程交通900元起</li>
                        <li>屏東接送墾丁，單程交通2500元起</li>
                    </ul><h3>高雄地區出發接送價格整理</h3><ul>
                        <li>高雄接送高雄，單程交通600元起</li>
                        <li>高雄接送屏東，單程交通900元起</li>
                        <li>高雄接送墾丁，單程交通2200元起</li>
                    </ul><h3>墾丁地區出發接送價格整理</h3><ul>
                        <li>墾丁接送墾丁，單程交通2200元起</li>
                    </ul>
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送評價推薦</h2>
            <div class="content">
                <div class="faq-container">
                    <div class="wp-fbrevedit wpacedit">
                        <div class="wp-facebook-list">
                            <div class="wp-facebook-content-inner"></div>
                            <div class="wp-facebook-reviews">
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000227.jpg"
                                            class="rplg-review-avatar" alt="Nicole Shih" width="50" height="50"
                                            title="Nicole Shih"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/3192420084104198"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Nicole Shih</a>
                                        <div class="wp-facebook-time" data-time="2020-03-29T13:56:20+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">車子超乾淨又新司機配合度超高駕駛技術超安全大推</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000229.jpg"
                                            class="rplg-review-avatar" alt="陳詩敏" width="50" height="50" title="陳詩敏"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/1677209032420749"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">陳詩敏</a>
                                        <div class="wp-facebook-time" data-time="2020-03-23T13:05:50+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">司機親切人又好玩得很開心～</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000230.jpg"
                                            class="rplg-review-avatar" alt="黃于倫" width="50" height="50" title="黃于倫"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/3377797198903904"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">黃于倫</a>
                                        <div class="wp-facebook-time" data-time="2020-03-18T14:48:26+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">很方便又舒適，下次還可以繼續遊玩:)</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000231.jpg"
                                            class="rplg-review-avatar" alt="Michelle Kao" width="50" height="50"
                                            title="Michelle Kao"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/1635054769965653"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Michelle
                                            Kao</a>
                                        <div class="wp-facebook-time" data-time="2020-03-18T10:37:37+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">感謝胖哥暖心又專業的司機兼擔當</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000232.jpg"
                                            class="rplg-review-avatar" alt="Jean Su" width="50" height="50" title="Jean Su">
                                    </div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/10221783615398258"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Jean Su</a>
                                        <div class="wp-facebook-time" data-time="2020-03-13T12:22:28+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">價格公道 服務也很周到</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000234.jpg"
                                            class="rplg-review-avatar" alt="林菁華" width="50" height="50" title="林菁華"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/2823506377732827"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">林菁華</a>
                                        <div class="wp-facebook-time" data-time="2020-03-09T11:48:28+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000235.jpg"
                                            class="rplg-review-avatar" alt="林美莉" width="50" height="50" title="林美莉"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/2744911132228633"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">林美莉</a>
                                        <div class="wp-facebook-time" data-time="2020-03-03T07:32:51+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">司機大哥服務態度很好，機動性高很推薦⋯</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000237.jpg"
                                            class="rplg-review-avatar" alt="余映葶" width="50" height="50" title="余映葶"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/1715461211927178"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">余映葶</a>
                                        <div class="wp-facebook-time" data-time="2020-03-02T00:19:23+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">服務好，訊息回覆速度快車子很乾淨寬敞司機人很好沒有不給五星的理由</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000240.jpg"
                                            class="rplg-review-avatar" alt="Janer Cheng" width="50" height="50"
                                            title="Janer Cheng"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/10222585443603697"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Janer Cheng</a>
                                        <div class="wp-facebook-time" data-time="2020-02-29T02:47:49+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">Very good customer service and tour guideHighly
                                                recommended</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000241.jpg"
                                            class="rplg-review-avatar" alt="陳俊斌" width="50" height="50" title="陳俊斌"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/1129561717380052"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">陳俊斌</a>
                                        <div class="wp-facebook-time" data-time="2020-02-28T07:01:46+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">服務是很好，車子乾淨，時間控制的剛好，特別是客服時時關心我們客戶，謝謝你們，值得再使用</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000243.jpg"
                                            class="rplg-review-avatar" alt="Colin Kao" width="50" height="50"
                                            title="Colin Kao"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/3032737350071397"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Colin Kao</a>
                                        <div class="wp-facebook-time" data-time="2020-02-24T15:26:44+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">車況不錯，司機水準和配合度都蠻好的</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000244.jpg"
                                            class="rplg-review-avatar" alt="魏生煌" width="50" height="50" title="魏生煌"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/2986054254747890"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">魏生煌</a>
                                        <div class="wp-facebook-time" data-time="2020-02-23T15:37:49+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">真的很棒，舒適安全，親切</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000245.jpg"
                                            class="rplg-review-avatar" alt="張小婷" width="50" height="50" title="張小婷"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/3084030494983139"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">張小婷</a>
                                        <div class="wp-facebook-time" data-time="2020-02-21T04:33:53+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">這間服務不錯喔，希望大家來支持</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000248.jpg"
                                            class="rplg-review-avatar" alt="朱雀敦" width="50" height="50" title="朱雀敦"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/10158940866542195"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">朱雀敦</a>
                                        <div class="wp-facebook-time" data-time="2020-02-03T15:31:55+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">非常專業，從聯絡 詢價 司機先生主動聯絡 行程規劃關注 時間掌控 都是百分百到位！</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review" style="display: block;">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000250.jpg"
                                            class="rplg-review-avatar" alt="Fin Liao" width="50" height="50"
                                            title="Fin Liao"></div>
                                    <div class="wp-facebook-right"><a href="https://facebook.com/10221817095006855"
                                            class="wp-facebook-name" target="_blank" rel="nofollow noopener">Fin Liao</a>
                                        <div class="wp-facebook-time" data-time="2020-02-02T13:01:20+0000">2 months ago
                                        </div>
                                        <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                                class="wp-facebook-text">講解清楚、收費合理、司機專業值得大大推薦</span></div>
                                    </div>
                                </div>
                                <div class="wp-facebook-review">
                                    <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                            src="https://skytour.tw/wp-content/uploads/2022/04/000255.jpg"
                                            class="rplg-review-avatar" alt="Yani Lam" width="50" height="50"
                                            title="Yani Lam"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10218473555008872"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Yani Lam</a>
                                    <div class="wp-facebook-time" data-time="2020-01-31T01:51:52+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">訂了2台9座車，車很新，，航班延誤司機久候了也沒怨言，很有禮貌。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000256.jpg"
                                        class="rplg-review-avatar" alt="Janet Law" width="50" height="50"
                                        title="Janet Law"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10221829488265353"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Janet Law</a>
                                    <div class="wp-facebook-time" data-time="2020-01-29T05:06:39+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">Great services! The driver is nice and the car is
                                            in very good condition. Clean and cosy! </span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000259.jpg"
                                        class="rplg-review-avatar" alt="Mayu Chang" width="50" height="50"
                                        title="Mayu Chang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3042567339088952"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Mayu Chang</a>
                                    <div class="wp-facebook-time" data-time="2020-01-27T11:33:28+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">回答問題都很即時，司機服務態度很親切，也會提供自己的意見供參考，下次有機會會再預約，謝謝~</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000261.jpg"
                                        class="rplg-review-avatar" alt="Jack Huang" width="50" height="50"
                                        title="Jack Huang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10157625013396885"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Jack Huang</a>
                                    <div class="wp-facebook-time" data-time="2020-01-24T13:38:48+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機很客氣服務很專業</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000262.jpg"
                                        class="rplg-review-avatar" alt="Ami Chen" width="50" height="50"
                                        title="Ami Chen"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10157828719909337"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Ami Chen</a>
                                    <div class="wp-facebook-time" data-time="2020-01-22T12:57:10+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機大哥準時有禮貌讚</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000263.jpg"
                                        class="rplg-review-avatar" alt="Jessica Prasetio" width="50" height="50"
                                        title="Jessica Prasetio"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2692649454121582"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Jessica
                                        Prasetio</a>
                                    <div class="wp-facebook-time" data-time="2020-01-22T12:46:47+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務很好,司機人很nice，價格也很便宜</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000266.jpg"
                                        class="rplg-review-avatar" alt="Meiling Lin" width="50" height="50"
                                        title="Meiling Lin"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2259047024195205"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Meiling Lin</a>
                                    <div class="wp-facebook-time" data-time="2020-01-20T00:17:51+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機先生很細心，路很熟，配合度很高，開車平穩，車子很乾淨，值得推薦，是出遊好幫手！</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000267.jpg"
                                        class="rplg-review-avatar" alt="River He" width="50" height="50"
                                        title="River He"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3040971979254301"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">River He</a>
                                    <div class="wp-facebook-time" data-time="2020-01-19T01:02:19+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">1/18跟朋友ㄧ起出門渡家 安排的司機大哥很親切 很專業～</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000268.jpg"
                                        class="rplg-review-avatar" alt="江得慧" width="50" height="50" title="江得慧"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2826771050677096"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">江得慧</a>
                                    <div class="wp-facebook-time" data-time="2020-01-18T14:26:53+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車很乾淨，司機人親切</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000269.jpg"
                                        class="rplg-review-avatar" alt="吳筱婷" width="50" height="50" title="吳筱婷"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2928141697198507"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">吳筱婷</a>
                                    <div class="wp-facebook-time" data-time="2020-01-18T14:22:05+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車很乾淨，舒服沒有煙味<img draggable="false" role="img"
                                                class="emoji" alt="❤️"
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000270.jpg"
                                        class="rplg-review-avatar" alt="Michelle Kuo" width="50" height="50"
                                        title="Michelle Kuo"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2432232373566230"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Michelle
                                        Kuo</a>
                                    <div class="wp-facebook-time" data-time="2020-01-18T08:33:24+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機鄧大哥為人非常客氣，時間安排調度上也很願意配合。沒有你們的幫助，這次的客戶接待不會如此順利！真心感謝你們的幫忙！</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000271.jpg"
                                        class="rplg-review-avatar" alt="王俊賢" width="50" height="50" title="王俊賢"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2900265113359601"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">王俊賢</a>
                                    <div class="wp-facebook-time" data-time="2020-01-18T07:44:41+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">讚，服務優良，司機很好</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000272.jpg"
                                        class="rplg-review-avatar" alt="林采緹" width="50" height="50" title="林采緹"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2831334046909830"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">林采緹</a>
                                    <div class="wp-facebook-time" data-time="2020-01-15T05:28:18+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">很棒，舒服也有隱私，司機大哥很nice</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000273.jpg"
                                        class="rplg-review-avatar" alt="駿慶" width="50" height="50" title="駿慶"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3223966370952492"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">駿慶</a>
                                    <div class="wp-facebook-time" data-time="2020-01-12T15:33:06+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">很實在的體驗。客服也很客氣</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000274.jpg"
                                        class="rplg-review-avatar" alt="Troy Chen" width="50" height="50"
                                        title="Troy Chen"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2856517191102525"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Troy Chen</a>
                                    <div class="wp-facebook-time" data-time="2020-01-12T12:21:57+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機非常好，行車都非常安全！也都很準時抵達。下次會在選這家。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000275.jpg"
                                        class="rplg-review-avatar" alt="曾敦仁" width="50" height="50" title="曾敦仁"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10157016394563526"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">曾敦仁</a>
                                    <div class="wp-facebook-time" data-time="2020-01-02T13:19:28+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">經濟實惠，方便安穩，時間自由，充份導遊，玩得順心。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img loading="lazy" decoding="async"
                                        src="https://skytour.tw/wp-content/uploads/2022/04/000276.jpg"
                                        class="rplg-review-avatar" alt="Amanda Chan" width="50" height="50"
                                        title="Amanda Chan"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10156482004422172"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Amanda Chan</a>
                                    <div class="wp-facebook-time" data-time="2019-12-30T14:45:37+0000">2 months ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務很好，價錢合理，司機大哥熱情有禮～推薦！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000001.jpg"
                                        class="rplg-review-avatar" alt="Yi-chen Yeh" width="50" height="50"
                                        title="Yi-chen Yeh"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5181583388585965"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Yi-chen Yeh</a>
                                    <div class="wp-facebook-time" data-time="2022-06-25T14:32:32+0000">9 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">非常棒～司機貼心！！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000003.jpg"
                                        class="rplg-review-avatar" alt="陳鶴彬" width="50" height="50" title="陳鶴彬"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5300979956632529"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">陳鶴彬</a>
                                    <div class="wp-facebook-time" data-time="2022-06-11T13:59:38+0000">23 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">信息回復快，司機服務態度佳，超推的。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000004.jpg"
                                        class="rplg-review-avatar" alt="黃儀婷" width="50" height="50" title="黃儀婷"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/7987549801263098"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">黃儀婷</a>
                                    <div class="wp-facebook-time" data-time="2022-06-07T23:45:33+0000">27 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">完美的服務～高司機一切配合 如果有需求提出都會幫忙 非常感謝！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000005.jpg"
                                        class="rplg-review-avatar" alt="陳德頤" width="50" height="50" title="陳德頤"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5240082262716627"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">陳德頤</a>
                                    <div class="wp-facebook-time" data-time="2022-05-23T14:45:16+0000">a month ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務態度佳及品質良好，超推！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000008.jpg"
                                        class="rplg-review-avatar" alt="狗狗君" width="50" height="50" title="狗狗君"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5530355413649676"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">狗狗君</a>
                                    <div class="wp-facebook-time" data-time="2022-05-09T14:11:53+0000">a month ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">乘客們很滿意，司機服務態度不錯，配合度也很好！<img decoding="async"
                                                draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"><img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg">謝謝司機王大哥。值得推薦<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000011.jpg"
                                        class="rplg-review-avatar" alt="Emma Chen" width="50" height="50"
                                        title="Emma Chen"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4707177549405536"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Emma Chen</a>
                                    <div class="wp-facebook-time" data-time="2022-04-04T14:06:06+0000">3 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機服務優良，車子狀態良好，非常推薦喔！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000012.jpg"
                                        class="rplg-review-avatar" alt="鴿子" width="50" height="50" title="鴿子"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5272249049461120"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">鴿子</a>
                                    <div class="wp-facebook-time" data-time="2022-03-18T00:02:51+0000">4 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子舒適乾淨，司機周大哥服務也很好，一切都還算滿意，推推推</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000013.jpg"
                                        class="rplg-review-avatar" alt="張點點" width="50" height="50" title="張點點"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4930797846998648"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">張點點</a>
                                    <div class="wp-facebook-time" data-time="2022-03-10T13:28:24+0000">4 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">很不錯，司機也都很準時，溝通上也算快速！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000016.jpg"
                                        class="rplg-review-avatar" alt="Ya-ting Chang" width="50" height="50"
                                        title="Ya-ting Chang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5331606790186103"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Ya-ting
                                        Chang</a>
                                    <div class="wp-facebook-time" data-time="2022-01-27T03:17:03+0000">5 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">訂車與行前聯繫相當順利有效率，客服回覆即時性高，司機當天服務專業貼心<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000019.jpg"
                                        class="rplg-review-avatar" alt="CliffChuo" width="50" height="50"
                                        title="CliffChuo"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4405073079598230"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Cliff Chuo</a>
                                    <div class="wp-facebook-time" data-time="2022-01-19T13:22:31+0000">6 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">安排很完善，司機人很好。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000020.jpg"
                                        class="rplg-review-avatar" alt="顏廷衣" width="50" height="50" title="顏廷衣"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/5039821422715444"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">顏廷衣</a>
                                    <div class="wp-facebook-time" data-time="2022-01-17T04:00:47+0000">6 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子很乾淨舒服司機大哥人很好～一切都滿意</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000023.jpg"
                                        class="rplg-review-avatar" alt="HsinCheng" width="50" height="50"
                                        title="HsinCheng"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2310266582446260"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Hsin Cheng</a>
                                    <div class="wp-facebook-time" data-time="2022-01-11T14:48:19+0000">6 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務親切，開車穩健，大推！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000024.jpg"
                                        class="rplg-review-avatar" alt="闕珮庭" width="50" height="50" title="闕珮庭"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4547809421981654"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">闕珮庭</a>
                                    <div class="wp-facebook-time" data-time="2021-12-31T15:06:46+0000">6 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機超棒～服務都超好</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000025.jpg"
                                        class="rplg-review-avatar" alt="柯卉卉" width="50" height="50" title="柯卉卉"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10221850534152071"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">柯卉卉</a>
                                    <div class="wp-facebook-time" data-time="2021-12-31T13:25:06+0000">6 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機光哥專業……非常滿意</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000027.jpg"
                                        class="rplg-review-avatar" alt="Chiachen Hu" width="50" height="50"
                                        title="Chiachen Hu"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4933535746665644"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Chiachen Hu</a>
                                    <div class="wp-facebook-time" data-time="2021-12-15T14:40:13+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機非常優質 服務態度良好，值得推薦</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000028.jpg"
                                        class="rplg-review-avatar" alt="Yang Yang" width="50" height="50"
                                        title="Yang Yang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/296850568998834"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Yang Yang</a>
                                    <div class="wp-facebook-time" data-time="2021-12-15T13:57:23+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機親切，車開得很穩，都有事先做好路線的規畫，極推!!</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000029.jpg"
                                        class="rplg-review-avatar" alt="賴北北" width="50" height="50" title="賴北北"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/7455637764461962"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">賴北北</a>
                                    <div class="wp-facebook-time" data-time="2021-12-14T15:01:59+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務好，司機也很讚。有承租需求，我認為可以來詢問～～<img decoding="async"
                                                draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"><img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000030.jpg"
                                        class="rplg-review-avatar" alt="Pei Pei" width="50" height="50" title="Pei Pei">
                                </div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/159444903094030"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Pei Pei</a>
                                    <div class="wp-facebook-time" data-time="2021-12-14T14:04:13+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">安全 舒適 乘坐愉快</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000032.jpg"
                                        class="rplg-review-avatar" alt="HungMing Lin" width="50" height="50"
                                        title="HungMing Lin"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2416583148472040"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">HungMing
                                        Lin</a>
                                    <div class="wp-facebook-time" data-time="2021-12-12T14:41:35+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機親切、又認真開車技術超好下次一定又會再訂你們的車</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000033.jpg"
                                        class="rplg-review-avatar" alt="蔡貝蒂" width="50" height="50" title="蔡貝蒂"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4944589438894277"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">蔡貝蒂</a>
                                    <div class="wp-facebook-time" data-time="2021-12-08T04:14:10+0000">7 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車很新及司機服務各方面都值得推薦<img decoding="async"
                                                draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000040.jpg"
                                        class="rplg-review-avatar" alt="張以承" width="50" height="50" title="張以承"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4005768052858656"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">張以承</a>
                                    <div class="wp-facebook-time" data-time="2021-11-07T13:41:31+0000">8 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">汽車駕駛開車很穩 非常安全 而且價格收費合理 推薦大家包車要選這家喔</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000042.jpg"
                                        class="rplg-review-avatar" alt="康妮" width="50" height="50" title="康妮"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10224404773414487"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">康妮</a>
                                    <div class="wp-facebook-time" data-time="2021-10-24T14:05:26+0000">8 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">費用合理，車況好，司機守時服務佳，會幫忙撐傘、提行李，也很有耐心。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000043.jpg"
                                        class="rplg-review-avatar" alt="Plusc Triplejai" width="50" height="50"
                                        title="Plusc Triplejai"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/203537125180651"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Plusc
                                        Triplejai</a>
                                    <div class="wp-facebook-time" data-time="2021-10-24T05:07:07+0000">8 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">經驗很好的一趟旅程，一切順利，長輩也放心，司機好溝通</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000049.jpg"
                                        class="rplg-review-avatar" alt="李承駿" width="50" height="50" title="李承駿"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10215632799612348"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">李承駿</a>
                                    <div class="wp-facebook-time" data-time="2021-10-11T00:37:34+0000">9 days ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子車況新，司機大哥專業又細心，駕駛平穩且會事先再確認流程，搭車的家人都很高興，稱讚有加，值得推薦！<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000053.jpg"
                                        class="rplg-review-avatar" alt="尤振弘" width="50" height="50" title="尤振弘"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/6412225798795211"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">尤振弘</a>
                                    <div class="wp-facebook-time" data-time="2021-09-22T01:01:29+0000">10 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">回覆速度快，行程部分也很有耐心跟客人討論</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000054.jpg"
                                        class="rplg-review-avatar" alt="Tracy Hou" width="50" height="50"
                                        title="Tracy Hou"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2225929840881678"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Tracy Hou</a>
                                    <div class="wp-facebook-time" data-time="2021-09-14T23:12:58+0000">10 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">線上回覆即時，報價也透明清楚。服務人員非常好心，讓我們升等更大的車型。司機提前到達，等待期間也相當有耐心，是感受很好的體驗。感謝司機大哥，不說出來名字，怕以後約不到他的車<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f923.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000055.jpg"
                                        class="rplg-review-avatar" alt="Peipei Ou" width="50" height="50"
                                        title="Peipei Ou"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4987551767927779"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Peipei Ou</a>
                                    <div class="wp-facebook-time" data-time="2021-09-13T06:31:38+0000">10 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務好 回應速度也很快喔</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000056.jpg"
                                        class="rplg-review-avatar" alt="陳昱芩" width="50" height="50" title="陳昱芩"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4259806310799953"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">陳昱芩</a>
                                    <div class="wp-facebook-time" data-time="2021-08-27T14:32:23+0000">10 days ago
                                    </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子很乾淨新穎，今天服務的翁司機人很好開車也平穩；謝謝你們的服務</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000061.jpg"
                                        class="rplg-review-avatar" alt="蕭小麥" width="50" height="50" title="蕭小麥"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10223788014958848"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">蕭小麥</a>
                                    <div class="wp-facebook-time" data-time="2021-01-25T11:26:39+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機大哥人好車子新，開的穩</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000063.jpg"
                                        class="rplg-review-avatar" alt="彭暄雅" width="50" height="50" title="彭暄雅"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3726277284060683"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">彭暄雅</a>
                                    <div class="wp-facebook-time" data-time="2020-12-29T13:01:13+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">超讚的服務品質，司機大哥素質和車子安全性一級棒，100%事前溝通，強力推薦！上山下海使命必達，有耐心有愛心的優良租車商</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000064.jpg"
                                        class="rplg-review-avatar" alt="ChenTe Lu" width="50" height="50"
                                        title="ChenTe Lu"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10159233446541563"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">ChenTe Lu</a>
                                    <div class="wp-facebook-time" data-time="2020-12-25T13:16:41+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">舒適安全，旅程很愉快<img decoding="async" draggable="false"
                                                role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f603.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000065.jpg"
                                        class="rplg-review-avatar" alt="Yu Ting Chiu" width="50" height="50"
                                        title="Yu Ting Chiu"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4069176163095790"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Yu Ting
                                        Chiu</a>
                                    <div class="wp-facebook-time" data-time="2020-12-14T01:10:48+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">溝通良好，配合度高，車子坐起來很舒適。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000073.jpg"
                                        class="rplg-review-avatar" alt="LuLu Yu" width="50" height="50" title="LuLu Yu">
                                </div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10158739874724634"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">LuLu Yu</a>
                                    <div class="wp-facebook-time" data-time="2020-10-30T13:54:28+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子舒適、駕駛親切優良的好選擇<img decoding="async"
                                                draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000075.jpg"
                                        class="rplg-review-avatar" alt="Karen Yung" width="50" height="50"
                                        title="Karen Yung"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3915791991768864"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Karen Yung</a>
                                    <div class="wp-facebook-time" data-time="2020-10-19T14:20:04+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機大哥人親切，隔天早上還提前到飯店等我們價格實在，家族旅遊非常推薦<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000076.jpg"
                                        class="rplg-review-avatar" alt="Marcos Shiang" width="50" height="50"
                                        title="Marcos Shiang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10161024925863636"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Marcos
                                        Shiang</a>
                                    <div class="wp-facebook-time" data-time="2020-10-19T11:21:50+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">在台南用了兩天的車，車子舒適、司機準時、駕駛技巧夠穩。價格合理，有用有推！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000080.jpg"
                                        class="rplg-review-avatar" alt="張芳" width="50" height="50" title="張芳"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3727511283935428"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">張芳</a>
                                    <div class="wp-facebook-time" data-time="2020-10-16T14:31:59+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">溝通過程中都非常細心又有耐心 價格也很合理非常值得推薦唷!!!</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000081.jpg"
                                        class="rplg-review-avatar" alt="黃倢渝" width="50" height="50" title="黃倢渝"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/2073296406137018"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">黃倢渝</a>
                                    <div class="wp-facebook-time" data-time="2020-10-16T14:23:26+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">超nice，諮詢時都很有耐心的協助我們任何問題！推推</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000083.jpg"
                                        class="rplg-review-avatar" alt="Bonnie Chang" width="50" height="50"
                                        title="Bonnie Chang"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3656146941071605"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Bonnie
                                        Chang</a>
                                    <div class="wp-facebook-time" data-time="2020-10-10T15:14:01+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務快速，親切，臨時變更行程也能快速提出建議與配合，很愉快的行程。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000084.jpg"
                                        class="rplg-review-avatar" alt="郭育青" width="50" height="50" title="郭育青"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3629058117114167"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">郭育青</a>
                                    <div class="wp-facebook-time" data-time="2020-10-10T14:36:16+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務很好，司機先生專業</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000086.jpg"
                                        class="rplg-review-avatar" alt="Sam Chiu" width="50" height="50"
                                        title="Sam Chiu"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/10217429749287000"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Sam Chiu</a>
                                    <div class="wp-facebook-time" data-time="2020-10-08T10:23:05+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機服務態度好，推推</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000087.jpg"
                                        class="rplg-review-avatar" alt="Yu-Chien Tseng" width="50" height="50"
                                        title="Yu-Chien Tseng"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3686470638032602"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Yu-Chien
                                        Tseng</a>
                                    <div class="wp-facebook-time" data-time="2020-10-04T01:48:03+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務態度極佳！司機配合度也很高，整個旅程下來非常完美！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000090.jpg"
                                        class="rplg-review-avatar" alt="Jeffrey Chiu" width="50" height="50"
                                        title="Jeffrey Chiu"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4025925587424866"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Jeffrey
                                        Chiu</a>
                                    <div class="wp-facebook-time" data-time="2020-09-18T14:22:09+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機先生，親切、專業、體貼、技術好、車子乾乾淨淨的！非常滿意的車公司！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000095.jpg"
                                        class="rplg-review-avatar" alt="Chang Simon" width="50" height="50"
                                        title="Chang Simon"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3917276344956033"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Chang Simon</a>
                                    <div class="wp-facebook-time" data-time="2020-08-29T02:02:42+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">司機服務熱忱，座位舒適，值得推薦。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000096.jpg"
                                        class="rplg-review-avatar" alt="張硯婷" width="50" height="50" title="張硯婷"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3505891139430571"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">張硯婷</a>
                                    <div class="wp-facebook-time" data-time="2020-08-25T01:46:12+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">回復很快！司機大哥人非常好！推薦！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000097.jpg"
                                        class="rplg-review-avatar" alt="劉士蓮" width="50" height="50" title="劉士蓮"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3468923323126019"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">劉士蓮</a>
                                    <div class="wp-facebook-time" data-time="2020-08-24T02:34:08+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">回覆速度很快，很貼心。司機大哥也很熱心，會推薦景點，也把我們載到最近的地方下車，都不用擔心走很遠或者停車的問題，超棒的<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"><img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"><img
                                                decoding="async" draggable="false" role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000100.jpg"
                                        class="rplg-review-avatar" alt="吳慧貞" width="50" height="50" title="吳慧貞"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3794802100533143"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">吳慧貞</a>
                                    <div class="wp-facebook-time" data-time="2020-08-18T18:41:16+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">車子整潔舒適，司機有禮貌細心，開車很穩。客服溝通親切順暢，遇到問題積極解決，非常推薦。</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000102.jpg"
                                        class="rplg-review-avatar" alt="Savi Ko" width="50" height="50" title="Savi Ko">
                                </div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3153151891400647"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Savi Ko</a>
                                    <div class="wp-facebook-time" data-time="2020-08-17T14:45:22+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">安排非常棒司機也<img decoding="async" draggable="false"
                                                role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg">！介紹花蓮景點非常盡責！開車也很穩定！謝謝你們提供這麼讚的服務！下次有機會會再訂行程也推薦</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000104.jpg"
                                        class="rplg-review-avatar" alt="張正仁" width="50" height="50" title="張正仁"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4186782648058860"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">張正仁</a>
                                    <div class="wp-facebook-time" data-time="2020-08-12T13:45:06+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務佳，司機Terry素質良好！能維護客戶權益，有疑議也會一再確認，好極了！</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000105.jpg"
                                        class="rplg-review-avatar" alt="Peng Wei" width="50" height="50"
                                        title="Peng Wei"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/4135002789903154"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">Peng Wei</a>
                                    <div class="wp-facebook-time" data-time="2020-08-11T14:51:37+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">客服員momo跟康小姐都很有耐心，也很親切，讓人很安心。</span></div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000106.jpg"
                                        class="rplg-review-avatar" alt="林昆賢" width="50" height="50" title="林昆賢"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3127660733992681"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">林昆賢</a>
                                    <div class="wp-facebook-time" data-time="2020-08-10T14:32:40+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務非常好<img decoding="async" draggable="false"
                                                role="img" class="emoji" alt=""
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg">司機人也好讚<img
                                                decoding="async" draggable="false" role="img" class="emoji" alt="❤️"
                                                src="https://s.w.org/images/core/emoji/14.0.0/svg/2764.svg"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="wp-facebook-review">
                                <div class="wp-facebook-left"><img decoding="async" loading="lazy"
                                        src="https://jobincar.com/wp-content/uploads/2022/07/000108.jpg"
                                        class="rplg-review-avatar" alt="林宗賢" width="50" height="50" title="林宗賢"></div>
                                <div class="wp-facebook-right"><a href="https://facebook.com/3534006106611143"
                                        class="wp-facebook-name" target="_blank" rel="nofollow noopener">林宗賢</a>
                                    <div class="wp-facebook-time" data-time="2020-08-09T07:59:55+0000">a year ago </div>
                                    <div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span><span
                                            class="wp-facebook-text">服務好 ！值得推薦！</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="moretestimonials">看更多評價</p>
            </div>
        </div>
        <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送車款介紹</h2>
        <p>會安排同價位車款，恕無法指定車款</p>
        <div class="content">
            <div class="section portion3">
                <h3>五人座轎車款</h3>
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/wp-content/uploads/2024/01/lexus_es300_5.jpeg');">
                </div>
                <p>豐田ALTIS、CAMRY或其他同等級(含以上)車款，行李數量建議2個28吋 或 3個20-24吋以下</p>
                <i class="material-symbols-outlined fa-color-control">groups</i>最多3人
                <i class="material-symbols-outlined fa-color-control">luggage</i>最多2個28吋以下行李箱
            </div>
            <div class="section portion3">
                <h3>五人座休旅車款</h3>
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/wp-content/uploads/2024/01/toyota_rav4_5.jpeg');">
                </div>
                <p>豐田RAV4、CROSS或其他同等級(含以上)車款，行李數量建議3個28吋 或 4個20-24吋以下</p>
                <i class="material-symbols-outlined fa-color-control">groups</i>最多4人
                <i class="material-symbols-outlined fa-color-control">luggage</i>最多3個28吋以下行李箱
            </div>
            <div class="section portion3">
                <h3>九人座休旅箱型車款</h3>
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/wp-content/uploads/2024/01/benz_vito_9.jpeg');">
                </div>
                <p>福斯T5T6、賓士、福特或其他同等級車款，行李數量建議8個28吋以下</p>
                <i class="material-symbols-outlined fa-color-control">groups</i>最多8人
                <i class="material-symbols-outlined fa-color-control">luggage</i>最多8個28吋以下行李箱
            </div>
        </div>
        <h2>預訂{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送流程</h2>
        <ol>
            <li><strong>預訂畫面</strong>：「輕鬆預訂，您的旅程從這裡開始！」</li>
            <li><strong>完成預訂</strong>：「多種客製化服務，方便又快速！」</li>
            <li><strong>查看訂單列表</strong>：「一目了然，輕鬆管理您的所有行程！」</li>
            <li><strong>車輛已經備妥</strong>：「準備出發，我們已經為您安排好一切！」</li>
        </ol>
        <div class="content align-items-center">
            <div class="section portion3">
                <div class="faq-container">
                    <div class="faq-item">
                        <h3 class="faq-question">1. 預訂畫面</h3>
                        <p class="faq-answer">在此畫面，用戶可以選擇日期、時間以及上車地點和目的地，如果有更多需求，都可以在預訂表單中找到。我們的平台提供了一個直觀的界面，使預訂過程快速無憂。
                        </p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">2. 完成預訂</h3>
                        <p class="faq-answer">完成訂單後付款，至此預訂部分已經完成。我們採用藍新金流支付，用戶可以選擇多種付款方式，無論是信用卡、電子錢包或是網路銀行，都能輕鬆完成交易。我們確保您的交易安全，讓您無後顧之憂。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">3. 訂單列表</h3>
                        <p class="faq-answer">在訂單列表中，用戶不僅可以查看即將到來的行程，還可以檢視過去的訂單紀錄。每一筆訂單都清晰顯示詳細訊息，讓您完全掌控。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">4. 車輛已經備妥</h3>
                        <p class="faq-answer">
                            當訂單狀態顯示「已完成」時，代表您的車輛已經準備妥當，畫面上也會顯示駕駛的資訊，駕駛也會事前主動聯絡您。只等您踏上旅程，享受舒適的接送體驗。另外我們有提供臨時聊天室，您可以在這邊留下訊息。
                        </p>
                    </div>
                </div>

            </div>
            <div class="section portion6">
                <img src="https://wanma.tw/wp-content/uploads/2024/01/guide_all.jpg" />
            </div>
        </div>
        <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送常見問題</h2>
        <div class="content">
            <div class="faq-container">
                <div class="faq-item">
                    <h3 class="faq-question">什麼時候提供司機的資訊給我？</h3>
                    <p class="faq-answer">
                        萬馬會將於行程前一晚20:00透過電子郵件和簡訊向您提供所有必要的旅行資訊，其中包括司機的姓名、手機號碼和車牌號碼，以確保您可以順利找到您的司機並享受一趟安心的旅程。司機將會提前在約定的地點為您提供準時的接送服務。
                    </p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">如何確認已成功預訂？</h3>
                    <p class="faq-answer">本系統在您付款、完成預訂都會由Email通知，請您注意來自「萬馬接送(service@wanma.tw)」的寄件人。若您不放心，
                        當您付款完成後，登入後可以在「管理訂單」頁面找到您的訂單，訂單狀態為「完成」即是成功預訂。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">可以臨時取消嗎？</h3>
                    <p class="faq-answer">在出發前48小時前，您可以完全無憂地取消您的行程，且完全免費，無需提供任何理由！享受我們靈活而便利的服務，讓您 的旅程更加自在和無壓力。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">派遣車款與預約車款不同？</h3>
                    <p class="faq-answer">預約九人座箱型車款，若您人數填寫7位內(含7位)，則有可能升等安排八人座車(上限7位內)，還請務必留意此升級服務僅 限於最多7位乘客。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">如果我在超過原定的時間上車，有需要增加逾時費用嗎？</h3>
                    <p class="faq-answer">若您超過指定的上車時間 15分鐘，經自行連絡司機、司機回覆可等候，自預約時間第 15 分鐘起，每 30 分鐘需酌收超時 等待費用，不足 30 分鐘以 30
                        分鐘計算，請直接上車付現金給司機；若因司機後續行程緣由，無法配合等候而您來不及乘車，視同您放棄此服務，費用恕不 退還，因此訂購時請妥善選擇您的乘車預約時間。</p>
                    <p class="faq-answer">若超過上車時間 15分鐘後，司機無法透過您的電話聯繫上您，您也未主動透過電話與司機或客服聯絡，視同您放棄服務，費 用恕不退還。</p>
                    <p class="faq-answer">*每30分鐘等待費用: 五座轎車400元、五座休旅400元、九座廂型車500元。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">途中臨時停靠的地點，司機可以等待多久？</h3>
                    <p class="faq-answer">本服務主要為接送乘客上下車，基本上一個點以5分鐘內為主，確保不耽誤貴賓您的時間。</p>
                </div>
            </div>
        </div>
        <h2>{{ fromLocation.name }}機場接送常見問題</h2>
        <div class="content">
            <div class="faq-container">
                <div class="faq-item">
                    <h3 class="faq-question">接機的上車時間，要大概抓多久？</h3>
                    <p class="faq-answer">接機會以航班當天實際落地時間為主，大概是飛機落地後50-60分鐘左右。例如，當天實際落地時間10:00，則大概10:50- 11:00左右可拿完行李並上車。
                    </p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">接機服務司機會等待多久？</h3>
                    <p class="faq-answer">司機免費等待時間為當天實際落地時間往後推70分鐘。例如，當天實際落地時間10:00，則司機可等候至11:10。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">若超過接機的緩衝時間，貴賓仍無出現乘車，費用怎麼算？</h3>
                    <p class="faq-answer">若於71-90分鐘內接到，請客人現場支付五人座100元、九人座200元給司機。以每20分鐘做為一個單位支付給司機，以此類
                        推。若於91分鐘後都未能接到客人，司機有權直接離開。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">若航班異動導致機場更動怎麼辦？</h3>
                    <p class="faq-answer">若航班異動導致機場更動，例如原定小港機場降落，改桃園機場降落，我方有權取消並辦理全額退款。</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">若航班異動導致接送機時間提前/延後超過2小時怎麼辦？</h3>
                    <p class="faq-answer">若航班異動超過2小時，例如原定10:00降落，異動為12:01降落，我方有權取消並辦理全額退款。</p>
                </div>
                <p class="align-right">
                    <a href="https://wanma.tw/faq/">更多常見問題請至「常見問題」頁面</a>
                </p>
            </div>
        </div>
        <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}接送活動花絮</h2>
        <div class="content">
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img01.jpg');">
                </div>
            </div>
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img02.jpg');">
                </div>
            </div>
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img03.jpg');">
                </div>
            </div>
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img04.jpg');">
                </div>
            </div>
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img05.jpg');">
                </div>
            </div>
            <div class="section portion3">
                <div class="img-container"
                    style="background-image: url('https://wanma.tw/assets/img06.jpg');">
                </div>
            </div>
        </div>
        <p class="align-right"><a href="https://wanma.tw/express/">立即線上預訂接送</a></p>

        <h2>為什麼選擇 萬馬接送 Wanma</h2>
        <div class="content">
            <div class="section portion3">
                <i class="material-symbols-outlined fa">quickreply</i>
                <h3>即時線上回覆</h3>
                <p>在萬馬接送，我們為您提供即時的真人線上回覆服務。無論您有任何疑問或需要協助，我們的客服團隊隨時在線，準備為您提供專業的支持和解答。這項服務保證了您在預訂過程中的每一個疑惑都能獲得迅速且有效的回應，從而確保您的預訂體驗順暢無憂。
                </p>
            </div>

            <div class="section portion3">
                <i class="material-symbols-outlined fa">fact_check</i>
                <h3>即時查看預訂狀況</h3>
                <p>我們重視您的時間和方便，因此提供一個直觀的平台讓您能夠即時查看預訂狀況。從預訂確認到車輛派遣，您可以實時跟蹤您的訂單進度。這項功能不僅提升了服務的透明度，也讓您對即將到來的行程保持完全的掌控，同時可以回顧所有歷史訂單。
                </p>
            </div>

            <div class="section portion3">
                <i class="material-symbols-outlined fa">encrypted</i>
                <h3>嚴格遵守個人資料保護法</h3>
                <p>我們非常重視您的隱私和安全。所有客戶資料的處理和存儲都嚴格遵守個人資料保護法。我們採取先進的安全措施來保護您的個人資料，並確保這些資料僅用於提升您的服務體驗。您可以放心，您的資料在我們手中是安全的，並且我們承諾不會與第三方共享您的個人資料。
                </p>
            </div>
        </div>
    </div>
    <TheFooter />
    <TheContact />
</div></template>

<script>
export default {
    computed: {
        fromLocation() {
            return this.$store.state.fromLocation;
        },
        toLocation() {
            return this.$store.state.toLocation;
        }
    },
};
</script>