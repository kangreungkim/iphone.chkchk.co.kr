
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About CHKCHK",
    "body": "ChkChk Blog는 가격히스토리를 제공하여 똑똑한 소비를 할 수 있도록 도와줍니다. 앞으로 많은 제품을 준비해서 포스팅 하겠습니다. . Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                             아이폰14 프로                              :               2023-04-27 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도. . . :                                                                                                                                                                       1,316,880원                                2023-02-09                                                                                                                                                                                                                                                                                                                        아이폰14                              :               2023-04-27 아이폰14 최저가 1,092,750원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인. . . :                                                                                                                                                                       1,092,750원                                2023-02-09                                                                                                                                  All Stories:                                                                                                     아이폰13              :       2023-04-27 아이폰13 최저가 1,046,300원 아이폰13 시리즈는 전작과 동일한 △아이폰13 △아이폰13 미니 △아이폰13 프로 △아이폰13 프로맥스 등 4종으로 구성됐다. 화면이 가장 작은 5. 4인치 미니, 가장 큰 6. 7인치 프로를 제외하면 ‘아이폰13’과 ‘아이폰13. . . :                                                                               1,046,300원                2023-03-09                                                                                                                                     아이폰 SE3              :       2023-04-27 아이폰 SE3 최저가 572,500원 아이폰SE의 작은 화면은 단점이지만, 반면 작은 사이즈의 스마트폰을 선호하는 소비자에게는 관심을 끌만하다. 아이폰SE 사이즈는 세로13. 8cm x 가로6. 7cm x 두께0. 7cm, 무게 144g으로 콤팩트하다. 특히 여성 사용자. . . :                                                                               572,500원                2023-02-09                                                                                                                                     아이폰14 프로맥스              :       2023-04-27 아이폰14 PROMAX 최저가 1,488,000원 아이폰14 프로와 아이폰14 프로 맥스는 거의 모든 기능이 동일합니다. 두 모델 모두 OLED Super Retina XDR 디스플레이, 상시 표시형 디스플레이, 다이내믹 아일랜드, A16 바이오닉 칩,. . . :                                                                               1,488,000원                2023-02-09                                                                                                                                     아이폰14 프로              :       2023-04-27 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도 같았던 전면 카메라 상단 ‘M자’. . . :                                                                               1,316,880원                2023-02-09                                                                                                                                     아이폰14 플러스              :       2023-04-27 아이폰14 PLUS 최저가 1,188,000원 아이폰14 PLUS의 장점은 배터리 용량입니다. 다른것은 전작과 14기본모델대비 뚜렷한 차이를 보이고 있지 않습니다. 아이폰 14 플러스의 배터리 용량은 현재까지 출시한 모든 아이폰 모델의 무게 대비. . . :                                                                               1,188,000원                2023-02-09                                                                                                                                     아이폰14              :       2023-04-27 아이폰14 최저가 1,092,750원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인 카메라의 화질 개선이다. 아이폰14 일자별. . . :                                                                               1,092,750원                2023-02-09                                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/IPHONE-13-Lineup/",
    "title": "아이폰13",
    "body": "2023/03/09 - 2023-04-27 아이폰13 최저가 1,046,300원 아이폰13 시리즈는 전작과 동일한 △아이폰13 △아이폰13 미니 △아이폰13 프로 △아이폰13 프로맥스 등 4종으로 구성됐다. 화면이 가장 작은 5. 4인치 미니, 가장 큰 6. 7인치 프로를 제외하면 ‘아이폰13’과 ‘아이폰13 프로’가 남는다. 두 모델 모두 6. 1인치다. 전체적인 외형은 큰 차이가 없다. 테두리가 화면과 직각을 이루는 각진 형태다. 다만 화면 상단을 움푹 판 듯한 ‘노치’가 전작 대비 약 20% 줄었다. 한 가지 큰 차이는 아이폰13은 ‘항공우주 등급 알루미늄’으로, 프로는 ‘수술 도구급 고강도 스테인리스 스틸’ 소재로 마감됐다는 것이다. 소재 차이로 인해 프로 모델이 조금 더 무겁다. 화면 크기는 동일함에도 아이폰13 무게는 173g, 아이폰13 프로는 203g이다. 아이폰13 일자별 판매가격 차트: 아이폰13 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13 그린 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 미드나이트 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 블루 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 스타라이트 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 그린 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 레드 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 블루 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 스타라이트 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 그린 512gb     512gb    1,349,000원    오늘 최저가구매        apple iphone13 레드 512gb     512gb    1,349,000원    오늘 최저가구매        apple iphone13 블루 512gb     512gb    1,349,000원    오늘 최저가구매        apple iphone13 스타라이트 512gb     512gb    1,349,000원    오늘 최저가구매        apple iphone13 핑크 512gb     512gb    1,349,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/IPHONE-SE3-Lineup/",
    "title": "아이폰 SE3",
    "body": "2023/02/09 - 2023-04-27 아이폰 SE3 최저가 572,500원 아이폰SE의 작은 화면은 단점이지만, 반면 작은 사이즈의 스마트폰을 선호하는 소비자에게는 관심을 끌만하다. 아이폰SE 사이즈는 세로13. 8cm x 가로6. 7cm x 두께0. 7cm, 무게 144g으로 콤팩트하다. 특히 여성 사용자 또는 손이 작은 사용자의 경우 한 손에 쏙 들어오고, 주머니에 잘 들어가는 아이폰SE가 편리하게 느껴질 것이다. 가벼운 폰 선호자라면 장점일 수도 아이폰 SE3 일자별 판매가격 차트: 아이폰 SE3 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphonese3 product red 64gb     64gb    640,000원    오늘 최저가구매        apple iphonese3 스타라이트 64gb     64gb    572,500원    오늘 최저가구매        apple iphonese3 product red 128gb     128gb    660,000원    오늘 최저가구매        apple iphonese3 미드나이트 128gb     128gb    651,560원    오늘 최저가구매        apple iphonese3 스타라이트 128gb     128gb    688,750원    오늘 최저가구매        apple iphonese3 product red 256gb     256gb    870,000원    오늘 최저가구매        apple iphonese3 미드나이트 256gb     256gb    870,000원    오늘 최저가구매        apple iphonese3 스타라이트 256gb     256gb    870,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/IPHONE-14-PROMAX-Lineup/",
    "title": "아이폰14 프로맥스",
    "body": "2023/02/09 - 2023-04-27 아이폰14 PROMAX 최저가 1,488,000원 아이폰14 프로와 아이폰14 프로 맥스는 거의 모든 기능이 동일합니다. 두 모델 모두 OLED Super Retina XDR 디스플레이, 상시 표시형 디스플레이, 다이내믹 아일랜드, A16 바이오닉 칩, 5G 통신, 프로급 카메라 및 동일한 색상을 제공합니다. 아이폰14 프로와 아이폰14 프로 맥스의 모든 차이점은 오직 디스플레이 크기 차이에서 기인합니다. 아이폰14 PROMAX 일자별 판매가격 차트: 아이폰14 PROMAX 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14promax 골드 128gb     128gb    1,509,200원    오늘 최저가구매        apple iphone14promax 딥퍼플 128gb     128gb    1,529,000원    오늘 최저가구매        apple iphone14promax 스페이스블랙 128gb     128gb    1,524,000원    오늘 최저가구매        apple iphone14promax 실버 128gb     128gb    1,488,000원    오늘 최저가구매        apple iphone14promax 골드 256gb     256gb    1,647,870원    오늘 최저가구매        apple iphone14promax 딥퍼플 256gb     256gb    1,695,560원    오늘 최저가구매        apple iphone14promax 스페이스블랙 256gb     256gb    1,660,000원    오늘 최저가구매        apple iphone14promax 실버 256gb     256gb    1,651,990원    오늘 최저가구매        apple iphone14promax 골드 512gb     512gb    2,024,000원    오늘 최저가구매        apple iphone14promax 딥퍼플 512gb     512gb    2,025,000원    오늘 최저가구매        apple iphone14promax 스페이스블랙 512gb     512gb    1,943,700원    오늘 최저가구매        apple iphone14promax 실버 512gb     512gb    1,943,040원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/IPHONE-14-PRO-Lineup/",
    "title": "아이폰14 프로",
    "body": "2023/02/09 - 2023-04-27 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도 같았던 전면 카메라 상단 ‘M자’ 형태 노치(화면 상단 테두리) 디자인이 카메라 모듈 부분만 구멍을 뚫은 펀치홀 카메라로 변경됐다. 펀치홀 카메라 부분은 하나의 디스플레이 창으로 이용할 수 있다. ###프로 시리즈만 AP·카메라 개선스마트폰의 두뇌 역할을 하는 애플리케이션프로세서(AP)도 모델별로 다르다. 아이폰14 프로 시리즈엔 최신형 AP인 ‘A16 바이오닉’ 칩이 장착됐다. 애플 AP 중 최초로 4㎚(나노미터·1㎚는 10억분의 1m) 공정에서 제작된 프로세서다. 애플은 “동급 경쟁 제품보다 최대 40% 빠르고, 전력 소비는 3분의 1 수준”이라고 설명했다. 일반 모델엔 전작 아이폰13 시리즈에 탑재됐던 A15 바이오닉을 넣었다. 이 외에 다양한 기능이 프로 시리즈에 집중됐다. 아이폰 처음으로 기존보다 화소 수를 4배 높인 4800만 화소 메인 카메라가 탑재됐다. 애플은 “전작보다 후면 카메라 이미지 센서가 63%가 커졌다”고 했다. 시간과 날씨 등 정보를 화면에 항상 표시하는 ‘AOD(올웨이즈 온 디스플레이)’ 기능도 프로 시리즈에서만 지원된다. 아이폰14 PRO 일자별 판매가격 차트: 아이폰14 PRO 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14pro 골드 128gb     128gb    1,316,880원    오늘 최저가구매        apple iphone14pro 딥퍼플 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 스페이스블랙 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 실버 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 골드 256gb     256gb    1,533,000원    오늘 최저가구매        apple iphone14pro 딥퍼플 256gb     256gb    1,484,100원    오늘 최저가구매        apple iphone14pro 스페이스블랙 256gb     256gb    1,533,000원    오늘 최저가구매        apple iphone14pro 실버 256gb     256gb    1,484,090원    오늘 최저가구매        apple iphone14pro 골드 512gb     512gb    1,840,000원    오늘 최저가구매        apple iphone14pro 딥퍼플 512gb     512gb    1,714,000원    오늘 최저가구매        apple iphone14pro 스페이스블랙 512gb     512gb    1,746,870원    오늘 최저가구매        apple iphone14pro 실버 512gb     512gb    1,738,500원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/IPHONE-14-PLUS-Lineup/",
    "title": "아이폰14 플러스",
    "body": "2023/02/09 - 2023-04-27 아이폰14 PLUS 최저가 1,188,000원 아이폰14 PLUS의 장점은 배터리 용량입니다. 다른것은 전작과 14기본모델대비 뚜렷한 차이를 보이고 있지 않습니다. 아이폰 14 플러스의 배터리 용량은 현재까지 출시한 모든 아이폰 모델의 무게 대비 배터리 용량이 가장 큽니다. 따라서 무게는 가볍지만 배터리 용량은 아이폰 14보다 더 많아졌기 때문에 하루 종일 사용해도 방전을 걱정할 필요가 없을 정도입니다. 만약 배터리 용량 때문에라도 기기를 바꿀 계획이라면 크게 신경 쓸 필요 없는 모델이 될 것입니다. 아이폰14 PLUS 일자별 판매가격 차트: 아이폰14 PLUS 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14plus 레드 128gb     128gb    1,188,670원    오늘 최저가구매        apple iphone14plus 미드나이트 128gb     128gb    1,188,000원    오늘 최저가구매        apple iphone14plus 블루 128gb     128gb    1,205,000원    오늘 최저가구매        apple iphone14plus 스타라이트 128gb     128gb    1,190,700원    오늘 최저가구매        apple iphone14plus 퍼플 128gb     128gb    1,192,860원    오늘 최저가구매        apple iphone14plus 레드 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 미드나이트 256gb     256gb    1,305,980원    오늘 최저가구매        apple iphone14plus 블루 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 스타라이트 256gb     256gb    1,324,800원    오늘 최저가구매        apple iphone14plus 퍼플 256gb     256gb    1,324,800원    오늘 최저가구매        apple iphone14plus 레드 512gb     512gb    1,699,000원    오늘 최저가구매        apple iphone14plus 미드나이트 512gb     512gb    1,514,000원    오늘 최저가구매        apple iphone14plus 블루 512gb     512gb    1,573,000원    오늘 최저가구매        apple iphone14plus 스타라이트 512gb     512gb    1,573,000원    오늘 최저가구매        apple iphone14plus 퍼플 512gb     512gb    1,573,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/IPHONE-14-Lineup/",
    "title": "아이폰14",
    "body": "2023/02/09 - 2023-04-27 아이폰14 최저가 1,092,750원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인 카메라의 화질 개선이다. 아이폰14 일자별 판매가격 차트: 아이폰14 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14 레드 128gb     128gb    1,116,000원    오늘 최저가구매        apple iphone14 미드나이트 128gb     128gb    1,094,800원    오늘 최저가구매        apple iphone14 블루 128gb     128gb    1,092,750원    오늘 최저가구매        apple iphone14 스타라이트 128gb     128gb    1,103,500원    오늘 최저가구매        apple iphone14 퍼플 128gb     128gb    1,102,500원    오늘 최저가구매        apple iphone14 레드 256gb     256gb    1,250,000원    오늘 최저가구매        apple iphone14 미드나이트 256gb     256gb    1,227,940원    오늘 최저가구매        apple iphone14 블루 256gb     256gb    1,248,520원    오늘 최저가구매        apple iphone14 스타라이트 256gb     256gb    1,250,000원    오늘 최저가구매        apple iphone14 퍼플 256gb     256gb    1,248,520원    오늘 최저가구매        apple iphone14 레드 512gb     512gb    1,589,000원    오늘 최저가구매        apple iphone14 미드나이트 512gb     512gb    1,432,760원    오늘 최저가구매        apple iphone14 블루 512gb     512gb    1,496,000원    오늘 최저가구매        apple iphone14 스타라이트 512gb     512gb    1,466,080원    오늘 최저가구매        apple iphone14 퍼플 512gb     512gb    1,432,760원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/IPHONE-13-PRO-Lineup/",
    "title": "아이폰13 프로",
    "body": "2022/03/09 - 2023-04-27 아이폰13 PRO 최저가 1,350,000원 아이폰13 기본형과 프로를 구분하는 가장 큰 특징은 바로 ‘카메라’다. 아이폰13에는 듀얼(2개, 초광각·광각) 카메라가, 아이폰13 프로에는 트리플(3개, 초광각·광각·망원) 카메라가 적용됐다. 프로는 망원 렌즈를 더해 6배 광학 줌이 가능하다. 기본형은 2배 광학 줌에 머문다. 아이폰13 PRO 일자별 판매가격 차트: 아이폰13 PRO 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13pro 골드 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 그래파이트 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 시에라블루 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 실버 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 알파인그린 128gb     128gb    1,350,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/IPHONE-13-MINI-Lineup/",
    "title": "아이폰13 미니",
    "body": "2022/03/09 - 2023-04-27 아이폰13 MINI 최저가 830,000원 아담한 사이즈 : 131. 5 × 64. 2 × 7. 65mm, 무게는 140g으로 아담하고, 가볍습니다. …작은 휴대폰 중 가장 좋은 성능 : 아이폰14 미니가 없으므로 현존하는 작은 아이폰 중 가장 성능이 좋습니다. 아이폰13 MINI 일자별 판매가격 차트: 아이폰13 MINI 2023-04-27 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13mini 그린 128gb     128gb    883,000원    오늘 최저가구매        apple iphone13mini 레드 128gb     128gb    902,000원    오늘 최저가구매        apple iphone13mini 미드나이트 128gb     128gb    848,000원    오늘 최저가구매        apple iphone13mini 블루 128gb     128gb    830,000원    오늘 최저가구매        apple iphone13mini 핑크 128gb     128gb    848,000원    오늘 최저가구매        apple iphone13mini 그린 256gb     256gb    1,035,400원    오늘 최저가구매        apple iphone13mini 레드 256gb     256gb    1,025,470원    오늘 최저가구매        apple iphone13mini 미드나이트 256gb     256gb    952,600원    오늘 최저가구매        apple iphone13mini 블루 256gb     256gb    1,035,400원    오늘 최저가구매        apple iphone13mini 스타라이트 256gb     256gb    952,350원    오늘 최저가구매        apple iphone13mini 핑크 256gb     256gb    973,150원    오늘 최저가구매        apple iphone13mini 그린 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 레드 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 미드나이트 512gb     512gb    1,211,000원    오늘 최저가구매        apple iphone13mini 블루 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 스타라이트 512gb     512gb    1,211,000원    오늘 최저가구매        apple iphone13mini 핑크 512gb     512gb    1,251,800원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});