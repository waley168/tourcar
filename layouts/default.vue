<template>
    <div>
        <TheHeader />
        <div class="entry-content">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a rel="noopener noreferrer" href="https://wholealphard.com/">首頁</a></li>
                    <li aria-current="page" class="breadcrumb-item active">{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車|商務租車|家庭旅遊|到府牽車</li>
                </ol>
            </nav>
            <div class="hero-img"
                style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/wholealphard-banner01.png');">
            </div>
            <nuxt></nuxt>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車服務項目</h2>
            <div class="content">
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/17s04004_01_photo01_with_car_347e5393ed0cc6c120c2afc74c3d8aa3-thumb-600xauto-1315.jpg');">
                    </div>
                    <h3>個人租車自駕</h3>
                    <ol>
                        <li><strong>租車旅遊</strong>：在我們的網站上，您可以輕鬆租用Alphard車型，為您的道路旅行提供最大的舒適性和便利性。我們的Alphard車型空間寬敞，不僅適合家庭旅遊，也是朋友聚會的理想選擇。
                        </li>
                        <li><strong>醫美旅行</strong>：規劃一趟醫美之旅？選擇我們的Alphard車型，讓您的旅程更加舒適和私密。無論是前往高級醫美診所或醫療設施，我們的車輛都能提供您最安全，最隱私，最舒適的環境。阿法的內裝豪華，讓您的醫美之旅增添尊貴與高級感。
                        </li>
                        <li><strong>商務出差</strong>：如果您需要前往商務會議或活動，我們的Alphard車型也是您的理想選擇。它的豪華內裝和舒適設計將確保您的旅程愉快並保持生產力。另外，您也可以考慮使用我們的代駕服務，根據自己的時間表自由行動，不需要依賴公共交通工具。
                        </li>
                        <li><strong>家庭聚會</strong>：如果您正在計劃一個家庭聚會，或者需要在旅遊時攜帶大件行李，我們的阿法車型是您的理想選擇。它的寬敞內部空間可以容納大量的行李或物品，而且我們的車輛都配備了先進的安全功能，以確保您和您的家人的安全。
                        </li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/2022_015_001-1024x683-1.jpg');">
                    </div>
                    <h3>企業/公司行號長期租賃</h3>
                    <h4>多日承租享牽車到府服務</h4>
                    <ol>
                        <li><strong>長期商務租賃</strong>：我們提供阿法車型給企業或公司行號進行長期租賃。無論您需要車輛接待重要客戶，或者是為員工提供舒適的交通方式，我們的Alphard車型都能滿足您的需求。其豪華內裝和先進的安全設施，必定讓您的公司在客戶或員工心中留下深刻的印象。
                        </li>
                        <li><strong>企業活動租車</strong>：如果您的公司正在規劃企業活動，如團建活動、展覽會、研討會等，我們的Alphard車型都是不二之選。我們的長期租賃方案可以為您提供最大的靈活性和便利性，讓您的企業活動得以順利進行。
                        </li>
                        <li><strong>員工福利車輛</strong>：我們的阿法車型也適合作為員工福利車輛。您的員工將對於能夠使用這種豪華的車輛感到驚喜。長期租賃計劃可以幫助您節省時間和精力，不需要自己進行車輛的維護和管理。
                        </li>
                        <li><strong>公司接送服務</strong>：我們的Alphard車型也可以用於公司的接送服務。無論是接送員工上下班，還是為VIP客戶提供接送服務，我們的車輛都能提供高水準的服務。</li>
                    </ol>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/cjen.png');">
                    </div>
                    <h3>包車代駕/租車附司機</h3>
                    <ol>
                        <li><strong>旅遊包車代駕</strong>：我們的Alphard車型提供包車代駕服務，讓您可以無憂地享受您的旅程。我們的專業司機能夠帶您探索台灣的每一個角落，讓您的旅行更加輕鬆和舒適。在旅遊期間，您無需擔心停車或導航問題，只需專心享受您的旅行。
                        </li>
                        <li><strong>商務包車代駕</strong>：我們的阿法車型適合商務包車代駕服務。無論是接待重要的客戶，或者是前往重要的商務會議，我們的專業司機和豪華的Alphard車型都能為您提供最高級的服務。
                        </li>
                        <li><strong>活動包車代駕</strong>：如果您正在規劃一個特別的活動，如婚禮，慶典，或者其他重要的慶祝活動，我們的Alphard車型和專業的司機服務是您的理想選擇。我們的司機會確保您的活動能夠順利進行，讓您和您的賓客有一個難忘的經驗。
                        </li>
                    </ol>
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車價目表</h2>
            <div class="content">
                <div class="section portion3">
                    <table>
                        <thead>
                            <tr>
                                <th>租車專案</th>
                                <th>價格 / 時間</th>
                                <th>說明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>一日租車</td>
                                <td>$<span id="rent-one-day"></span> / 日</td>
                                <td>每日以24小時計算，單日行駛里程數250公里。</td>
                            </tr>
                            <tr>
                                <td>多日租車</td>
                                <td>$<span id="rent-multi-days"></span> / 日</td>
                                <td>多日租優惠：承租2日（含）以上，優惠單日里程為300公里。</td>
                            </tr>
                            <tr>
                                <td>企業長期租賃</td>
                                <td colspan="2">請來電洽詢優惠價格</td>
                            </tr>
                            <!-- Add more rows as needed -->
                        </tbody>
                    </table>
                    <h3>牽車到府收還</h3>
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">到府收送阿法</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>高屏地區</td>
                                <td>租車3日（含）以上，提供免費到府收送</td>
                            </tr>
                            <tr>
                                <td>雲嘉南地區</td>
                                <td>租車4日（含）以上，提供免費到府收送</td>
                            </tr>
                            <tr>
                                <td>中彰投地區</td>
                                <td>租車5日（含）以上，提供免費到府收送</td>
                            </tr>
                            <!-- Add more rows as needed -->
                        </tbody>
                    </table>
                </div>
                <div class="section portion6">
                    <img src="https://wholealphard.com/wp-content/uploads/2023/06/plan.png" />
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}Alphard包車價格</h2>
            <div class="content">
                <div class="section portion3">
                    <table>
                        <thead>
                            <tr>
                                <th>出發地點</th>
                                <th>包車類型</th>
                                <th>價格 / 時間</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>台北市區</td>
                                <td>Alphard包車一日</td>
                                <td>$<span id="chartered-one-day-taipei"></span> / 8小時</td>
                            </tr>
                            <tr>
                                <td>台中市區</td>
                                <td>Alphard包車一日</td>
                                <td>$9,200 / 8小時</td>
                            </tr>
                            <tr>
                                <td>台南市區</td>
                                <td>Alphard包車一日</td>
                                <td>$9,600 / 8小時</td>
                            </tr>
                            <tr>
                                <td>高雄市區</td>
                                <td>Alphard包車一日</td>
                                <td>$9,200 / 8小時</td>
                            </tr>
                            <!-- Add more rows as needed -->
                        </tbody>
                    </table>
                </div>
                <div class="section portion6">
                    <img src="https://wholealphard.com/wp-content/uploads/2023/06/price.png" />
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車評價推薦</h2>
            <figure
                class="wp-block-gallery has-nested-images columns-2 uag-masonry uagb-block-a967a954 wp-block-gallery-4 is-layout-flex">
                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="761" height="936"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001.png" alt="" class="wp-image-129"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001.png 761w, https://wholealphard.com/wp-content/uploads/2023/06/0001-244x300.png 244w, https://wholealphard.com/wp-content/uploads/2023/06/0001-122x150.png 122w"
                        sizes="(max-width: 761px) 100vw, 761px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="751" height="169"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-1.png" alt="" class="wp-image-130"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-1.png 751w, https://wholealphard.com/wp-content/uploads/2023/06/0001-1-300x68.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-1-150x34.png 150w"
                        sizes="(max-width: 751px) 100vw, 751px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="676" height="761"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-2.png" alt="" class="wp-image-131"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-2.png 676w, https://wholealphard.com/wp-content/uploads/2023/06/0001-2-266x300.png 266w, https://wholealphard.com/wp-content/uploads/2023/06/0001-2-133x150.png 133w"
                        sizes="(max-width: 676px) 100vw, 676px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="879" height="165"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-3.png" alt="" class="wp-image-132"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-3.png 879w, https://wholealphard.com/wp-content/uploads/2023/06/0001-3-300x56.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-3-150x28.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-3-768x144.png 768w"
                        sizes="(max-width: 879px) 100vw, 879px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="884" height="171"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-4.png" alt="" class="wp-image-133"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-4.png 884w, https://wholealphard.com/wp-content/uploads/2023/06/0001-4-300x58.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-4-150x29.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-4-768x149.png 768w"
                        sizes="(max-width: 884px) 100vw, 884px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="675" height="825"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-5.png" alt="" class="wp-image-134"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-5.png 675w, https://wholealphard.com/wp-content/uploads/2023/06/0001-5-245x300.png 245w, https://wholealphard.com/wp-content/uploads/2023/06/0001-5-123x150.png 123w"
                        sizes="(max-width: 675px) 100vw, 675px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="876" height="220"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-6.png" alt="" class="wp-image-135"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-6.png 876w, https://wholealphard.com/wp-content/uploads/2023/06/0001-6-300x75.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-6-150x38.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-6-768x193.png 768w"
                        sizes="(max-width: 876px) 100vw, 876px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="877" height="257"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-7.png" alt="" class="wp-image-136"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-7.png 877w, https://wholealphard.com/wp-content/uploads/2023/06/0001-7-300x88.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-7-150x44.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-7-768x225.png 768w"
                        sizes="(max-width: 877px) 100vw, 877px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="799" height="231"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-8.png" alt="" class="wp-image-137"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-8.png 799w, https://wholealphard.com/wp-content/uploads/2023/06/0001-8-300x87.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-8-150x43.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-8-768x222.png 768w"
                        sizes="(max-width: 799px) 100vw, 799px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="669" height="149"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-9.png" alt="" class="wp-image-138"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-9.png 669w, https://wholealphard.com/wp-content/uploads/2023/06/0001-9-300x67.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-9-150x33.png 150w"
                        sizes="(max-width: 669px) 100vw, 669px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="754" height="188"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-10.png" alt="" class="wp-image-139"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-10.png 754w, https://wholealphard.com/wp-content/uploads/2023/06/0001-10-300x75.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-10-150x37.png 150w"
                        sizes="(max-width: 754px) 100vw, 754px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="878" height="236"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-11.png" alt="" class="wp-image-140"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-11.png 878w, https://wholealphard.com/wp-content/uploads/2023/06/0001-11-300x81.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-11-150x40.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-11-768x206.png 768w"
                        sizes="(max-width: 878px) 100vw, 878px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="880" height="333"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-12.png" alt="" class="wp-image-141"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-12.png 880w, https://wholealphard.com/wp-content/uploads/2023/06/0001-12-300x114.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-12-150x57.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-12-768x291.png 768w"
                        sizes="(max-width: 880px) 100vw, 880px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="757" height="902"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-13.png" alt="" class="wp-image-142"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-13.png 757w, https://wholealphard.com/wp-content/uploads/2023/06/0001-13-252x300.png 252w, https://wholealphard.com/wp-content/uploads/2023/06/0001-13-126x150.png 126w"
                        sizes="(max-width: 757px) 100vw, 757px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="882" height="168"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-14.png" alt="" class="wp-image-143"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-14.png 882w, https://wholealphard.com/wp-content/uploads/2023/06/0001-14-300x57.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-14-150x29.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-14-768x146.png 768w"
                        sizes="(max-width: 882px) 100vw, 882px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="876" height="307"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-15.png" alt="" class="wp-image-144"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-15.png 876w, https://wholealphard.com/wp-content/uploads/2023/06/0001-15-300x105.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-15-150x53.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-15-768x269.png 768w"
                        sizes="(max-width: 876px) 100vw, 876px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="752" height="160"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-16.png" alt="" class="wp-image-145"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-16.png 752w, https://wholealphard.com/wp-content/uploads/2023/06/0001-16-300x64.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-16-150x32.png 150w"
                        sizes="(max-width: 752px) 100vw, 752px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="674" height="796"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-17.png" alt="" class="wp-image-146"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-17.png 674w, https://wholealphard.com/wp-content/uploads/2023/06/0001-17-254x300.png 254w, https://wholealphard.com/wp-content/uploads/2023/06/0001-17-127x150.png 127w"
                        sizes="(max-width: 674px) 100vw, 674px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="670" height="139"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-18.png" alt="" class="wp-image-147"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-18.png 670w, https://wholealphard.com/wp-content/uploads/2023/06/0001-18-300x62.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-18-150x31.png 150w"
                        sizes="(max-width: 670px) 100vw, 670px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="878" height="224"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-19.png" alt="" class="wp-image-148"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-19.png 878w, https://wholealphard.com/wp-content/uploads/2023/06/0001-19-300x77.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-19-150x38.png 150w, https://wholealphard.com/wp-content/uploads/2023/06/0001-19-768x196.png 768w"
                        sizes="(max-width: 878px) 100vw, 878px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="759" height="881"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-20.png" alt="" class="wp-image-149"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-20.png 759w, https://wholealphard.com/wp-content/uploads/2023/06/0001-20-258x300.png 258w, https://wholealphard.com/wp-content/uploads/2023/06/0001-20-129x150.png 129w"
                        sizes="(max-width: 759px) 100vw, 759px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="753" height="161"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-21.png" alt="" class="wp-image-150"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-21.png 753w, https://wholealphard.com/wp-content/uploads/2023/06/0001-21-300x64.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-21-150x32.png 150w"
                        sizes="(max-width: 753px) 100vw, 753px"></figure>



                <figure class="wp-block-image size-large"><img decoding="async" loading="lazy" width="746" height="219"
                        src="https://wholealphard.com/wp-content/uploads/2023/06/0001-22.png" alt="" class="wp-image-151"
                        srcset="https://wholealphard.com/wp-content/uploads/2023/06/0001-22.png 746w, https://wholealphard.com/wp-content/uploads/2023/06/0001-22-300x88.png 300w, https://wholealphard.com/wp-content/uploads/2023/06/0001-22-150x44.png 150w"
                        sizes="(max-width: 746px) 100vw, 746px"></figure>
            </figure>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}車款介紹</h2>
            <div class="content">
                <div class="section portion45">
                    <h3><a href="https://wholealphard.com/alphard/">Toyota&nbsp; ALPHARD</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/left.png');">
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
                    <h3><a href="https://wholealphard.com/lm300h-chartered/">Lexus LM300h</a></h3>
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/right.png');">
                    </div>
                    <p>一眼可見LEXUS最新世代家族系列紡錘型水箱護罩，重新定義豪華移動新層峰，當您進入後座，迎接您的是OTTOMAN尊爵座椅，搭配專屬超大型26吋螢幕兼影音系統，構築一間能讓您隨心所欲的奢華休憩空間。
                    </p>
                    <ul>
                        <li>獨特星空內部車頂，搭配64種環繞氛圍燈飾，搖下椅背即是您專屬的銀河夜空。</li>



                        <li>中央配有獨立冷藏櫃，搭配可收納式木紋餐桌，不錯失每個值得歡慶的時刻。</li>



                        <li>搭配19具Mark Levinson鑑賞級揚聲器，創造靜謐車內的頂級影音饗宴。</li>



                        <li>針對車型獨家設計7具SRS動態氣囊，提供大範圍的安全保護，給您的旅程最安心的乘車體驗。</li>
                    </ul>
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車流程</h2>
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
                    </div>

                </div>
                <div class="section portion6">
                    <img src="https://wholealphard.com/wp-content/uploads/2023/06/flow.png" />
                </div>
            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}阿法租車常見問題</h2>
            <div class="content">
                <div class="faq-container">
                    <div class="faq-item">
                        <h3 class="faq-question">1. 燃油政策</h3>
                        <p class="faq-answer">請滿油取還，若未滿油，還車時依照當下油錶與當周公布油價計算。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">2. 超時用車，如何計價?</h3>
                        <p class="faq-answer">超時以每小時1000元計算，當日超過六小時者，以一日計算。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">3. 超出里程，如何計價?</h3>
                        <p class="faq-answer">行駛超過300公里後，每公里以30元計價累計。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">4. E-tag費用</h3>
                        <p class="faq-answer">取車時皆附有遠通電收之E-tag計價器，車輛租約期間所產生之通行費，將由遠通電收計算於還車時收取費用。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">5. 退訂政策</h3>
                        <p class="faq-answer">1. 租車出發前72小時前取消用車，免費取消。<br> 2. 租車出發前48小時前取消用車，扣取50%訂金費用。<br> 3.
                            租車出發前24小時前取消用車，訂金不退款。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">6. 是否需要預付押金或簽訂本票?</h3>
                        <p class="faq-answer">與本公司租車無須押金、無須簽本票。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">7. 全車輛禁菸並禁止寵物上車，如有違規相關罰款</h3>
                        <p class="faq-answer">若有發現異味或難清理之汙損，清潔費3000$起。</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">8. 承租期間衍生之費用負擔</h3>
                        <p class="faq-answer">停車費、交通罰鍰及交通違規導致之費用或損失皆由承租人負擔。</p>
                    </div>
                </div>


            </div>
            <h2>{{ fromLocation.name }}{{ toLocation.name ? ' - ' + toLocation.name : '' }}家庭/企業租車活動花絮</h2>
            <h3><a href="https://wholealphard.com/portfolio/">看更多阿法租車成功案例</a></h3>
            <div class="content">
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/331679807_581639717214048_1923827427844244959_n.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/Welcome-Summer.png');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/314406620_612613950655090_7076364152377970624_n.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/331995742_700697668506361_3198290605831809266_n.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/312025165_598242395425579_3971643028066456324_n.jpg');">
                    </div>
                </div>
                <div class="section portion3">
                    <div class="img-container"
                        style="background-image: url('https://wholealphard.com/wp-content/uploads/2023/06/S__33349680.jpg');">
                    </div>
                </div>
            </div>

            <h2>為什麼選擇 總發阿法租車 Whole Alphard</h2>
            <div class="content">
                <div class="section portion3">
                    <i class="fa fa-rocket" aria-hidden="true"></i>
                    <h3>即時聯繫</h3>
                    <p>從事前訂車起，無論您是需要阿法租車，或是尋求Alphard租車服務，我們的客服人員都能隨時為您提供專業的諮詢並把關。我們瞭解每一位客戶的需求都是獨一無二的，因此，我們始終全程為您提供個性化的服務，以確保您的用車體驗能夠無縫銜接，且能滿足您的各種需求。
                    </p>
                </div>

                <div class="section portion3">
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    <h3>合法可靠</h3>
                    <p>我們是政府立案的公司，完全符合政府的各種規定。我們不僅秉持著最高的安全和服務標準，更進一步對所有乘客進行全額投保，確保在您使用我們的阿法或Alphard租車服務時，能夠得到最完善的保障。我們的目標是提供安全可靠的服務，同時確保每位乘客都能擁有愉快的租車經驗。
                    </p>
                </div>

                <div class="section portion3">
                    <i class="fa fa-id-badge" aria-hidden="true"></i>
                    <h3>專業駕駛</h3>
                    <p>我們的駕駛員都是擁有職業執照的專業人員，且每位駕駛員都會定期接受嚴格的考核，以確保他們的專業技能始終保持在最高水準。此外，我們的團隊中也包括擁有國家級禮賓的豐富經驗的駕駛員。無論您選擇我們的阿法租車，或是Alphard租車，我們都確保您將得到最專業、最高水準的駕駛服務。
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
    toLocation() {
      return this.$store.state.toLocation;
    }
  },
};
</script>