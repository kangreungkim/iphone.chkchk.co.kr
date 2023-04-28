
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About CHKCHK",
    "body": "ChkChk Blog는 가격히스토리를 제공하여 똑똑한 소비를 할 수 있도록 도와줍니다. 앞으로 많은 제품을 준비해서 포스팅 하겠습니다. . "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                                                           아이폰14 프로                              :               2023-04-28 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도. . . :                                                                                                                                                                       1,316,880원                                2023-02-09                                                                                                                                                                                                                                                                                                                        아이폰14                              :               2023-04-28 아이폰14 최저가 1,081,500원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인. . . :                                                                                                                                                                       1,081,500원                                2023-02-09                                                                                                                                  All Stories:                                                                                                     애플워치8              :       2023-04-28 애플워치8 최저가 517,080원 온종일 지속되는 18시간의 배터리 사용 시간을 자랑하는 Apple Watch Series 8은 손목 온도 감지 기능, 충돌 감지, 국제 로밍 등을 도입하며, 심전도 앱 및 충돌 감지. . . :                                                                               517,080원                2023-04-27                                                                                                                                     애플워치7              :       2023-04-28 애플워치7 최저가 441,320원 애플워치7의 가장 만족스러웠던 부분은 Assistive touch(한손조작)기능 입니다. 그외 헬스케어, 얇아진 디자인(10. 7mm -&gt; 9mm), 국제 긴급 구조 요청5 배터리 수명은 전작과 동일하지만, 급속 충전이 가능합니다. 애플워치7 일자별. . . :                                                                               441,320원                2023-04-27                                                                                                                                     애플워치울트라              :       2023-04-28 애플워치 울트라 최저가 993,570원 애플 워치 울트라는 운동 선수를 위해 다른 애플 워치 모델에는 없는 다음과 같은 기능을 제공한다. 위치를 정밀하게 측정하기 위한 이중 주파수 GPS 새로운 오셔닉플러스(Oceanic+) 앱에서. . . :                                                                               993,570원                2023-04-27                                                                                                                                     애플워치SE2              :       2023-04-28 애플워치 SE2 최저가 317,000원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야. . . :                                                                               317,000원                2023-04-27                                                                                                                                     애플워치SE              :       2023-04-28 애플워치 SE 최저가 334,580원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야. . . :                                                                               334,580원                2023-04-27                                                                                                                                     아이폰13              :       2023-04-28 아이폰13 최저가 1,046,300원 아이폰13 시리즈는 전작과 동일한 △아이폰13 △아이폰13 미니 △아이폰13 프로 △아이폰13 프로맥스 등 4종으로 구성됐다. 화면이 가장 작은 5. 4인치 미니, 가장 큰 6. 7인치 프로를 제외하면 ‘아이폰13’과 ‘아이폰13. . . :                                                                               1,046,300원                2023-03-09                                               &laquo; Prev       1        2        3      Next &raquo; "
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
    "url": "http://localhost:4000/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/APPLE-WATCH8-Lineup/",
    "title": "애플워치8",
    "body": "2023/04/27 - 2023-04-28 애플워치8 최저가 517,080원 온종일 지속되는 18시간의 배터리 사용 시간을 자랑하는 Apple Watch Series 8은 손목 온도 감지 기능, 충돌 감지, 국제 로밍 등을 도입하며, 심전도 앱 및 충돌 감지 등 최고의 건강 및 안전 기능을 제공한다. 애플워치7과의 큰 차이점은 “피부온도센서”와 “충돌감지기능”을 포함하고 있습니다. 애플워치8 일자별 판매가격 차트: 애플워치8 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 8 41mm GPS × 알루미늄 × product red / 레드 스포츠 밴드    41mm_GPS    529,000원    오늘 최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS    518,100원    오늘 최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS    517,080원    오늘 최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 실버 / 화이트 스포츠 밴드    41mm_GPS    540,080원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    41mm_GPS+Cellular    994,170원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    41mm_GPS+Cellular    952,100원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 실버 / 실버 밀레니즈 루프    41mm_GPS+Cellular    964,170원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    863,070원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    881,810원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 실버 / 화이트 스포츠 밴드    41mm_GPS+Cellular    863,070원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × product red / 레드 스포츠 밴드    41mm_GPS+Cellular    647,570원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    659,610원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    711,550원    오늘 최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠 밴드    41mm_GPS+Cellular    689,570원    오늘 최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × product red / 레드 스포츠 밴드    45mm_GPS    575,000원    오늘 최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    45mm_GPS    551,880원    오늘 최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    45mm_GPS    564,100원    오늘 최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 실버 / 화이트 스포츠 밴드    45mm_GPS    552,490원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    45mm_GPS+Cellular    984,270원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    45mm_GPS+Cellular    1,025,490원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 실버 / 실버 밀레니즈 루프    45mm_GPS+Cellular    1,006,270원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 스타라이트 스포츠 밴드    45mm_GPS+Cellular    964,170원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    45mm_GPS+Cellular    962,790원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 실버 / 화이트 스포츠 밴드    45mm_GPS+Cellular    924,170원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × product red / 레드 스포츠 밴드    45mm_GPS+Cellular    681,770원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 미드나이트 / 미드나이트 스포츠 밴드    45mm_GPS+Cellular    759,000원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 스타라이트 / 스타라이트 스포츠 밴드    45mm_GPS+Cellular    711,550원    오늘 최저가구매        Apple 워치 8 45mm GPS+Cellular × 실버 / 화이트 스포츠 밴드    45mm_GPS+Cellular    704,100원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/APPLE-WATCH7-Lineup/",
    "title": "애플워치7",
    "body": "2023/04/27 - 2023-04-28 애플워치7 최저가 441,320원 애플워치7의 가장 만족스러웠던 부분은 Assistive touch(한손조작)기능 입니다. 그외 헬스케어, 얇아진 디자인(10. 7mm -&gt; 9mm), 국제 긴급 구조 요청5배터리 수명은 전작과 동일하지만, 급속 충전이 가능합니다. 애플워치7 일자별 판매가격 차트: 애플워치7 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 7 41mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS    499,000원    오늘 최저가구매        Apple 워치 7 41mm GPS × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    41mm_GPS    489,200원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    41mm_GPS+Cellular    907,000원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 어비스블루 스포츠 밴드    41mm_GPS+Cellular    720,650원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    720,650원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 그린 / 클로버 스포츠 밴드    41mm_GPS+Cellular    579,000원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 레드 / 레드 스포츠 밴드    41mm_GPS+Cellular    579,000원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    재고없음    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 블루 / 어비스블루 스포츠 밴드    41mm_GPS+Cellular    579,000원    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    재고없음    오늘 최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    41mm_GPS+Cellular    472,820원    오늘 최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 그린 / 클로버 스포츠 밴드    45mm_GPS    539,000원    오늘 최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 미드나이트 케이스, 안트라사이트/블랙 밴드    45mm_GPS    539,000원    오늘 최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    45mm_GPS    441,320원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    45mm_GPS+Cellular    801,360원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 다크체리 스포츠 밴드    45mm_GPS+Cellular    재고없음    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    45mm_GPS+Cellular    969,000원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    820,190원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    909,000원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 알루미늄 × 미드나이트 케이스, 안트라사이트/블랙 밴드    45mm_GPS+Cellular    659,000원    오늘 최저가구매        Apple 워치 7 45mm GPS+Cellular × 알루미늄 × 블루 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    659,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/APPLE-WATCH-ULTRA/",
    "title": "애플워치울트라",
    "body": "2023/04/27 - 2023-04-28 애플워치 울트라 최저가 993,570원 애플 워치 울트라는 운동 선수를 위해 다른 애플 워치 모델에는 없는 다음과 같은 기능을 제공한다. 위치를 정밀하게 측정하기 위한 이중 주파수 GPS새로운 오셔닉플러스(Oceanic+) 앱에서 제공되는 스쿠버다이빙과 프리다이빙 기능나침반으로 전환되는 시간 다이얼, 8가지 컴플리케이션이 들어가는 공간, 페이스를 적색으로 바꿔주는 특수 야간 모드를 지원하는 웨이파인더(Wayfinder) 워치 페이스 울트라 왼쪽 측면에는 ‘동작(Action)’ 버튼이 새로 생겼다. 앱과 연동하여 특정 기능을 빠르게 활성화할 수 있다. 예를 들면, 하이킹을 할 때 중간 지점을 표시할 때나 다이빙을 시작할 때 누를 수 있다. 길게 누르면 86데시벨로 사이렌이 활성화된다애플 워치 울트라의 배터리 사용 시간은 시리즈 8의 2배인 36시간이다. 단, 울트라는 더 큰 배터리가 탑재된 더 큰 워치라는 점을 명심해야 한다. 수면 추적용으로 착용하기에는 너무 크다고 느낄 수도 있다. 애플워치 울트라 일자별 판매가격 차트: 애플워치 울트라 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 미드나이트 / regular 오션 밴드    49mm_GPS+Cellular    1,091,530원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로 / regular 오션 밴드    49mm_GPS+Cellular    1,091,530원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 화이트 / regular 오션 밴드    49mm_GPS+Cellular    1,091,530원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / large 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / medium 알파인 루프    49mm_GPS+Cellular    1,046,080원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / small 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / large 알파인 루프    49mm_GPS+Cellular    1,015,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / medium 알파인 루프    49mm_GPS+Cellular    1,025,360원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / small 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / large 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / medium 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / small 알파인 루프    49mm_GPS+Cellular    1,089,000원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블랙그레이 / m/l 트레일 루프    49mm_GPS+Cellular    993,570원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블랙그레이 / s/m 트레일 루프    49mm_GPS+Cellular    1,015,080원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블루그레이 / m/l 트레일 루프    49mm_GPS+Cellular    993,570원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블루그레이 / s/m 트레일 루프    49mm_GPS+Cellular    993,570원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로베이지 / m/l 트레일 루프    49mm_GPS+Cellular    1,004,080원    오늘 최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로베이지 / s/m 트레일 루프    49mm_GPS+Cellular    1,046,080원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/APPLE-WATCH-SE2/",
    "title": "애플워치SE2",
    "body": "2023/04/27 - 2023-04-28 애플워치 SE2 최저가 317,000원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야 합니다. 애플 워치 SE와 SE2는 기본적으로 디자인은 동일하다. SE2는 고중력 가속도계와 향상된 자이로스코프를 제공하며, 자동차 충돌감지 기능을 이용할 수 있다. 충돌감지 기능이 있다. 시계 뒷면이 나일론 합성물과 사파이어 크리스탈 소재로 바뀌었다 애플워치 SE2 일자별 판매가격 차트: 애플워치 SE2 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 se2 40mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    40mm_GPS    317,100원    오늘 최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    40mm_GPS    317,000원    오늘 최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 실버 / 화이트 스포츠밴드    40mm_GPS    317,000원    오늘 최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    40mm_GPS+Cellular    403,000원    오늘 최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    40mm_GPS+Cellular    378,970원    오늘 최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠밴드    40mm_GPS+Cellular    378,970원    오늘 최저가구매        Apple 워치 se2 44mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    44mm_GPS    354,130원    오늘 최저가구매        Apple 워치 se2 44mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    44mm_GPS    369,000원    오늘 최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 실버 / 화이트 스포츠밴드    44mm_GPS    345,080원    오늘 최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    44mm_GPS+Cellular    469,000원    오늘 최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    44mm_GPS+Cellular    440,550원    오늘 최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠밴드    44mm_GPS+Cellular    440,550원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/APPLE-WATCH-SE/",
    "title": "애플워치SE",
    "body": "2023/04/27 - 2023-04-28 애플워치 SE 최저가 334,580원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야 합니다. 애플 워치 SE와 SE2는 기본적으로 디자인은 동일하다. 센서는 SE2와 SE를 동일하게 적용됐다. 2세대 심장 박동 인식 센서, 상시감지형 고도계를 비롯해 산소 포화도, 온도, 심전도를 측정할 수 있는 센서가 지원된다. SE2는 고중력 가속도계와 향상된 자이로스코프를 제공하며, 자동차 충돌감지 기능을 이용할 수 있다. 애플워치 SE 일자별 판매가격 차트: 애플워치 SE 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 se 40mm GPS+Cellular × 알루미늄 × 스페이스 그레이 / 미드나이트 스포츠 밴드    40mm_GPS+Cellular    334,580원    오늘 최저가구매        Apple 워치 se 40mm GPS+Cellular × 알루미늄 × 실버 / 어비스블루 스포츠 밴드    40mm_GPS+Cellular    334,580원    오늘 최저가구매        Apple 워치 se 44mm GPS+Cellular × 알루미늄 × 스페이스 그레이 / 안트라사이트/블랙 밴드    44mm_GPS+Cellular    434,780원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/IPHONE-13-Lineup/",
    "title": "아이폰13",
    "body": "2023/03/09 - 2023-04-28 아이폰13 최저가 1,046,300원 아이폰13 시리즈는 전작과 동일한 △아이폰13 △아이폰13 미니 △아이폰13 프로 △아이폰13 프로맥스 등 4종으로 구성됐다. 화면이 가장 작은 5. 4인치 미니, 가장 큰 6. 7인치 프로를 제외하면 ‘아이폰13’과 ‘아이폰13 프로’가 남는다. 두 모델 모두 6. 1인치다. 전체적인 외형은 큰 차이가 없다. 테두리가 화면과 직각을 이루는 각진 형태다. 다만 화면 상단을 움푹 판 듯한 ‘노치’가 전작 대비 약 20% 줄었다. 한 가지 큰 차이는 아이폰13은 ‘항공우주 등급 알루미늄’으로, 프로는 ‘수술 도구급 고강도 스테인리스 스틸’ 소재로 마감됐다는 것이다. 소재 차이로 인해 프로 모델이 조금 더 무겁다. 화면 크기는 동일함에도 아이폰13 무게는 173g, 아이폰13 프로는 203g이다. 아이폰13 일자별 판매가격 차트: 아이폰13 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13 그린 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 미드나이트 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 블루 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 스타라이트 128gb     128gb    1,046,300원    오늘 최저가구매        apple iphone13 그린 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 레드 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 블루 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 스타라이트 256gb     256gb    1,156,500원    오늘 최저가구매        apple iphone13 그린 512gb     512gb    1,300,000원    오늘 최저가구매        apple iphone13 레드 512gb     512gb    1,300,000원    오늘 최저가구매        apple iphone13 블루 512gb     512gb    1,300,000원    오늘 최저가구매        apple iphone13 스타라이트 512gb     512gb    1,300,000원    오늘 최저가구매        apple iphone13 핑크 512gb     512gb    1,300,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/IPHONE-SE3-Lineup/",
    "title": "아이폰 SE3",
    "body": "2023/02/09 - 2023-04-28 아이폰 SE3 최저가 555,500원 아이폰SE의 작은 화면은 단점이지만, 반면 작은 사이즈의 스마트폰을 선호하는 소비자에게는 관심을 끌만하다. 아이폰SE 사이즈는 세로13. 8cm x 가로6. 7cm x 두께0. 7cm, 무게 144g으로 콤팩트하다. 특히 여성 사용자 또는 손이 작은 사용자의 경우 한 손에 쏙 들어오고, 주머니에 잘 들어가는 아이폰SE가 편리하게 느껴질 것이다. 가벼운 폰 선호자라면 장점일 수도 아이폰 SE3 일자별 판매가격 차트: 아이폰 SE3 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphonese3 product red 64gb     64gb    639,000원    오늘 최저가구매        apple iphonese3 스타라이트 64gb     64gb    555,500원    오늘 최저가구매        apple iphonese3 product red 128gb     128gb    660,000원    오늘 최저가구매        apple iphonese3 미드나이트 128gb     128gb    622,000원    오늘 최저가구매        apple iphonese3 스타라이트 128gb     128gb    719,000원    오늘 최저가구매        apple iphonese3 product red 256gb     256gb    870,000원    오늘 최저가구매        apple iphonese3 미드나이트 256gb     256gb    870,000원    오늘 최저가구매        apple iphonese3 스타라이트 256gb     256gb    870,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/IPHONE-14-PROMAX-Lineup/",
    "title": "아이폰14 프로맥스",
    "body": "2023/02/09 - 2023-04-28 아이폰14 PROMAX 최저가 1,497,000원 아이폰14 프로와 아이폰14 프로 맥스는 거의 모든 기능이 동일합니다. 두 모델 모두 OLED Super Retina XDR 디스플레이, 상시 표시형 디스플레이, 다이내믹 아일랜드, A16 바이오닉 칩, 5G 통신, 프로급 카메라 및 동일한 색상을 제공합니다. 아이폰14 프로와 아이폰14 프로 맥스의 모든 차이점은 오직 디스플레이 크기 차이에서 기인합니다. 아이폰14 PROMAX 일자별 판매가격 차트: 아이폰14 PROMAX 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14promax 골드 128gb     128gb    1,509,200원    오늘 최저가구매        apple iphone14promax 딥퍼플 128gb     128gb    1,497,000원    오늘 최저가구매        apple iphone14promax 스페이스블랙 128gb     128gb    1,514,000원    오늘 최저가구매        apple iphone14promax 실버 128gb     128gb    1,497,000원    오늘 최저가구매        apple iphone14promax 골드 256gb     256gb    1,647,870원    오늘 최저가구매        apple iphone14promax 딥퍼플 256gb     256gb    1,713,000원    오늘 최저가구매        apple iphone14promax 스페이스블랙 256gb     256gb    1,625,000원    오늘 최저가구매        apple iphone14promax 실버 256gb     256gb    1,625,000원    오늘 최저가구매        apple iphone14promax 골드 512gb     512gb    1,946,000원    오늘 최저가구매        apple iphone14promax 딥퍼플 512gb     512gb    2,025,000원    오늘 최저가구매        apple iphone14promax 스페이스블랙 512gb     512gb    1,964,000원    오늘 최저가구매        apple iphone14promax 실버 512gb     512gb    1,934,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/IPHONE-14-PRO-Lineup/",
    "title": "아이폰14 프로",
    "body": "2023/02/09 - 2023-04-28 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도 같았던 전면 카메라 상단 ‘M자’ 형태 노치(화면 상단 테두리) 디자인이 카메라 모듈 부분만 구멍을 뚫은 펀치홀 카메라로 변경됐다. 펀치홀 카메라 부분은 하나의 디스플레이 창으로 이용할 수 있다. ###프로 시리즈만 AP·카메라 개선스마트폰의 두뇌 역할을 하는 애플리케이션프로세서(AP)도 모델별로 다르다. 아이폰14 프로 시리즈엔 최신형 AP인 ‘A16 바이오닉’ 칩이 장착됐다. 애플 AP 중 최초로 4㎚(나노미터·1㎚는 10억분의 1m) 공정에서 제작된 프로세서다. 애플은 “동급 경쟁 제품보다 최대 40% 빠르고, 전력 소비는 3분의 1 수준”이라고 설명했다. 일반 모델엔 전작 아이폰13 시리즈에 탑재됐던 A15 바이오닉을 넣었다. 이 외에 다양한 기능이 프로 시리즈에 집중됐다. 아이폰 처음으로 기존보다 화소 수를 4배 높인 4800만 화소 메인 카메라가 탑재됐다. 애플은 “전작보다 후면 카메라 이미지 센서가 63%가 커졌다”고 했다. 시간과 날씨 등 정보를 화면에 항상 표시하는 ‘AOD(올웨이즈 온 디스플레이)’ 기능도 프로 시리즈에서만 지원된다. 아이폰14 PRO 일자별 판매가격 차트: 아이폰14 PRO 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14pro 골드 128gb     128gb    1,316,880원    오늘 최저가구매        apple iphone14pro 딥퍼플 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 스페이스블랙 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 실버 128gb     128gb    1,339,200원    오늘 최저가구매        apple iphone14pro 골드 256gb     256gb    1,550,000원    오늘 최저가구매        apple iphone14pro 딥퍼플 256gb     256gb    1,484,100원    오늘 최저가구매        apple iphone14pro 스페이스블랙 256gb     256gb    1,565,000원    오늘 최저가구매        apple iphone14pro 실버 256gb     256gb    1,454,000원    오늘 최저가구매        apple iphone14pro 골드 512gb     512gb    1,714,000원    오늘 최저가구매        apple iphone14pro 딥퍼플 512gb     512gb    1,714,000원    오늘 최저가구매        apple iphone14pro 스페이스블랙 512gb     512gb    1,714,000원    오늘 최저가구매        apple iphone14pro 실버 512gb     512gb    1,714,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/IPHONE-14-PLUS-Lineup/",
    "title": "아이폰14 플러스",
    "body": "2023/02/09 - 2023-04-28 아이폰14 PLUS 최저가 1,176,000원 아이폰14 PLUS의 장점은 배터리 용량입니다. 다른것은 전작과 14기본모델대비 뚜렷한 차이를 보이고 있지 않습니다. 아이폰 14 플러스의 배터리 용량은 현재까지 출시한 모든 아이폰 모델의 무게 대비 배터리 용량이 가장 큽니다. 따라서 무게는 가볍지만 배터리 용량은 아이폰 14보다 더 많아졌기 때문에 하루 종일 사용해도 방전을 걱정할 필요가 없을 정도입니다. 만약 배터리 용량 때문에라도 기기를 바꿀 계획이라면 크게 신경 쓸 필요 없는 모델이 될 것입니다. 아이폰14 PLUS 일자별 판매가격 차트: 아이폰14 PLUS 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14plus 레드 128gb     128gb    1,282,500원    오늘 최저가구매        apple iphone14plus 미드나이트 128gb     128gb    1,176,000원    오늘 최저가구매        apple iphone14plus 블루 128gb     128gb    1,180,000원    오늘 최저가구매        apple iphone14plus 스타라이트 128gb     128gb    1,180,000원    오늘 최저가구매        apple iphone14plus 퍼플 128gb     128gb    1,232,000원    오늘 최저가구매        apple iphone14plus 레드 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 미드나이트 256gb     256gb    1,306,800원    오늘 최저가구매        apple iphone14plus 블루 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 스타라이트 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 퍼플 256gb     256gb    1,311,000원    오늘 최저가구매        apple iphone14plus 레드 512gb     512gb    1,699,000원    오늘 최저가구매        apple iphone14plus 미드나이트 512gb     512gb    1,514,000원    오늘 최저가구매        apple iphone14plus 블루 512gb     512gb    1,573,000원    오늘 최저가구매        apple iphone14plus 스타라이트 512gb     512gb    1,573,000원    오늘 최저가구매        apple iphone14plus 퍼플 512gb     512gb    1,573,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/IPHONE-14-Lineup/",
    "title": "아이폰14",
    "body": "2023/02/09 - 2023-04-28 아이폰14 최저가 1,081,500원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인 카메라의 화질 개선이다. 아이폰14 일자별 판매가격 차트: 아이폰14 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14 레드 128gb     128gb    1,081,500원    오늘 최저가구매        apple iphone14 미드나이트 128gb     128gb    1,094,800원    오늘 최저가구매        apple iphone14 블루 128gb     128gb    1,096,370원    오늘 최저가구매        apple iphone14 스타라이트 128gb     128gb    1,089,000원    오늘 최저가구매        apple iphone14 퍼플 128gb     128gb    1,102,500원    오늘 최저가구매        apple iphone14 레드 256gb     256gb    1,223,000원    오늘 최저가구매        apple iphone14 미드나이트 256gb     256gb    1,223,000원    오늘 최저가구매        apple iphone14 블루 256gb     256gb    1,223,000원    오늘 최저가구매        apple iphone14 스타라이트 256gb     256gb    1,223,000원    오늘 최저가구매        apple iphone14 퍼플 256gb     256gb    1,223,000원    오늘 최저가구매        apple iphone14 레드 512gb     512gb    1,589,000원    오늘 최저가구매        apple iphone14 미드나이트 512gb     512gb    1,432,760원    오늘 최저가구매        apple iphone14 블루 512gb     512gb    1,496,000원    오늘 최저가구매        apple iphone14 스타라이트 512gb     512gb    1,466,080원    오늘 최저가구매        apple iphone14 퍼플 512gb     512gb    1,432,760원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/IPHONE-13-PRO-Lineup/",
    "title": "아이폰13 프로",
    "body": "2022/03/09 - 2023-04-28 아이폰13 PRO 최저가 1,350,000원 아이폰13 기본형과 프로를 구분하는 가장 큰 특징은 바로 ‘카메라’다. 아이폰13에는 듀얼(2개, 초광각·광각) 카메라가, 아이폰13 프로에는 트리플(3개, 초광각·광각·망원) 카메라가 적용됐다. 프로는 망원 렌즈를 더해 6배 광학 줌이 가능하다. 기본형은 2배 광학 줌에 머문다. 아이폰13 PRO 일자별 판매가격 차트: 아이폰13 PRO 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13pro 골드 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 그래파이트 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 시에라블루 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 실버 128gb     128gb    1,350,000원    오늘 최저가구매        apple iphone13pro 알파인그린 128gb     128gb    1,350,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 19,
    "url": "http://localhost:4000/IPHONE-13-MINI-Lineup/",
    "title": "아이폰13 미니",
    "body": "2022/03/09 - 2023-04-28 아이폰13 MINI 최저가 830,000원 아담한 사이즈 : 131. 5 × 64. 2 × 7. 65mm, 무게는 140g으로 아담하고, 가볍습니다. …작은 휴대폰 중 가장 좋은 성능 : 아이폰14 미니가 없으므로 현존하는 작은 아이폰 중 가장 성능이 좋습니다. 아이폰13 MINI 일자별 판매가격 차트: 아이폰13 MINI 2023-04-28 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13mini 그린 128gb     128gb    883,000원    오늘 최저가구매        apple iphone13mini 레드 128gb     128gb    902,000원    오늘 최저가구매        apple iphone13mini 미드나이트 128gb     128gb    848,000원    오늘 최저가구매        apple iphone13mini 블루 128gb     128gb    830,000원    오늘 최저가구매        apple iphone13mini 핑크 128gb     128gb    848,000원    오늘 최저가구매        apple iphone13mini 그린 256gb     256gb    1,035,400원    오늘 최저가구매        apple iphone13mini 레드 256gb     256gb    1,025,470원    오늘 최저가구매        apple iphone13mini 미드나이트 256gb     256gb    952,600원    오늘 최저가구매        apple iphone13mini 블루 256gb     256gb    1,035,400원    오늘 최저가구매        apple iphone13mini 스타라이트 256gb     256gb    952,350원    오늘 최저가구매        apple iphone13mini 핑크 256gb     256gb    973,150원    오늘 최저가구매        apple iphone13mini 그린 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 레드 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 미드나이트 512gb     512gb    1,211,000원    오늘 최저가구매        apple iphone13mini 블루 512gb     512gb    1,291,600원    오늘 최저가구매        apple iphone13mini 스타라이트 512gb     512gb    1,211,000원    오늘 최저가구매        apple iphone13mini 핑크 512gb     512gb    1,251,800원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
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