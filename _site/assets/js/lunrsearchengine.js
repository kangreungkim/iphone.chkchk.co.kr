
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                             아이폰14 PRO 막강한 성능                              :               2023-03-22 아이폰14 PLUS 최저가 1,344,320원:                                                                                                                                                                       Sal                                09 Feb 2023                                                                                                                                                                                                                                                                                                                              아이폰13 PRO                              :               2023-03-22 아이폰13 PRO 최저가 1,350,000원:                                                                                                                                                                       Sal                                09 Mar 2022                                                                                                                            All Stories:                                                                                                     Iphone 13 Lineup              :       2023-04-25 아이폰13 최저가 1,046,300원:                                                                               1,046,300                2023-03-09                                                                                                                                     아이폰14 SE              :       2023-03-22 아이폰14 최저가 1,099,750원:                                                                               1,099,750                2023-02-09                                                                                                                                     아이폰14 PRO MAX              :       2023-03-22 아이폰14 PRO MAX 최저가 1,509,200원:                                                                               1,509,200                2023-02-09                                                                                                                                     아이폰14 PRO 막강한 성능              :       2023-03-22 아이폰14 PLUS 최저가 1,344,320원:                                                                               1,344,320                2023-02-09                                                                                                                                     아이폰14 PLUS 더크게 더넓게              :       2023-03-22 아이폰14 PLUS 최저가 1,188,000원:                                                                               1,188,000                2023-02-09                                                                                                                                     아이폰14              :       2023-03-22 아이폰14 최저가 1,099,750원:                                                                               1,099,750                2023-02-09                                               &laquo; Prev       1        2      Next &raquo; "
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
    "title": "Iphone 13 Lineup",
    "body": "2023/03/09 - 2023-04-25 아이폰13 최저가 1,046,300원 아이폰13 일자별 판매가격 차트: 아이폰13 오늘의 판매가격:       제품명   SPEC   판매가격   제품링크        apple iphone13 그린 128gb     128gb    재고없음    오늘 최저가구매        apple iphone13 미드나이트 128gb     128gb    재고없음    오늘 최저가구매        apple iphone13 블루 128gb     128gb    재고없음    오늘 최저가구매        apple iphone13 스타라이트 128gb     128gb    재고없음    오늘 최저가구매        apple iphone13 그린 256gb     256gb    재고없음    오늘 최저가구매        apple iphone13 레드 256gb     256gb    재고없음    오늘 최저가구매        apple iphone13 블루 256gb     256gb    재고없음    오늘 최저가구매        apple iphone13 스타라이트 256gb     256gb    재고없음    오늘 최저가구매        apple iphone13 그린 512gb     512gb    1,326,000원    오늘 최저가구매        apple iphone13 레드 512gb     512gb    1,326,000원    오늘 최저가구매        apple iphone13 블루 512gb     512gb    1,326,000원    오늘 최저가구매        apple iphone13 스타라이트 512gb     512gb    1,349,000원    오늘 최저가구매        apple iphone13 핑크 512gb     512gb    1,326,000원    오늘 최저가구매    이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/IPHONE-SE3-Lineup/",
    "title": "아이폰14 SE",
    "body": "2023/02/09 - 2023-03-22 아이폰14 최저가 1,099,750원 2030년까지 탄소중립성을 달성하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 13 및 iPhone 13 mini 제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다. 대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와 호환되는 USB-C-Lightning 케이블은 포함되어 있습니다. 기존에 사용 중이던 USB‑A-Lightning 케이블, 전원 어댑터, 헤드폰이 이 iPhone 모델과 호환된다면 계속 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/IPHONE-14-PROMAX-Lineup/",
    "title": "아이폰14 PRO MAX",
    "body": "2023/02/09 - 2023-03-22 아이폰14 PRO MAX 최저가 1,509,200원 2030년까지 탄소중립성을 달성하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 13 및 iPhone 13 mini 제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다. 대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와 호환되는 USB-C-Lightning 케이블은 포함되어 있습니다. 기존에 사용 중이던 USB‑A-Lightning 케이블, 전원 어댑터, 헤드폰이 이 iPhone 모델과 호환된다면 계속 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/IPHONE-14-PRO-Lineup/",
    "title": "아이폰14 PRO 막강한 성능",
    "body": "2023/02/09 - 2023-03-22 아이폰14 PLUS 최저가 1,344,320원 2030년까지 탄소중립성을 달성하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 13 및 iPhone 13 mini 제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다. 대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와 호환되는 USB-C-Lightning 케이블은 포함되어 있습니다. 기존에 사용 중이던 USB‑A-Lightning 케이블, 전원 어댑터, 헤드폰이 이 iPhone 모델과 호환된다면 계속 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/IPHONE-14-PLUS-Lineup/",
    "title": "아이폰14 PLUS 더크게 더넓게",
    "body": "2023/02/09 - 2023-03-22 아이폰14 PLUS 최저가 1,188,000원 2030년까지 탄소중립성을 달성하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 13 및 iPhone 13 mini 제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다. 대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와 호환되는 USB-C-Lightning 케이블은 포함되어 있습니다. 기존에 사용 중이던 USB‑A-Lightning 케이블, 전원 어댑터, 헤드폰이 이 iPhone 모델과 호환된다면 계속 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/IPHONE-14-Lineup/",
    "title": "아이폰14",
    "body": "2023/02/09 - 2023-03-22 아이폰14 최저가 1,099,750원 2030년까지 탄소중립성을 달성하기 위한 Apple의 지속적인 노력의 일환으로 iPhone 13 및 iPhone 13 mini 제품 구성에는 전원 어댑터 및 EarPods이 포함되지 않습니다. 대신 급속 충전을 지원하고 USB‑C 전원 어댑터 및 컴퓨터 포트와 호환되는 USB-C-Lightning 케이블은 포함되어 있습니다. 기존에 사용 중이던 USB‑A-Lightning 케이블, 전원 어댑터, 헤드폰이 이 iPhone 모델과 호환된다면 계속 사용하시길 권장합니다. 하지만 새로운 Apple 전원 어댑터 또는 헤드폰이 필요하다면 원하시는 제품을 구입할 수 있습니다. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/IPHONE-13-PRO-Lineup/",
    "title": "아이폰13 PRO",
    "body": "2022/03/09 - 2023-03-22 아이폰13 PRO 최저가 1,350,000원 As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/IPHONE-13-MINI-Lineup/",
    "title": "Iphone 13 Mini Lineup",
    "body": "2022/03/09 - 2023-04-24 아이폰13 MINI 최저가 838,500원 아이폰13 MINI 일자별 판매가격 차트: 아이폰13 MINI 오늘의 판매가격: 표(제품가격/링크) "
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