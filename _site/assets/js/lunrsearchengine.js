
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
    "body": "      Featured:                                                                                                                                                                                                                                                                                                                                               아이폰14 프로                              :               2023-05-04 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도. . . :                                                                                                                                                                       1,316,880원                                2023-05-04                                                                                                                                                                                                                                                                                                                        아이폰14                              :               2023-05-04 아이폰14 최저가 1,051,600원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인. . . :                                                                                                                                                                       1,051,600원                                2023-05-04                                                                                                                                        All Stories:                                                                                                     Apple 에어팟 맥스 블루투스 헤드셋              :       제품명 SPEC 판매가격 제품링크 Apple 에어팟 맥스 블루투스헤드셋 실버 airpot_max 678,550원 최저가구매 Apple 에어팟 맥스 블루투스헤드셋 그린 airpot_max 769,000원 최저가구매 Apple 에어팟 맥스 블루투스헤드셋 스카이블루 airpot_max 745,930원 최저가구매 Apple 에어팟. . . :                                                                               656,100원                2023-05-04                                                                                                                                     Apple 정품 2022 에어팟 프로 2세대              :             제품명   SPEC   판매가격   제품링크        Apple 2022 에어팟 프로 2세대 블루투스 이어폰    airpotpro2022_2th    290,740원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. :                                                                               290,740원                2023-05-04                                                                                                                                     Apple 정품 2021, 2022 에어팟 3세대              :       제품명 SPEC 판매가격 제품링크 Apple 2022 에어팟 3세대 유선 충전 블루투스 이어폰 airpot2022_3th 211,340원 최저가구매 Apple 2021 에어팟 3세대 유선 충전 블루투스 이어폰 airpot2021_3th 219,720원 최저가구매 이 포스팅은 쿠팡 파트너스. . . :                                                                               211,340원                2023-05-04                                                                                                                                     Apple 정품 매직 키보드 iPad Pro 12. 9 용              :             제품명   SPEC   판매가격   제품링크        Apple 정품 매직 키보드 iPad Pro 12. 9 호환용    m_keyboard_p12    486,450원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. :                                                                               486,450원                2023-05-04                                                                                                                                     Apple 정품 매직 키보드 iPad Pro 11 4세대/iPad Air 5세대용              :             제품명   SPEC   판매가격   제품링크        Apple 정품 매직 키보드 iPad Pro 11 4세대/iPad Air 5세대용    m_keyboard_p11    420,590원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. :                                                                               420,590원                2023-05-04                                                                                                                                     Apple 정품 매직 키보드 iPad Smart Keyboard pro 10세대/iPad 9세대/iPad Air 3세대용              :             제품명   SPEC   판매가격   제품링크        Apple 정품 iPad Smart Keyboard pro 10세대/iPad 9세대/iPad Air 3세대용    m_keyboard_p10    229,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. :                                                                               229,000원                2023-05-04                                               &laquo; Prev       1        2        3        4        5      Next &raquo; "
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
    "url": "http://localhost:4000/page4/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "http://localhost:4000/page5/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "http://localhost:4000/AIRPOT_MAX/",
    "title": "Apple 에어팟 맥스 블루투스 헤드셋",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 에어팟 맥스 블루투스헤드셋 실버    airpot_max    678,550원    최저가구매        Apple 에어팟 맥스 블루투스헤드셋 그린    airpot_max    769,000원    최저가구매        Apple 에어팟 맥스 블루투스헤드셋 스카이블루    airpot_max    745,930원    최저가구매        Apple 에어팟 맥스 블루투스헤드셋 스페이스그레이    airpot_max    656,100원    최저가구매        Apple 에어팟 맥스 블루투스헤드셋 핑크    airpot_max    769,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/AIRPOT_PRO2th/",
    "title": "Apple 정품 2022 에어팟 프로 2세대",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 2022 에어팟 프로 2세대 블루투스 이어폰    airpotpro2022_2th    290,740원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/AIRPOT3th/",
    "title": "Apple 정품 2021, 2022 에어팟 3세대",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 2022 에어팟 3세대 유선 충전 블루투스 이어폰    airpot2022_3th    211,340원    최저가구매        Apple 2021 에어팟 3세대 유선 충전 블루투스 이어폰    airpot2021_3th    219,720원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/MAGIC-KEYBOARD-PRO12th/",
    "title": "Apple 정품 매직 키보드 iPad Pro 12.9 용",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 매직 키보드 iPad Pro 12. 9 호환용    m_keyboard_p12    486,450원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/MAGIC-KEYBOARD-PRO11th/",
    "title": "Apple 정품 매직 키보드 iPad Pro 11 4세대/iPad Air 5세대용",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 매직 키보드 iPad Pro 11 4세대/iPad Air 5세대용    m_keyboard_p11    420,590원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 14,
    "url": "http://localhost:4000/MAGIC-KEYBOARD-PRO10th/",
    "title": "Apple 정품 매직 키보드 iPad Smart Keyboard pro 10세대/iPad 9세대/iPad Air 3세대용",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 iPad Smart Keyboard pro 10세대/iPad 9세대/iPad Air 3세대용    m_keyboard_p10    229,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/MAGIC-KEYBOARD10th/",
    "title": "Apple 정품 Smart Keyboard Folio iPad 10세대용",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 매직 키보드 폴리오 iPad 10세대용    m_keyboard_10th    344,900원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/SMART-KEYBOARD-FOLIO6/",
    "title": "Apple 정품 Smart Keyboard Folio iPad Pro11 6세대",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 Smart Keyboard Folio iPad Pro12. 9 6세대    s_keyboard_Folio12    281,050원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 17,
    "url": "http://localhost:4000/SMART-KEYBOARD-FOLIO45/",
    "title": "Apple 정품 Smart Keyboard Folio iPad Pro11 4세대 / Air 5세대용",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 Smart Keyboard Folio iPad Pro11 4세대 / Air 5세대용    s_keyboard_Folio11    257,300원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 18,
    "url": "http://localhost:4000/APPLE-PENCIL2th/",
    "title": "애플팬슬 2세대",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 애플펜슬 2세대    pencil2th    158,600원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 19,
    "url": "http://localhost:4000/APPLE-PENCIL1th/",
    "title": "애플팬슬 1세대",
    "body": "2023/05/04 -       제품명   SPEC   판매가격   제품링크        Apple 정품 애플펜슬 1세대    pencil1th    138,570원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 20,
    "url": "http://localhost:4000/APPLE-IPAD-PRO6th/",
    "title": "아이패드 프로 12.9인치 6세대  셀룰러",
    "body": "2023/05/04 - 2023-05-04 아이패드 프로 12. 9인치 6세대 최저가 1,720,900원 프로 12. 9인치의 압도적인 크기의 디스플레이, 그외 스펙상 차이가 없는 아이패드 프로 11인치와 12. 9인치12. 9인치의 경우 리퀴드 레티나 XDR 디스플레이가 적용된 모델이지만11인치는 일반 리퀴드 레티나 디스플레이가 적용된 모델입니다. 아이패드 무엇을 사야할지 고민이라면       제품명   설명   제품링크          아이패드 10세대    저렴한 가격 / 무난한 성능(중고등학생)    아이패드 10        아이패드 에어 5세대    가성비 최고, 갖출건 다 갖춘 베스트 셀러(고등학생/대학생)    아이패드 에어 5세대        아이패드 프로 11인치 4세대    압도적인 성능 / 비싼가격    아이패드 프로 4세대        아이패드 프로 12. 9인치 6세대    리퀴드 레티나 XDR 디스플레이가 적용된 모델    아이패드 프로 6세대   아이패드 프로 12. 9인치 6세대 일자별 판매가격 차트: 아이패드 프로 12. 9인치 6세대 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 128gb wi-fi    128gbWifi    1,497,600원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 128gb wi-fi + cellular    128gbCellular    1,720,900원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 256gb wi-fi    256gbWifi    1,675,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 256gb wi-fi + cellular    256gbCellular    1,956,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 512gb wi-fi    512gbWifi    2,027,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 512gb wi-fi+ cellular    512gbCellular    2,250,860원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 1tb wi-fi    1tbWifi    2,519,260원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 1tb wi-fi+ cellular    1tbCellular    2,735,760원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 2tb wi-fi    2tbWifi    3,095,260원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 스페이스그레이 2tb wi-fi+ cellular    2tnCellular    3,604,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 128gb wi-fi    128gbWifi    1,497,600원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 128gb wi-fi + cellular    128gbCellular    1,742,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 256gb wi-fi    256gbWifi    1,655,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 256gb wi-fi + cellular    256gbCellular    1,949,480원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 512gb wi-fi    512gbWifi    1,943,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 512gb wi-fi+ cellular    512gbCellular    2,369,000원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 1tb wi-fi    1tbWifi    2,519,840원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 1tb wi-fi+ cellular    1tbCellular    2,742,760원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 2tb wi-fi    2tbWifi    3,062,550원    최저가구매        Apple 2022 아이패드 프로 12. 9 6세대 M2칩 M2칩 실버 2tb wi-fi+ cellular    2tnCellular    3,423,800원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 21,
    "url": "http://localhost:4000/APPLE-IPAD-AIR5th/",
    "title": "아이패드 에어5세대  셀룰러",
    "body": "2023/05/04 - 2023-05-04 아이패드 에어 5세대 최저가 985,340원 아이패드 프로 5세대에 비해 저렴한 가격 경쟁력,아이패드 프로 5세대 보다 가격적인 면에서 더 저렴한 것이 큰 강점이기도 합니다. 같은 M1 칩을 탑재하는 것 외에도, 애플 펜슬 2, 매직 키보드, 스마트 폴리오 키보드, 그리고 아이패드 프로 5세대에서 사용할 수 있는 다른 모든 장치들에 대한 기본 지원도 가능한 것 또한 가성비면에서 뛰어난 성능을 보여 준다는 것을 말합니다. 아이패드 무엇을 사야할지 고민이라면       제품명   설명   제품링크          아이패드 10세대    저렴한 가격 / 무난한 성능(중고등학생)    아이패드 10        아이패드 에어 5세대    가성비 최고, 갖출건 다 갖춘 베스트 셀러(고등학생/대학생)    아이패드 에어 5세대        아이패드 프로 11인치 4세대    압도적인 성능 / 비싼가격    아이패드 프로 4세대        아이패드 프로 12. 9인치 6세대    리퀴드 레티나 XDR 디스플레이가 적용된 모델    아이패드 프로 6세대   아이패드 에어 5세대 일자별 판매가격 차트: 아이패드 에어 5세대 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 2022 아이패드 에어 5세대 블루 64gb wi-fi    64gbWifi    806,550원    최저가구매        Apple 2022 아이패드 에어 5세대 블루 64gb wi-fi + cellular    64gbCellular    985,340원    최저가구매        Apple 2022 아이패드 에어 5세대 블루 256gb wi-fi    256gbWifi    1,019,820원    최저가구매        Apple 2022 아이패드 에어 5세대 블루 256gb wi-fi + cellular    256gbCellular    1,310,460원    최저가구매        Apple 2022 아이패드 에어 5세대 스타라이트 64gb wi-fi    64gbWifi    806,550원    최저가구매        Apple 2022 아이패드 에어 5세대 스타라이트 64gb wi-fi+ cellular    64gbCellular    998,240원    최저가구매        Apple 2022 아이패드 에어 5세대 스타라이트 256gb wi-fi    256gbWifi    999,500원    최저가구매        Apple 2022 아이패드 에어 5세대 스타라이트 256gb wi-fi+ cellular    256gbCellular    1,310,460원    최저가구매        Apple 2022 아이패드 에어 5세대 스페이스그레이 64gb wi-fi    64gbWifi    776,900원    최저가구매        Apple 2022 아이패드 에어 5세대 스페이스그레이 64gb wi-fi+ cellular    64gbCellular    1,007,860원    최저가구매        Apple 2022 아이패드 에어 5세대 스페이스그레이 256gb wi-fi    256gbWifi    998,240원    최저가구매        Apple 2022 아이패드 에어 5세대 스페이스그레이 256gb wi-fi+ cellular    256gbCellular    1,310,460원    최저가구매        Apple 2022 아이패드 에어 5세대 퍼플 64gb wi-fi    64gbWifi    806,550원    최저가구매        Apple 2022 아이패드 에어 5세대 퍼플 64gb wi-fi+ cellular    64gbCellular    989,500원    최저가구매        Apple 2022 아이패드 에어 5세대 퍼플 256gb wi-fi    256gbWifi    998,350원    최저가구매        Apple 2022 아이패드 에어 5세대 퍼플 256gb wi-fi+ cellular    256gbCellular    1,191,700원    최저가구매        Apple 2022 아이패드 에어 5세대 핑크 64gb wi-fi    64gbWifi    817,000원    최저가구매        Apple 2022 아이패드 에어 5세대 핑크 64gb wi-fii+ cellular    64gbCellular    985,340원    최저가구매        Apple 2022 아이패드 에어 5세대 핑크 256gb wi-fi    256gbWifi    1,068,860원    최저가구매        Apple 2022 아이패드 에어 5세대 핑크 256gb wi-fii+ cellular    256gbCellular    1,191,700원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 22,
    "url": "http://localhost:4000/APPLE-IPAD-PRO4th/",
    "title": "아이패드 프로 11인치 4세대  셀룰러",
    "body": "2023/05/04 - 2023-05-04 아이패드 프로 11인치 4세대 최저가 1,291,050원 프로 11인치는 크기, 디자인까지 에어 5세대와 아주 흡사하여 에어5의 상위호환 포지션의 제품입니다. 에어 5세대와 비교하자면 M1 프로세서의 후속작인 M2 프로세서가 탑재된점, 그리고 가변 120hz 주사율을 지원하는 패널로 업그레이드되었다는 점입니다. 애플펜슬 2세대를 지원하는 에어 5세대도 부족함없는 필기경험을 제공하지만, 프로모델부터 탑재되는 120hz 주사율 패널은 더더욱 부드럽고 빠릿한 필기경험을 제공합니다. 이 때문에 패드로 전문적인 그림/디자인 작업을하는 경우 프로기종으로 눈을 돌리는 경우가 많습니다. 아이패드 무엇을 사야할지 고민이라면       제품명   설명   제품링크          아이패드 10세대    저렴한 가격 / 무난한 성능(중고등학생)    아이패드 10        아이패드 에어 5세대    가성비 최고, 갖출건 다 갖춘 베스트 셀러(고등학생/대학생)    아이패드 에어 5세대        아이패드 프로 11인치 4세대    압도적인 성능 / 비싼가격    아이패드 프로 4세대        아이패드 프로 12. 9인치 6세대    리퀴드 레티나 XDR 디스플레이가 적용된 모델    아이패드 프로 6세대   아이패드 프로 11인치 4세대 일자별 판매가격 차트: 아이패드 프로 11인치 4세대 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 128gb wi-fi    128gbWifi    1,048,010원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 128gb wi-fi + cellular    128gbCellular    1,291,050원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 256gb wi-fi    256gbWifi    1,203,700원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 256gb wi-fi + cellular    256gbCellular    1,509,000원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 512gb wi-fi    512gbWifi    1,483,000원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 512gb wi-fi+ cellular    512gbCellular    1,838,050원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 1tb wi-fi    1tbWifi    2,059,000원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 1tb wi-fi+ cellular    1tbCellular    2,362,660원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 2tb wi-fi    2tbWifi    2,634,060원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 스페이스그레이 2tb wi-fi+ cellular    2tnCellular    2,834,550원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 128gb wi-fi    128gbWifi    1,048,010원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 128gb wi-fi + cellular    128gbCellular    1,353,660원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 256gb wi-fi    256gbWifi    1,238,700원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 256gb wi-fi + cellular    256gbCellular    1,524,660원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 512gb wi-fi    512gbWifi    1,483,040원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 512gb wi-fi+ cellular    512gbCellular    1,822,660원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 1tb wi-fi    1tbWifi    2,059,040원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 1tb wi-fi+ cellular    1tbCellular    2,362,660원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 2tb wi-fi    2tbWifi    2,697,000원    최저가구매        Apple 2022 아이패드 프로 11 4세대 M2칩 실버 2tb wi-fi+ cellular    2tnCellular    2,864,880원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/APPLE-IPAD-10th/",
    "title": "아이패드 10세대[2022] 셀룰러",
    "body": "2023/05/04 - 2023-05-04 아이패드 10세대 최저가 775,240원 아이패드 10세대는 10. 9인치 화면으로 완전히 새로운 디자인으로 재설계되었으며 얇은 베젤, 평평하고 각진 디자인, A14 바이오닉 칩, USB-C 포트, Touch ID 전원 버튼, 가로 방향 페이스타임 카메라, 5G 통신 등을 특징으로 합니다. 또한 Wi-Fi 6 및 Bluetooth 5. 2 지원 그리고 펑션키가 있는 새로운 전용 매직 키보드 폴리오 액세서리를 선택할 수 있습니다. 아이패드 10세대의 가장 재미난 부분은 라이트닝 포트가 USB-C 포트로 변경되었음에도 불구하고 애플펜슬 1세대만을 지원한다는 사실 ㅜㅜ하지만 저렴한 가격과, 기본적인 기능을 쓰기에는 전혀 무리 없는 선택 아이패드 무엇을 사야할지 고민이라면       제품명   설명   제품링크          아이패드 10세대    저렴한 가격 / 무난한 성능(중고등학생)    아이패드 10        아이패드 에어 5세대    가성비 최고, 갖출건 다 갖춘 베스트 셀러(고등학생/대학생)    아이패드 에어 5세대        아이패드 프로 11인치 4세대    압도적인 성능 / 비싼가격    아이패드 프로 4세대        아이패드 프로 12. 9인치 6세대    리퀴드 레티나 XDR 디스플레이가 적용된 모델    아이패드 프로 6세대   아이패드 10세대 일자별 판매가격 차트: 아이패드 10세대 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 2022 아이패드 10세대 블루 64gb wi-fi    64gbWifi    587,900원    최저가구매        Apple 2022 아이패드 10세대 블루 64gb wi-fi + cellular    64gbCellular    775,240원    최저가구매        Apple 2022 아이패드 10세대 블루 256gb wi-fi    256gbWifi    824,280원    최저가구매        Apple 2022 아이패드 10세대 블루 256gb wi-fi + cellular    256gbCellular    989,640원    최저가구매        Apple 2022 아이패드 10세대 실버 64gb wi-fi    64gbWifi    597,700원    최저가구매        Apple 2022 아이패드 10세대 실버 64gb wi-fi+ cellular    64gbCellular    775,240원    최저가구매        Apple 2022 아이패드 10세대 실버 256gb wi-fi    256gbWifi    824,280원    최저가구매        Apple 2022 아이패드 10세대 실버 256gb wi-fi+ cellular    256gbCellular    989,640원    최저가구매        Apple 2022 아이패드 10세대 옐로우 64gb wi-fi    64gbWifi    599,720원    최저가구매        Apple 2022 아이패드 10세대 옐로우 64gb wi-fi+ cellular    64gbCellular    845,480원    최저가구매        Apple 2022 아이패드 10세대 옐로우 256gb wi-fi    256gbWifi    775,240원    최저가구매        Apple 2022 아이패드 10세대 옐로우 256gb wi-fi+ cellular    256gbCellular    1,066,280원    최저가구매        Apple 2022 아이패드 10세대 핑크 64gb wi-fi    64gbWifi    611,290원    최저가구매        Apple 2022 아이패드 10세대 핑크 64gb wi-fii+ cellular    64gbCellular    775,240원    최저가구매        Apple 2022 아이패드 10세대 핑크 256gb wi-fi    256gbWifi    829,860원    최저가구매        Apple 2022 아이패드 10세대 핑크 256gb wi-fii+ cellular    256gbCellular    989,640원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 24,
    "url": "http://localhost:4000/APPLE-WATCH-SE2/",
    "title": "애플워치SE2",
    "body": "2023/05/04 - 2023-05-04 애플워치 SE2 최저가 302,710원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야 합니다. 애플 워치 SE와 SE2는 기본적으로 디자인은 동일하다. SE2는 고중력 가속도계와 향상된 자이로스코프를 제공하며, 자동차 충돌감지 기능을 이용할 수 있다. 충돌감지 기능이 있다. 시계 뒷면이 나일론 합성물과 사파이어 크리스탈 소재로 바뀌었다 애플워치 SE2 일자별 판매가격 차트: 애플워치 SE2 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 se2 40mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    40mm_GPS    316,800원    최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    40mm_GPS    302,710원    최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 실버 / 화이트 스포츠밴드    40mm_GPS    316,000원    최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    40mm_GPS+Cellular    403,000원    최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    40mm_GPS+Cellular    366,000원    최저가구매        Apple 워치 se2 40mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠밴드    40mm_GPS+Cellular    366,000원    최저가구매        Apple 워치 se2 44mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    44mm_GPS    354,130원    최저가구매        Apple 워치 se2 44mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    44mm_GPS    367,000원    최저가구매        Apple 워치 se2 40mm GPS × 알루미늄 × 실버 / 화이트 스포츠밴드    44mm_GPS    356,060원    최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠밴드    44mm_GPS+Cellular    449,000원    최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠밴드    44mm_GPS+Cellular    445,550원    최저가구매        Apple 워치 se2 44mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠밴드    44mm_GPS+Cellular    440,550원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 25,
    "url": "http://localhost:4000/APPLE-WATCH-SE/",
    "title": "애플워치SE",
    "body": "2023/05/04 - 2023-05-04 애플워치 SE 최저가 329,240원 Apple Watch SE(GPS+Cellular)모델은 이동통신 연결을 통해 긴급 구조 요청 기능을 사용할 수 있습니다. 셀룰러 없이 Apple Watch로 긴급 구조 요청 기능을 사용하려면 근처에 IPHONE이 있어야 합니다. 애플 워치 SE와 SE2는 기본적으로 디자인은 동일하다. 센서는 SE2와 SE를 동일하게 적용됐다. 2세대 심장 박동 인식 센서, 상시감지형 고도계를 비롯해 산소 포화도, 온도, 심전도를 측정할 수 있는 센서가 지원된다. SE2는 고중력 가속도계와 향상된 자이로스코프를 제공하며, 자동차 충돌감지 기능을 이용할 수 있다. 애플워치 SE 일자별 판매가격 차트: 애플워치 SE 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 se 40mm GPS+Cellular × 알루미늄 × 스페이스 그레이 / 미드나이트 스포츠 밴드    40mm_GPS+Cellular    329,240원    최저가구매        Apple 워치 se 40mm GPS+Cellular × 알루미늄 × 실버 / 어비스블루 스포츠 밴드    40mm_GPS+Cellular    329,240원    최저가구매        Apple 워치 se 44mm GPS+Cellular × 알루미늄 × 스페이스 그레이 / 안트라사이트/블랙 밴드    44mm_GPS+Cellular    434,780원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 26,
    "url": "http://localhost:4000/APPLE-WATCH-ULTRA/",
    "title": "애플워치울트라",
    "body": "2023/05/04 - 2023-05-04 애플워치 울트라 최저가 1,013,570원 애플 워치 울트라는 운동 선수를 위해 다른 애플 워치 모델에는 없는 다음과 같은 기능을 제공한다. 위치를 정밀하게 측정하기 위한 이중 주파수 GPS새로운 오셔닉플러스(Oceanic+) 앱에서 제공되는 스쿠버다이빙과 프리다이빙 기능나침반으로 전환되는 시간 다이얼, 8가지 컴플리케이션이 들어가는 공간, 페이스를 적색으로 바꿔주는 특수 야간 모드를 지원하는 웨이파인더(Wayfinder) 워치 페이스 울트라 왼쪽 측면에는 ‘동작(Action)’ 버튼이 새로 생겼다. 앱과 연동하여 특정 기능을 빠르게 활성화할 수 있다. 예를 들면, 하이킹을 할 때 중간 지점을 표시할 때나 다이빙을 시작할 때 누를 수 있다. 길게 누르면 86데시벨로 사이렌이 활성화된다애플 워치 울트라의 배터리 사용 시간은 시리즈 8의 2배인 36시간이다. 단, 울트라는 더 큰 배터리가 탑재된 더 큰 워치라는 점을 명심해야 한다. 수면 추적용으로 착용하기에는 너무 크다고 느낄 수도 있다. 애플워치 울트라 일자별 판매가격 차트: 애플워치 울트라 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 미드나이트 / regular 오션 밴드    49mm_GPS+Cellular    1,114,530원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로 / regular 오션 밴드    49mm_GPS+Cellular    1,060,200원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 화이트 / regular 오션 밴드    49mm_GPS+Cellular    1,022,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / large 알파인 루프    49mm_GPS+Cellular    1,014,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / medium 알파인 루프    49mm_GPS+Cellular    1,035,080원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 그린 / small 알파인 루프    49mm_GPS+Cellular    1,060,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / large 알파인 루프    49mm_GPS+Cellular    1,014,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / medium 알파인 루프    49mm_GPS+Cellular    1,021,080원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 스타라이트 / small 알파인 루프    49mm_GPS+Cellular    1,079,200원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / large 알파인 루프    49mm_GPS+Cellular    1,060,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / medium 알파인 루프    49mm_GPS+Cellular    1,022,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 오렌지 / small 알파인 루프    49mm_GPS+Cellular    1,022,000원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블랙그레이 / m/l 트레일 루프    49mm_GPS+Cellular    1,014,200원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블랙그레이 / s/m 트레일 루프    49mm_GPS+Cellular    1,014,080원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블루그레이 / m/l 트레일 루프    49mm_GPS+Cellular    1,013,570원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 블루그레이 / s/m 트레일 루프    49mm_GPS+Cellular    1,013,570원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로베이지 / m/l 트레일 루프    49mm_GPS+Cellular    1,014,080원    최저가구매        Apple 워치 ultra 49mm GPS+Cellular × 티타늄 × 옐로베이지 / s/m 트레일 루프    49mm_GPS+Cellular    1,021,080원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 27,
    "url": "http://localhost:4000/APPLE-WATCH7-Lineup/",
    "title": "애플워치7",
    "body": "2023/05/04 - 2023-05-04 애플워치7 최저가 441,320원 애플워치7의 가장 만족스러웠던 부분은 Assistive touch(한손조작)기능 입니다. 그외 헬스케어, 얇아진 디자인(10. 7mm -&gt; 9mm), 국제 긴급 구조 요청5배터리 수명은 전작과 동일하지만, 급속 충전이 가능합니다. 애플워치7 일자별 판매가격 차트: 애플워치7 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 7 41mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS    499,000원    최저가구매        Apple 워치 7 41mm GPS × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    41mm_GPS    489,200원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    41mm_GPS+Cellular    907,000원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 어비스블루 스포츠 밴드    41mm_GPS+Cellular    720,650원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    720,650원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 그린 / 클로버 스포츠 밴드    41mm_GPS+Cellular    579,000원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 레드 / 레드 스포츠 밴드    41mm_GPS+Cellular    579,000원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    재고없음    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 블루 / 어비스블루 스포츠 밴드    41mm_GPS+Cellular    579,000원    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    재고없음    최저가구매        Apple 워치 7 41mm GPS+Cellular × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    41mm_GPS+Cellular    472,820원    최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 그린 / 클로버 스포츠 밴드    45mm_GPS    539,000원    최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 미드나이트 케이스, 안트라사이트/블랙 밴드    45mm_GPS    539,000원    최저가구매        Apple 워치 7 45mm GPS × 알루미늄 × 스타라이트 케이스, 퓨어플래티넘/블랙 밴드    45mm_GPS    441,320원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    45mm_GPS+Cellular    801,360원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 다크체리 스포츠 밴드    45mm_GPS+Cellular    재고없음    최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    45mm_GPS+Cellular    969,000원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    820,190원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    909,000원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 알루미늄 × 미드나이트 케이스, 안트라사이트/블랙 밴드    45mm_GPS+Cellular    659,000원    최저가구매        Apple 워치 7 45mm GPS+Cellular × 알루미늄 × 블루 / 어비스블루 스포츠 밴드    45mm_GPS+Cellular    659,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 28,
    "url": "http://localhost:4000/APPLE-WATCH8-Lineup/",
    "title": "애플워치8",
    "body": "2023/05/04 - 2023-05-04 애플워치8 최저가 511,100원 온종일 지속되는 18시간의 배터리 사용 시간을 자랑하는 Apple Watch Series 8은 손목 온도 감지 기능, 충돌 감지, 국제 로밍 등을 도입하며, 심전도 앱 및 충돌 감지 등 최고의 건강 및 안전 기능을 제공한다. 애플워치7과의 큰 차이점은 “피부온도센서”와 “충돌감지기능”을 포함하고 있습니다. 애플워치8 일자별 판매가격 차트: 애플워치8 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        Apple 워치 8 41mm GPS × 알루미늄 × product red / 레드 스포츠 밴드    41mm_GPS    527,000원    최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS    511,100원    최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS    534,540원    최저가구매        Apple 워치 8 41mm GPS × 알루미늄 × 실버 / 화이트 스포츠 밴드    41mm_GPS    540,050원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    41mm_GPS+Cellular    1,024,000원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    41mm_GPS+Cellular    952,100원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 실버 / 실버 밀레니즈 루프    41mm_GPS+Cellular    955,170원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 골드 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    959,000원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    881,810원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 스테인리스 스틸 × 실버 / 화이트 스포츠 밴드    41mm_GPS+Cellular    901,000원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × product red / 레드 스포츠 밴드    41mm_GPS+Cellular    719,000원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    41mm_GPS+Cellular    659,610원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    41mm_GPS+Cellular    719,000원    최저가구매        Apple 워치 8 41mm GPS+Cellular × 알루미늄 × 실버 / 화이트 스포츠 밴드    41mm_GPS+Cellular    670,570원    최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × product red / 레드 스포츠 밴드    45mm_GPS    569,000원    최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 미드나이트 / 미드나이트 스포츠 밴드    45mm_GPS    563,880원    최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 스타라이트 / 스타라이트 스포츠 밴드    45mm_GPS    563,100원    최저가구매        Apple 워치 8 45mm GPS × 알루미늄 × 실버 / 화이트 스포츠 밴드    45mm_GPS    560,560원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 골드 밀레니즈 루프    45mm_GPS+Cellular    1,030,000원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 그래파이트 밀레니즈 루프    45mm_GPS+Cellular    1,025,490원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 실버 / 실버 밀레니즈 루프    45mm_GPS+Cellular    982,330원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 골드 / 스타라이트 스포츠 밴드    45mm_GPS+Cellular    965,000원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 그래파이트 / 미드나이트 스포츠 밴드    45mm_GPS+Cellular    962,790원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스테인리스 스틸 × 실버 / 화이트 스포츠 밴드    45mm_GPS+Cellular    918,430원    최저가구매        Apple 워치 8 45mm GPS+Cellular × product red / 레드 스포츠 밴드    45mm_GPS+Cellular    759,000원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 미드나이트 / 미드나이트 스포츠 밴드    45mm_GPS+Cellular    759,000원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 스타라이트 / 스타라이트 스포츠 밴드    45mm_GPS+Cellular    724,000원    최저가구매        Apple 워치 8 45mm GPS+Cellular × 실버 / 화이트 스포츠 밴드    45mm_GPS+Cellular    704,100원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 29,
    "url": "http://localhost:4000/IPHONE-SE3-Lineup/",
    "title": "아이폰 SE3",
    "body": "2023/05/04 - 2023-05-04 아이폰 SE3 최저가 572,140원 아이폰SE의 작은 화면은 단점이지만, 반면 작은 사이즈의 스마트폰을 선호하는 소비자에게는 관심을 끌만하다. 아이폰SE 사이즈는 세로13. 8cm x 가로6. 7cm x 두께0. 7cm, 무게 144g으로 콤팩트하다. 특히 여성 사용자 또는 손이 작은 사용자의 경우 한 손에 쏙 들어오고, 주머니에 잘 들어가는 아이폰SE가 편리하게 느껴질 것이다. 가벼운 폰 선호자라면 장점일 수도 아이폰 SE3 일자별 판매가격 차트: 아이폰 SE3 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphonese3 product red 64gb     64gb    639,000원    최저가구매        apple iphonese3 스타라이트 64gb     64gb    572,140원    최저가구매        apple iphonese3 product red 128gb     128gb    660,000원    최저가구매        apple iphonese3 미드나이트 128gb     128gb    650,750원    최저가구매        apple iphonese3 스타라이트 128gb     128gb    688,750원    최저가구매        apple iphonese3 product red 256gb     256gb    870,000원    최저가구매        apple iphonese3 미드나이트 256gb     256gb    870,000원    최저가구매        apple iphonese3 스타라이트 256gb     256gb    870,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 30,
    "url": "http://localhost:4000/IPHONE-14-PROMAX-Lineup/",
    "title": "아이폰14 프로맥스",
    "body": "2023/05/04 - 2023-05-04 아이폰14 PROMAX 최저가 1,488,980원 아이폰14 프로와 아이폰14 프로 맥스는 거의 모든 기능이 동일합니다. 두 모델 모두 OLED Super Retina XDR 디스플레이, 상시 표시형 디스플레이, 다이내믹 아일랜드, A16 바이오닉 칩, 5G 통신, 프로급 카메라 및 동일한 색상을 제공합니다. 아이폰14 프로와 아이폰14 프로 맥스의 모든 차이점은 오직 디스플레이 크기 차이에서 기인합니다. 아이폰14 PROMAX 일자별 판매가격 차트: 아이폰14 PROMAX 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14promax 골드 128gb     128gb    1,524,000원    최저가구매        apple iphone14promax 딥퍼플 128gb     128gb    1,549,000원    최저가구매        apple iphone14promax 스페이스블랙 128gb     128gb    1,524,000원    최저가구매        apple iphone14promax 실버 128gb     128gb    1,488,980원    최저가구매        apple iphone14promax 골드 256gb     256gb    1,647,870원    최저가구매        apple iphone14promax 딥퍼플 256gb     256gb    1,695,560원    최저가구매        apple iphone14promax 스페이스블랙 256gb     256gb    1,743,000원    최저가구매        apple iphone14promax 실버 256gb     256gb    1,652,000원    최저가구매        apple iphone14promax 골드 512gb     512gb    1,992,000원    최저가구매        apple iphone14promax 딥퍼플 512gb     512gb    2,025,000원    최저가구매        apple iphone14promax 스페이스블랙 512gb     512gb    1,943,700원    최저가구매        apple iphone14promax 실버 512gb     512gb    1,943,700원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 31,
    "url": "http://localhost:4000/IPHONE-14-PRO-Lineup/",
    "title": "아이폰14 프로",
    "body": "2023/05/04 - 2023-05-04 아이폰14 PRO 최저가 1,316,880원 애플은 고급 모델과 일반 모델의 디자인을 차별화했다. 아이폰14 프로 시리즈엔 ‘다이내믹 아일랜드’라 이름 붙인 새로운 디자인이 적용됐다. 기존 아이폰의 상징과도 같았던 전면 카메라 상단 ‘M자’ 형태 노치(화면 상단 테두리) 디자인이 카메라 모듈 부분만 구멍을 뚫은 펀치홀 카메라로 변경됐다. 펀치홀 카메라 부분은 하나의 디스플레이 창으로 이용할 수 있다. ###프로 시리즈만 AP·카메라 개선스마트폰의 두뇌 역할을 하는 애플리케이션프로세서(AP)도 모델별로 다르다. 아이폰14 프로 시리즈엔 최신형 AP인 ‘A16 바이오닉’ 칩이 장착됐다. 애플 AP 중 최초로 4㎚(나노미터·1㎚는 10억분의 1m) 공정에서 제작된 프로세서다. 애플은 “동급 경쟁 제품보다 최대 40% 빠르고, 전력 소비는 3분의 1 수준”이라고 설명했다. 일반 모델엔 전작 아이폰13 시리즈에 탑재됐던 A15 바이오닉을 넣었다. 이 외에 다양한 기능이 프로 시리즈에 집중됐다. 아이폰 처음으로 기존보다 화소 수를 4배 높인 4800만 화소 메인 카메라가 탑재됐다. 애플은 “전작보다 후면 카메라 이미지 센서가 63%가 커졌다”고 했다. 시간과 날씨 등 정보를 화면에 항상 표시하는 ‘AOD(올웨이즈 온 디스플레이)’ 기능도 프로 시리즈에서만 지원된다. 아이폰14 PRO 일자별 판매가격 차트: 아이폰14 PRO 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14pro 골드 128gb     128gb    1,316,880원    최저가구매        apple iphone14pro 딥퍼플 128gb     128gb    1,339,200원    최저가구매        apple iphone14pro 스페이스블랙 128gb     128gb    1,355,000원    최저가구매        apple iphone14pro 실버 128gb     128gb    1,324,800원    최저가구매        apple iphone14pro 골드 256gb     256gb    1,502,000원    최저가구매        apple iphone14pro 딥퍼플 256gb     256gb    1,484,100원    최저가구매        apple iphone14pro 스페이스블랙 256gb     256gb    1,470,000원    최저가구매        apple iphone14pro 실버 256gb     256gb    1,490,380원    최저가구매        apple iphone14pro 골드 512gb     512gb    1,785,600원    최저가구매        apple iphone14pro 딥퍼플 512gb     512gb    1,785,600원    최저가구매        apple iphone14pro 스페이스블랙 512gb     512gb    1,767,000원    최저가구매        apple iphone14pro 실버 512gb     512gb    1,737,860원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 32,
    "url": "http://localhost:4000/IPHONE-14-PLUS-Lineup/",
    "title": "아이폰14 플러스",
    "body": "2023/05/04 - 2023-05-04 아이폰14 PLUS 최저가 1,152,000원 아이폰14 PLUS의 장점은 배터리 용량입니다. 다른것은 전작과 14기본모델대비 뚜렷한 차이를 보이고 있지 않습니다. 아이폰 14 플러스의 배터리 용량은 현재까지 출시한 모든 아이폰 모델의 무게 대비 배터리 용량이 가장 큽니다. 따라서 무게는 가볍지만 배터리 용량은 아이폰 14보다 더 많아졌기 때문에 하루 종일 사용해도 방전을 걱정할 필요가 없을 정도입니다. 만약 배터리 용량 때문에라도 기기를 바꿀 계획이라면 크게 신경 쓸 필요 없는 모델이 될 것입니다. 아이폰14 PLUS 일자별 판매가격 차트: 아이폰14 PLUS 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14plus 레드 128gb     128gb    1,152,000원    최저가구매        apple iphone14plus 미드나이트 128gb     128gb    1,152,000원    최저가구매        apple iphone14plus 블루 128gb     128gb    1,152,000원    최저가구매        apple iphone14plus 스타라이트 128gb     128gb    1,152,000원    최저가구매        apple iphone14plus 퍼플 128gb     128gb    1,217,000원    최저가구매        apple iphone14plus 레드 256gb     256gb    1,267,000원    최저가구매        apple iphone14plus 미드나이트 256gb     256gb    1,280,000원    최저가구매        apple iphone14plus 블루 256gb     256gb    1,280,000원    최저가구매        apple iphone14plus 스타라이트 256gb     256gb    1,280,000원    최저가구매        apple iphone14plus 퍼플 256gb     256gb    1,280,000원    최저가구매        apple iphone14plus 레드 512gb     512gb    1,699,000원    최저가구매        apple iphone14plus 미드나이트 512gb     512gb    1,514,000원    최저가구매        apple iphone14plus 블루 512gb     512gb    1,588,000원    최저가구매        apple iphone14plus 스타라이트 512gb     512gb    1,536,000원    최저가구매        apple iphone14plus 퍼플 512gb     512gb    1,535,500원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 33,
    "url": "http://localhost:4000/IPHONE-14-Lineup/",
    "title": "아이폰14",
    "body": "2023/05/04 - 2023-05-04 아이폰14 최저가 1,051,600원 아이폰14의 차이점은 크게 세 가지로 요약된다. 전면 디스플레이에 카메라 모듈 부분을 뚫어 구현한 ‘다이내믹 아일랜드’, 상시 디스플레이 기능인 AOD(올웨이즈온 디스플레이), 메인 카메라의 화질 개선이다. 아이폰14 일자별 판매가격 차트: 아이폰14 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone14 레드 128gb     128gb    1,134,000원    최저가구매        apple iphone14 미드나이트 128gb     128gb    1,077,600원    최저가구매        apple iphone14 블루 128gb     128gb    1,051,600원    최저가구매        apple iphone14 스타라이트 128gb     128gb    1,068,750원    최저가구매        apple iphone14 퍼플 128gb     128gb    1,113,000원    최저가구매        apple iphone14 레드 256gb     256gb    1,276,000원    최저가구매        apple iphone14 미드나이트 256gb     256gb    1,240,000원    최저가구매        apple iphone14 블루 256gb     256gb    1,217,000원    최저가구매        apple iphone14 스타라이트 256gb     256gb    1,249,200원    최저가구매        apple iphone14 퍼플 256gb     256gb    1,217,000원    최저가구매        apple iphone14 레드 512gb     512gb    1,500,000원    최저가구매        apple iphone14 미드나이트 512gb     512gb    1,437,000원    최저가구매        apple iphone14 블루 512gb     512gb    1,481,000원    최저가구매        apple iphone14 스타라이트 512gb     512gb    1,496,000원    최저가구매        apple iphone14 퍼플 512gb     512gb    1,437,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 34,
    "url": "http://localhost:4000/IPHONE-13-PRO-Lineup/",
    "title": "아이폰13 프로",
    "body": "2023/05/04 - 2023-05-04 아이폰13 PRO 최저가 1,350,000원 아이폰13 기본형과 프로를 구분하는 가장 큰 특징은 바로 ‘카메라’다. 아이폰13에는 듀얼(2개, 초광각·광각) 카메라가, 아이폰13 프로에는 트리플(3개, 초광각·광각·망원) 카메라가 적용됐다. 프로는 망원 렌즈를 더해 6배 광학 줌이 가능하다. 기본형은 2배 광학 줌에 머문다. 아이폰13 PRO 일자별 판매가격 차트: 아이폰13 PRO 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13pro 골드 128gb     128gb    1,350,000원    최저가구매        apple iphone13pro 그래파이트 128gb     128gb    1,350,000원    최저가구매        apple iphone13pro 시에라블루 128gb     128gb    1,350,000원    최저가구매        apple iphone13pro 실버 128gb     128gb    1,350,000원    최저가구매        apple iphone13pro 알파인그린 128gb     128gb    1,350,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 35,
    "url": "http://localhost:4000/IPHONE-13-MINI-Lineup/",
    "title": "아이폰13 미니",
    "body": "2023/05/04 - 2023-05-04 아이폰13 MINI 최저가 856,520원 아담한 사이즈 : 131. 5 × 64. 2 × 7. 65mm, 무게는 140g으로 아담하고, 가볍습니다. …작은 휴대폰 중 가장 좋은 성능 : 아이폰14 미니가 없으므로 현존하는 작은 아이폰 중 가장 성능이 좋습니다. 아이폰13 MINI 일자별 판매가격 차트: 아이폰13 MINI 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13mini 그린 128gb     128gb    893,000원    최저가구매        apple iphone13mini 레드 128gb     128gb    902,000원    최저가구매        apple iphone13mini 미드나이트 128gb     128gb    856,520원    최저가구매        apple iphone13mini 블루 128gb     128gb    866,000원    최저가구매        apple iphone13mini 핑크 128gb     128gb    856,520원    최저가구매        apple iphone13mini 그린 256gb     256gb    1,035,400원    최저가구매        apple iphone13mini 레드 256gb     256gb    1,025,470원    최저가구매        apple iphone13mini 미드나이트 256gb     256gb    993,400원    최저가구매        apple iphone13mini 블루 256gb     256gb    1,035,400원    최저가구매        apple iphone13mini 스타라이트 256gb     256gb    987,350원    최저가구매        apple iphone13mini 핑크 256gb     256gb    973,150원    최저가구매        apple iphone13mini 그린 512gb     512gb    1,291,600원    최저가구매        apple iphone13mini 레드 512gb     512gb    1,291,600원    최저가구매        apple iphone13mini 미드나이트 512gb     512gb    1,211,000원    최저가구매        apple iphone13mini 블루 512gb     512gb    1,291,600원    최저가구매        apple iphone13mini 스타라이트 512gb     512gb    1,211,000원    최저가구매        apple iphone13mini 핑크 512gb     512gb    1,251,800원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 36,
    "url": "http://localhost:4000/IPHONE-13-Lineup/",
    "title": "아이폰13",
    "body": "2023/05/04 - 2023-05-04 아이폰13 최저가 1,046,300원 아이폰13 시리즈는 전작과 동일한 △아이폰13 △아이폰13 미니 △아이폰13 프로 △아이폰13 프로맥스 등 4종으로 구성됐다. 화면이 가장 작은 5. 4인치 미니, 가장 큰 6. 7인치 프로를 제외하면 ‘아이폰13’과 ‘아이폰13 프로’가 남는다. 두 모델 모두 6. 1인치다. 전체적인 외형은 큰 차이가 없다. 테두리가 화면과 직각을 이루는 각진 형태다. 다만 화면 상단을 움푹 판 듯한 ‘노치’가 전작 대비 약 20% 줄었다. 한 가지 큰 차이는 아이폰13은 ‘항공우주 등급 알루미늄’으로, 프로는 ‘수술 도구급 고강도 스테인리스 스틸’ 소재로 마감됐다는 것이다. 소재 차이로 인해 프로 모델이 조금 더 무겁다. 화면 크기는 동일함에도 아이폰13 무게는 173g, 아이폰13 프로는 203g이다. 아이폰13 일자별 판매가격 차트: 아이폰13 2023-05-04 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13 그린 128gb     128gb    1,046,300원    최저가구매        apple iphone13 미드나이트 128gb     128gb    1,046,300원    최저가구매        apple iphone13 블루 128gb     128gb    1,046,300원    최저가구매        apple iphone13 스타라이트 128gb     128gb    1,046,300원    최저가구매        apple iphone13 그린 256gb     256gb    1,156,500원    최저가구매        apple iphone13 레드 256gb     256gb    1,156,500원    최저가구매        apple iphone13 블루 256gb     256gb    1,156,500원    최저가구매        apple iphone13 스타라이트 256gb     256gb    1,156,500원    최저가구매        apple iphone13 그린 512gb     512gb    1,300,000원    최저가구매        apple iphone13 레드 512gb     512gb    1,300,000원    최저가구매        apple iphone13 블루 512gb     512gb    1,300,000원    최저가구매        apple iphone13 스타라이트 512gb     512gb    1,300,000원    최저가구매        apple iphone13 핑크 512gb     512gb    1,300,000원    최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
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