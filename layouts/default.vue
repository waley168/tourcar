<template>
    <div>
        <TheHeader />
        <div class="entry-content">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a rel="noopener noreferrer" href="https://wholealphard.com/">首頁</a></li>
                    <li aria-current="page" class="breadcrumb-item active">{{ fromLocation.name }}包車旅遊|包車一日遊、多日遊|到府專車接送|租車附駕駛</li>
                </ol>
            </nav>
            <div class="hero-img"
                style="background-image: url('https://www.taiwantourcar.com/assets/taiwantourcar-cover.jpg');">
            </div>
            <nuxt></nuxt>
            <h2>{{ fromLocation.name }}包車服務項目</h2>
            <div class="content">
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2022/10/876526.jpg');">
                    </div>
                    <h3>{{ fromLocation.name }}包車接送(租車附駕駛)</h3>
                    <h4>到府專車接送</h4>
                    <ol>
                        <li><strong>{{ fromLocation.name }}觀光包車旅遊</strong>：在我們的網站上，您可以輕鬆租用各式五人座、九人座車型，為您的道路旅行提供最大的舒適性和便利性。包車服務，讓您可以無憂地享受您的旅程。我們的專業司機能夠帶您探索台灣的每一個角落，讓您的旅行更加輕鬆和舒適。在旅遊期間，您無需擔心停車或導航問題，只需專心享受您的旅行。
                        </li>
                        <li><strong>醫美旅行</strong>：規劃一趟醫美之旅？選擇夢玩家包車旅遊，讓您的旅程更加舒適和私密。無論是前往高級醫美診所或醫療設施，我們的車輛都能提供您最安全，最隱私，最舒適的環境。阿法的內裝豪華，讓您的醫美之旅增添尊貴與高級感。
                        </li>
                        <li><strong>{{ fromLocation.name }}登山包車接駁</strong>：提供包車服務至各種登山起點，尤其是那些難以通過公共交通到達的地方。為一日、多日的登山徒步旅行提供往返接駁，並在必要時提供裝備運輸和補給服務。使用環保型車輛，減少對自然環境的影響。
                        </li>
                        <li><strong>家庭聚會</strong>：如果您正在計劃一個家庭聚會，或者需要在旅遊時攜帶大件行李，我們的九人座車型是您的理想選擇。它的寬敞內部空間可以容納大量的行李或物品，而且我們的車輛都配備了先進的安全功能，以確保您和您的家人的安全。
                        </li>
                        <li><strong>{{ fromLocation.name }}景點外拍/婚紗攝影</strong>：包車服務使貴賓能夠選擇多個拍攝地點，甚至是偏遠或不易到達的地方。這增加了外拍的多樣性，讓婚紗照更加個性化和獨特。穿著婚紗或禮服可能不方便，包車服務提供了一個舒適的休息和更衣空間，以及快速從一個拍攝地點移動到另一個地點的便利。
                        </li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://jobincar.com/wp-content/uploads/2021/10/886016.jpg');">
                    </div>
                    <h3>企業/公司/學校長期包車</h3>
                    <h4>長期承租享優惠</h4>
                    <ol>
                        <li><strong>長期商務包車</strong>：我們提供各式車型給企業或公司行號進行長期租賃。無論您需要車輛接待重要客戶，或者是為員工提供舒適的交通方式，我們的商務車型都能滿足您的需求。其豪華內裝和先進的安全設施，必定讓您的公司在客戶或員工心中留下深刻的印象。
                        </li>
                        <li><strong>企業活動租車</strong>：如果您的公司正在規劃企業活動，如團建活動、展覽會、研討會等，我們的五人座、七人座、九人座車型都是不二之選。我們的長期租賃方案可以為您提供最大的靈活性和便利性，讓您的企業活動得以順利進行。
                        </li>
                        <li><strong>{{ fromLocation.name }}商務出差</strong>：如果您需要前往商務會議或活動，我們的Alphard、LM車型也是您的理想選擇。它的豪華內裝和舒適設計將確保您的旅程愉快並保持生產力。另外，您也可以考慮使用我們的代駕服務，根據自己的時間表自由行動，不需要依賴公共交通工具。
                        </li>
                        <li><strong>員工福利車輛</strong>：我們的服務也適合作為員工福利車輛。您的員工將對於能夠使用這種豪華的車輛感到驚喜。長期租賃計劃可以幫助您節省時間和精力，不需要自己進行車輛的維護和管理。
                        </li>
                        <li><strong>公司接送服務</strong>：我們的包車服務也可以用於公司的接送。無論是接送員工上下班，還是為VIP客戶提供接送服務，我們的車輛都能提供高水準的服務。</li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2019/12/benz003.jpg');">
                    </div>
                    <h3>{{ fromLocation.name }}專業外語司機包車</h3>
                    <p>秉持著專業、親切、安全的精神，並具有多年資歷的外賓接待經驗，及搭配各式車款，提供英語、日語、韓語三種外語司機包車服務，對象包含外國觀光客、外商公司、外賓等，使其感受台灣濃厚人情外及台灣風景之美。</p>
                    <ol>
                        <li><strong>外賓接送包車</strong>：外賓接送、外國人來台包車旅遊觀光...等，皆有英、日、韓語專業外語司機可以安排服務，皆能為您貼心完善的規劃與安排。 (若需更多其他外語服務，亦配備有最先進、精準口譯機如GPLUS、WONDER 2.0、科大訊飛等，能與至少36國以上客人直接對話、溝通)。
                        </li>
                        <li><strong>外國人來台包車旅遊觀光</strong>：我們的包車服務提供會說英語（或其他外語）的司機或導遊，這對於不會說華語的外國旅客來說非常重要。這不僅幫助他們更好地溝通，還能讓他們深入了解台灣的文化和歷史。
                        </li>
                        <li><strong>活動包車代駕</strong>：如果您正在規劃一個特別的活動，如婚禮，慶典，或者其他重要的慶祝活動，我們的Alphard、LM車型和專業的司機服務是您的理想選擇。我們的司機會確保您的活動能夠順利進行，讓您和您的賓客有一個難忘的經驗。
                        </li>
                    </ol>
                </div>
            </div>
            <h2>{{ fromLocation.name }}包車價目表</h2>
            <h3><a href="https://www.taiwantourcar.com/travel/" target="_blank">看最新包車價目表</a></h3>
            <p>此價目表為北部出發價格參考，各地最新價格以上方連結為主</p>
            <div class="content align-items-center">
                <div class="section portion6">
                    <table>
                        <thead>
                            <tr>
                                <th>包車時間</th>
                                <th>4人座</th>
                                <th>7人座</th>
                                <th>9人座</th>
                                <th>11人座</th>
                                <th>多人團體</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><ul><li>ALTIS</li><li>CAMRY</li><li>RAV4</li></ul></td>
                                <td><ul><li>WISH</li><li>SIENTA</li><li>CADDY</li></ul></td>
                                <td><ul><li>福斯T5/T6</li><li>現代/福特</li><li>賓士VITO</li></ul></td>
                                <td><ul><li>賓士明星保姆車</li><li>福斯保姆車</li></ul></td>
                                <td rowspan="5"><ul><li>原裝中巴21座</li><li>小可愛21~24座</li></ul><br />※各式遊覽車數量相當齊全，全台各地皆可發車，歡迎洽詢<br /><br />※另依行程及使用時間報價</td>
                            </tr>
                            <tr>
                                <td>4小時</td><td>2800</td><td>3000</td><td>3400</td><td>6200</td>
                            </tr>
                            <tr>
                                <td>6小時</td><td>3200</td><td>3500</td><td>4200</td><td>7200</td>
                            </tr>
                            <tr>
                                <td>8小時</td><td>3600</td><td>4000</td><td>5000</td><td>8800 (10小時)</td>
                            </tr>
                            <tr>
                                <td>逾時每小時</td><td>400</td><td>400</td><td>500</td><td>600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="section portion3">
                    <img src="https://www.taiwantourcar.com/wp-content/uploads/2022/10/211977.jpg" />
                </div>
            </div>
            <h2>{{ fromLocation.name }}機場、高鐵接送價格表</h2>
            <h3><a href="https://www.taiwantourcar.com/airport/" target="_blank">看最新機場港口接送價格表</a></h3>
            <p>最新價格以上方連結為主</p>
            <div class="content align-items-center">
                <div class="section portion6">
                    <table>
                        <thead>
                        <tr>
                            <th></th><th>台北松山</th><th>桃園中正</th><th>台中清泉崗</th><th>高雄小港</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>雙北市區</td><td>1600</td><td>1900</td><td>3800</td><td>7000</td>
                        </tr>
                        <tr>
                            <td>桃園市區</td><td>1900</td><td>1700</td><td>3200</td><td>6500</td>
                        </tr>
                        <tr>
                            <td>新竹市區</td><td>2500</td><td>2200</td><td>2800</td><td>6000</td>
                        </tr>
                        <tr>
                            <td>苗栗市區</td><td>3300</td><td>2800</td><td>2600</td><td>5700</td>
                        </tr>
                        <tr>
                            <td>台中市區</td><td>3800</td><td>3200</td><td>2000</td><td>5000</td>
                        </tr>
                        <tr>
                            <td>南投市區</td><td>4800</td><td>4400</td><td>2700</td><td>4800</td>
                        </tr>
                        <tr>
                            <td>彰化市區</td><td>4200</td><td>3600</td><td>2500</td><td>4700</td>
                        </tr>
                        <tr>
                            <td>雲林市區</td><td>4800</td><td>4300</td><td>3200</td><td>4300</td>
                        </tr>
                        <tr>
                            <td>嘉義市區</td><td>5400</td><td>5000</td><td>3600</td><td>3600</td>
                        </tr>
                        <tr>
                            <td>台南市區</td><td>6400</td><td>5800</td><td>4500</td><td>2500</td>
                        </tr>
                        <tr>
                            <td>高雄市區</td><td>7000</td><td>6500</td><td>5000</td><td>1600</td>
                        </tr>
                        <tr>
                            <td>屏東市區</td><td>8000</td><td>7600</td><td>5800</td><td>1800</td>
                        </tr>
                        <tr>
                            <td>宜蘭市區</td><td>3000</td><td>3600</td><td>5500</td><td>8500</td>
                        </tr>
                        <tr>
                            <td>花蓮市區</td><td>6000</td><td>6500</td><td>8300</td><td>9200</td>
                        </tr>
                        <tr>
                            <td>台東市區</td><td>8500</td><td>9000</td><td>8200</td><td>5200</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
                <div class="section portion3">
                    <img src="https://www.taiwantourcar.com/wp-content/uploads/2022/03/driver-with-opened-car-door.jpg" />
                </div>
            </div>
            <h2>{{ fromLocation.name }}包車評價推薦</h2>
            <div class="content">
                <div class="faq-container">
                    <img src="https://www.taiwantourcar.com/wp-content/uploads/2022/06/tboard.png" />
                    <div class="wp-fbrevedit wpacedit"><div class="wp-facebook-list"><div class="wp-facebook-place"><div class="wp-facebook-left"><img src="https://www.taiwantourcar.com/wp-content/uploads/2021/06/picture.jpg" alt="夢玩家包車旅遊" width="50" height="50" title="夢玩家包車旅遊" /></div><div class="wp-facebook-right"><div class="wp-facebook-name"><a href="https://fb.com/2208408916142283" target="_blank" rel="nofollow noopener external noreferrer" data-wpel-link="external" ><span>夢玩家包車旅遊</span></a ></div><div><span class="wp-facebook-rating">5.0</span ><span class="wp-facebook-stars"></span></div><div class="wp-facebook-powered">來自臉書404則評論</div><div class="wp-facebook-powered">powered by<span>Facebook</span></div></div></div><div class="wp-facebook-content-inner"><div class="wp-facebook-reviews" ref="reviewsContainer"><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000070.jpg" class="rplg-review-avatar" alt="Hsin Hsin Wang" width="50" height="50" title="Hsin Hsin Wang" /></div><div class="wp-facebook-right"><a href="https://facebook.com/4143769525728770" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Hsin Hsin Wang</a ><div class="wp-facebook-time" data-time="2021-11-30T13:28:06+0000">4 months ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >這次員工旅遊，遊覽車指派的張司機熱心幫忙，整個行程很順利的完美結束了，很開心。推推～～夢玩家包車旅遊～～</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000195.jpg" class="rplg-review-avatar" alt="潘婷" width="50" height="50" title="潘婷" /></div><div class="wp-facebook-right"><a href="https://facebook.com/3053616238054353" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >潘婷</a ><div class="wp-facebook-time" data-time="2020-06-24T04:31:03+0000">a year ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >一開始聯絡的窗口非常親切專業有耐心，到出發三天兩夜的愉快包遊覽車經驗，21人座小可愛，車內乾淨舒適，司機童小姐親切認真的服務，大家都非常滿意，價錢親民合理，很值得大家的選擇！</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000179.jpg" class="rplg-review-avatar" alt="鄭娟" width="50" height="50" title="鄭娟" /></div><div class="wp-facebook-right"><a href="https://facebook.com/3065936290159042" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >鄭娟</a ><div class="wp-facebook-time" data-time="2020-07-05T14:41:45+0000">a year ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >非常感謝7/4-7/5暖心的幫忙 真的是很值得推薦的公司 車子是小巴三人舒服的座椅 <img draggable="false" role="img" class="emoji" alt="💺" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f4ba.svg" />司機大哥人好 開車技術又好 開山路讓原本會暈車的我們不暈 又安心的唱歌 非常感謝讓我們有美好的回憶也讓我們這趟奇幻的員工旅程有一個完美的結束</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000001.jpg" class="rplg-review-avatar" alt="張小萍" width="50" height="50" title="張小萍" /></div><div class="wp-facebook-right"><a href="https://facebook.com/1320470538432988" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >張小萍</a ><div class="wp-facebook-time" data-time="2022-04-07T13:27:43+0000">2 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >第一次包車旅行，很開心免費升等，司機李先生很nice，開車很穩，也會介紹好吃好玩的景點，超級推薦….</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000002.jpg" class="rplg-review-avatar" alt="杜宗育" width="50" height="50" title="杜宗育" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5283930464972795" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >杜宗育</a ><div class="wp-facebook-time" data-time="2022-04-06T13:35:44+0000">3 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >這是我第一次使用夢玩家包車旅遊服務，從詢價、訂車、確認訂單、到實際旅遊都是非常愉快的經驗，非常值得推薦給有需求的網友，司機小明大哥服務很貼心</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000003.jpg" class="rplg-review-avatar" alt="周峰雄" width="50" height="50" title="周峰雄" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5090852577658551" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >周峰雄</a ><div class="wp-facebook-time" data-time="2022-04-04T13:48:02+0000">5 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >這是我第一次使用夢玩家包車旅遊服務，從詢價、訂車、確認訂單、到實際旅遊都是非常愉快的經驗，非常值得推薦給有需求的網友</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000004.jpg" class="rplg-review-avatar" alt="楊捷翔" width="50" height="50" title="楊捷翔" /></div><div class="wp-facebook-right"><a href="https://facebook.com/1867348703474156" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >楊捷翔</a ><div class="wp-facebook-time" data-time="2022-04-04T00:56:55+0000">6 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >司機人超好的的 如果下次還有要再訂 下次一定</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000005.jpg" class="rplg-review-avatar" alt="陳正華" width="50" height="50" title="陳正華" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5715809158445569" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >陳正華</a ><div class="wp-facebook-time" data-time="2022-03-31T16:21:14+0000">9 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >小李先生車內可充電，手機架，置物架設備齊全，駕駛技術ㄧ流，坐在最後一排不會暈車，下次出遊首選小李</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000006.jpg" class="rplg-review-avatar" alt="Qing Yun" width="50" height="50" title="Qing Yun" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5137245059665555" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Qing Yun</a ><div class="wp-facebook-time" data-time="2022-03-31T08:20:02+0000">9 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >謝謝夢玩家包車旅遊的專業服務這次是替家人安排兩天一夜的宜蘭行從詢問包車事宜到細節確認接待的客服人員都親切詳細解釋回應<img draggable="false" role="img" class="emoji" alt="😊" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f60a.svg" />更感謝在三月底服務家人宜蘭行的黃先生<img draggable="false" role="img" class="emoji" alt="🤗" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f917.svg" />家人兩天一夜的行程謝謝黃先生的照顧家人回到家非常讚賞黃先生的優質服務<span >... </span ><span class="wp-more">再次包車選擇一定是首選“夢玩家”</span ><span class="wp-more-toggle">read more</span></span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000007.jpg" class="rplg-review-avatar" alt="文翊力" width="50" height="50" title="文翊力" /></div><div class="wp-facebook-right"><a href="https://facebook.com/4922433481188990" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >文翊力</a ><div class="wp-facebook-time" data-time="2022-03-31T07:53:29+0000">9 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >詹司機超親切～整趟旅程非常愉快！～～～</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000008.jpg" class="rplg-review-avatar" alt="Laura Chao" width="50" height="50" title="Laura Chao" /></div><div class="wp-facebook-right"><a href="https://facebook.com/2400532733419340" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Laura Chao</a ><div class="wp-facebook-time" data-time="2022-03-30T15:41:39+0000">10 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >真的很不錯! 《夢玩家》line上聯繫清楚，快速。郭先生也非常的細心, 在等待的過程中耐心聆聽長輩說話，本人駕駛技術也超好,尤其是因為有長輩在車上，行徑的路程都特意緩慢及平穩<span >... </span ><span class="wp-more" >，老人家上下車小心的護著，真的好感謝好感謝。也很感恩，讓媽媽能有一趟安全舒適的出行……謝謝你們……</span ><span class="wp-more-toggle">read more</span></span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000009.jpg" class="rplg-review-avatar" alt="徐繹舜" width="50" height="50" title="徐繹舜" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5705233809493864" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >徐繹舜</a ><div class="wp-facebook-time" data-time="2022-03-16T17:03:11+0000">24 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >非常自由的客製化行程，還會依照你的行程報價確認，此次還被免費升級車款，司機鍾大哥非常nice，幫開車門還會介紹好吃餐廳，有機會會在預約夢玩家包車。</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000010.jpg" class="rplg-review-avatar" alt="Tsai Hsiu-ju" width="50" height="50" title="Tsai Hsiu-ju" /></div><div class="wp-facebook-right"><a href="https://facebook.com/4934231366623927" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Tsai Hsiu-ju</a ><div class="wp-facebook-time" data-time="2022-03-16T10:33:48+0000">24 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >非常非常舒適 司機超級棒～值得推薦</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000011.jpg" class="rplg-review-avatar" alt="Wan Cheng" width="50" height="50" title="Wan Cheng" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5043888325698911" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Wan Cheng</a ><div class="wp-facebook-time" data-time="2022-03-13T12:32:28+0000">27 days ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text">客服人員態度很好 司機很nice</span></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000012.jpg" class="rplg-review-avatar" alt="Amber Chung" width="50" height="50" title="Amber Chung" /></div><div class="wp-facebook-right"><a href="https://facebook.com/5190648467623782" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Amber Chung</a ><div class="wp-facebook-time" data-time="2022-03-09T04:59:34+0000">a month ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >司機陳家偉先生 超級推薦！準時抵達，開車又穩，長輩們都很放心<img draggable="false" role="img" class="emoji" alt="😊" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f60a.svg" /><img draggable="false" role="img" class="emoji" alt="😊" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f60a.svg" /></span></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000013.jpg" class="rplg-review-avatar" alt="Anita Anita" width="50" height="50" title="Anita Anita" /></div><div class="wp-facebook-right"><a href="https://facebook.com/10217831047962668" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >Anita Anita</a ><div class="wp-facebook-time" data-time="2022-03-08T15:09:11+0000">a month ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >推薦因這次都是上了年紀的老人家，陳先生會幫我們開車門，協助老人們安全上車後再出發，行車過程也小心安全，很穩。另外在過程中也有老人喜歡指揮陳先生該怎麼走，走哪條路，他都有耐心回覆。很開心第一次找包車的經驗是這樣的好，所以很推。</span ></div></div></div><div class="wp-facebook-review"><div class="wp-facebook-left"><img src="https://skytour.tw/wp-content/uploads/2022/04/000014.jpg" class="rplg-review-avatar" alt="阮嫈娜" width="50" height="50" title="阮嫈娜" /></div><div class="wp-facebook-right"><a href="https://facebook.com/4893953857325478" class="wp-facebook-name" target="_blank" rel="nofollow noopener" >阮嫈娜</a ><div class="wp-facebook-time" data-time="2022-03-07T13:22:37+0000">a month ago </div><div class="wp-facebook-feedback"><span class="wp-facebook-stars"></span ><span class="wp-facebook-text" >司機服務很好，車況也很好下次有機會還會再請你們服務喔</span ></div></div></div></div></div></div></div><a href="https://www.facebook.com/taiwantourcar/" target="_blank" class="moretestimonials" >看更多評價</a>
                </div>
            </div>
            <h2>{{ fromLocation.name }}車款介紹</h2>
            <h3><a href="https://www.facebook.com/taiwantourcar/" target="_blank">看更多車款介紹(包含五人座、七人座、九人座各式車款)</a></h3>
            <div class="content">
                <div class="section portion45">
                    <h3><a href="https://www.taiwantourcar.com/volkswagen-crafter-2-0l/">大T保母車</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2019/09/S__31154233.jpg');">
                    </div>
                    <p>旅客人數5~8人，通常安排九人座車，座位相當舒適，即使在長途旅程也能相當放鬆。車上有環繞音效卡啦OK供乘客一路歡唱,後座也有足夠的空間置放行李。適合全家大小一起外出旅遊的最優質選擇。
                    </p>
                    <ul>
                        <li>適合各地一日遊、多日遊、環島旅遊、各地接送、機場接送、家庭親子旅遊、商務接洽、外賓來訪、婚紗外拍</li>
                        <li>商務艙豪華獨立座椅</li>
                        <li>電動滑門與登車輔助踏板，長輩孩童上下車輛輕鬆自如。</li>
                        <li>商務艙豪華獨立座椅</li>
                    </ul>
                </div>
                <div class="section portion45">
                    <h3><a href="https://www.taiwantourcar.com/benz-vito-tourer/">賓士九人座</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo09.jpg');">
                    </div>
                    <p>針對商務人士所需的機能、空間、舒適、安全等面向打造最頂級的移動環境，柴油動力對應滿載遊刃有餘，舒適懸吊讓奔馳如履平地。
                    </p>
                    <p>考量優化載員的需求，更將車身格局向上提升，並將空間運用效率極大化，輕鬆置入3+3+3共三排座椅、包含駕駛在內的九人座空間基礎，搭配右側滑門，於狹小的窄巷中乘客也可以俐落上下車。</p>
                </div>
                <div class="section portion45">
                    <h3><a href="https://www.taiwantourcar.com/muti-car-intro-2019/">Toyota&nbsp; ALPHARD</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2019/10/Alphard_190927_0009.jpg');">
                    </div>
                    <p>Toyota
                        Alphard以霸氣車身外表聞名，直立水箱護罩與大器頭燈馳騁之間足以撼動全場，又配有Semi-Aniline真皮包覆頭等艙，精緻木紋飾板點綴扶手，寧靜舒適的車內空間使每位貴賓享受無以倫比的乘車體驗。
                    </p>
                    <ul>
                        <li>車頂配有兩面大範圍天窗，使車內視野絕不受限。</li>
                        <li>後座13.3吋影音系統，與17具獨立環繞音響，享受視覺與聽覺震撼。</li>
                        <li>左右兩側電動滑門與登車輔助踏板，長輩孩童上下車輛輕鬆自如。</li>
                        <li>本車搭載7具SRS氣囊，提供最嚴密的車內防護，並結合高剛性GOA車體，達成全方位的安全守護。</li>
                    </ul>
                </div>
                <div class="section portion45">
                    <h3><a href="https://www.taiwantourcar.com/%e7%a6%8f%e6%96%af%e4%b9%9d%e4%ba%ba%e5%ba%a7t6-t5%e7%a7%9f%e8%bb%8a%e9%99%84%e9%a7%95%e9%a7%9b%ef%bc%8c%e5%9c%8b%e5%85%a7%e6%97%85%e9%81%8a%e4%b8%83%e4%ba%ba%e3%80%81%e4%b9%9d%e4%ba%ba%e5%ba%a7/">福斯九人座</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2022/03/2560x1440_T6.webp');">
                    </div>
                    <p>夢玩家專營全台灣包車旅遊、點對點接送、機場接送，提供安全快速的交通服務讓您自在旅遊輕鬆無負擔，
不管是 商務接送、環島包車、婚禮外拍包車、器材運送皆可為您服務，24HR尊榮服務管理，安全隱私，歡迎立即預約！高質感內裝與靈活彈性的寬敞空間，致力創造旅程中的美好回憶。
                    </p>
                </div>
            </div>
            <h2>{{ fromLocation.name }}包車流程</h2>
            <ol>
                <li>貴賓詢價並提供日期、地點、行程內容後，客服人員協助確認車輛。</li>
                <li>為您確認車輛後，報價並提供訂車單與車輛參考照片，接續付訂流程。</li>
                <li>完成訂金支付，確認收款即完成訂車手續。</li>
                <li>出發前二日將提供您車籍資料與駕駛資訊，司機將於前一日與您取得聯繫。</li>
            </ol>
            <div class="content align-items-center">
                <div class="section portion3">
                    <div class="faq-container">
                        <div class="faq-item">
                            <h3 class="faq-question">1. 請問貴公司提供之車輛合法性?</h3>
                            <p class="faq-answer">本公司所安排之車輛皆為有保險保障之「租賃車」(車牌為R開頭)，絕非不能營業載客且沒有保險理賠的「白牌車」(如其他A、B、C等字頭車牌)</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">2. 訂單何時成立？</h3>
                            <p class="faq-answer">在客服人員與您雙向確認乘車資訊後，會請您支付訂金以確保訂單權益，確認收取您訂金後訂單將即刻生效。</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">3. 付款方式與發票開立</h3>
                            <p class="faq-answer">
                                本公司提供轉帳匯款及信用卡線上支付，信用卡支付皆支援3D驗證等安全措施，讓您無須擔心遭受盜刷或個資外流；本公司合法開立發票(二聯或三聯)，包車所提供之報價皆以未稅登載。</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">4. 包車費用包含?</h3>
                            <p class="faq-answer">客服人員報價時，會將價格詳加記載是否包含司機餐費、住宿費、停車費、燃料費、過路費等，亦不會於用車過程中臨時加價，造成爭議。</p>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">5. 訂車時所需提供資訊</h3>
                            <ul class="faq-answer">
                                <li>日期(確認是否有車)</li>
                                <li>人數(確認所安排車款是否合法載運)</li>
                                <li>上下車位置(確認流程順暢)</li>
                                <li>大致行程及用車天數(確認行程遠近、路程長度及司機住宿位置費用…等等)</li>
                            </ul>
                        </div>
                        <div class="faq-item">
                            <h3 class="faq-question">6. 需於提早多久時間，確認訂車？</h3>
                            <p class="faq-answer">預訂車輛建議一個月前，才免於沒車可訂哦!</p>
                        </div>
                    </div>
                </div>
                <div class="section portion6">
                    <h3>包車旅遊保險</h3>
                    <p>台中南投旅遊包車除了要選適合自己的車款之外，最重要的還是安全與合法性，夢玩家建議大家在選擇台灣旅遊包車車隊時，務必要確認是否是合法立案之公司。車輛的新舊程度、車齡與保險資料，都必須要能夠透明化被檢驗。</p>
                    <h4>包車接送保險全面有保障</h4>
                    <img src="https://www.taiwantourcar.com/wp-content/uploads/2022/10/3213506.jpg" />
                    <p>夢玩家提供最完整的保障，投保金額不馬虎，保單紀錄完整責任清楚。</p>
                    <h3>汽車強制險</h3>
                    <p>目前的法規強制汽車所有人投保責任保險，當被保險汽車肇事導致受害人遭受損害，可由保險公司負賠償及給付保險金予受害人之責任。</p>
                    <h3>乘客責任險</h3>
                    <p>提供給非駕駛的乘客保障，萬一發生車禍，車上乘客有任何受傷皆可獲得理賠。</p>
                    <h3>車輛合法與定期保養</h3>
                    <p>台中夢玩家包車旅遊每一輛車都有定期保養，隨時都保持在最佳狀態，我們提供專業的包車旅遊服務，行程規劃或是旅遊時間，經過詳細詢問、溝通後，就可以準備行李，跟著專業導遊司機一同，品嘗各地台灣小吃、玩遍台灣各大景點，快樂出發囉！</p>
                </div>
            </div>
            <h2>{{ fromLocation.name }}包車常見問題</h2>
            <div class="content">
                <div class="faq-container">
                    <div class="faq-item">
                        <h3 class="faq-question">1. 包車是否能到府接送？</h3>
                        <p class="faq-answer">可以。包車就是免去自駕的困擾，直接在家到府或者指定地點上下車接送。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">2. 租車所附之駕駛，素質如何？</h3>
                        <p class="faq-answer">租車所提供之駕駛，皆具長期包車經驗且無負評之駕駛，且曾受負評之司機，概不派用。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">3. 所提供之車輛，是否合法？</h3>
                        <p class="faq-answer">租車所提供之車輛，皆為合法營業之租賃車或多元計程車，絕非無保險理賠隻白牌車(車牌A開頭或B開頭)。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">4. 包車費用是否包含司機誤餐費、司機住宿費、停車費及燃料費？</h3>
                        <p class="faq-answer">報價時，會將價格是否包含司機誤餐費、住宿費、停車費、燃料費、過路費等，詳細記載，亦絕不會於用車過程當中臨時加價，造成爭議。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">5. 是否要給包車駕駛小費？</h3>
                        <p class="faq-answer">小費為一種鼓勵性質的額外補貼，是否給予，以司機包車過程中，是否得到客人滿意為主，若客人們覺得司機真的服務周到且辛苦，都可以給予小費鼓勵哦!!</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">6. 包車行程可以自訂嗎？</h3>
                        <p class="faq-answer">行程皆由客人自行提供，網站上的景點路線，主要為建議及參考，駕駛主要按照客人提供之路線行駛，當然若路線不順，也會提供專業建議，節省交通時間之浪費。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">7. 有沒有限制用車出發時間？</h3>
                        <p class="faq-answer">每日出發時間由客人自訂，請最晚於前一天告知客服或司機，建議不要晚於11點出發。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">8. 每天用車時數，若無使用完畢是否能退費？</h3>
                        <p class="faq-answer">包車為預約制，租車所附之駕駛於行程出發後，司機的工作時間皆已保留給客人，若因為客人行程提早而結束用車，司機也無法另外安排其他客人，因此不會另外退費哦!!</p>
                    </div>
                </div>


            </div>
            <h2>{{ fromLocation.name }}家庭/企業包車活動花絮</h2>
            <h3><a href="https://www.taiwantourcar.com/itinerary/" target="_blank">包車行程推薦</a></h3>
            <h3><a href="https://www.facebook.com/taiwantourcar/" target="_blank">看更多包車成功案例</a></h3>
            <div class="content">
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/wp-content/uploads/2022/10/211982.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo01.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo02.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo03.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo04.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://www.taiwantourcar.com/assets/polo05.jpg');">
                    </div>
                </div>
            </div>

            <h2>為什麼選擇 夢玩家包車旅遊 Taiwan Tour Car</h2>
            <div class="content">
                <div class="section portion3">
                    <i class="fa fa-rocket" aria-hidden="true"></i>
                    <h3>即時聯繫</h3>
                    <p>從事前訂車起，無論您是需要包車旅遊，或是尋求接送服務，我們的客服人員都能隨時為您提供專業的諮詢並把關。我們瞭解每一位客戶的需求都是獨一無二的，因此，我們始終全程為您提供個性化的服務，以確保您的用車體驗能夠無縫銜接，且能滿足您的各種需求。
                    </p>
                </div>

                <div class="section portion3">
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <h3>合法可靠</h3>
                    <p>我們是政府立案的公司，完全符合政府的各種規定。我們不僅秉持著最高的安全和服務標準，更進一步對所有乘客進行全額投保，確保在您使用我們的包車服務時，能夠得到最完善的保障。我們的目標是提供安全可靠的服務，同時確保每位乘客都能擁有愉快的包車體驗。
                    </p>
                </div>

                <div class="section portion3">
                    <i class="fa fa-id-badge" aria-hidden="true"></i>
                    <h3>專業駕駛</h3>
                    <p>我們的駕駛員都是擁有職業執照的專業人員，且每位駕駛員都會定期接受嚴格的考核，以確保他們的專業技能始終保持在最高水準。此外，我們的團隊中也包括擁有國家級禮賓的豐富經驗的駕駛員。無論您選擇我們的包車服務，或是點對點接送服務，我們都確保您將得到最專業、最高水準的駕駛服務。
                    </p>
                </div>
            </div>
        </div>
        <TheFooter />
        <TheContact />
    </div>
</template>

<script>
export default {
  computed: {
    fromLocation() {
      return this.$store.state.fromLocation;
    },
  },
};
</script>