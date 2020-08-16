$(function(){
    let tmpOtherSub = "<div class=\"swiper-slide swiper-slide-active\" style=\"width: 235.167px; margin-right: 20px;\">"
                    +"<div class=\"movie-item\" cid=\"1471\" ctype=\"2\">"
                    +"<h6 class=\"tag-top\"><span>{syncDesc}</span></h6>"
                    +"<a href=\"#\" title=\"{name}\">"
                    +"<div class=\"img-block\">"
                    +"<img width=\"100%\" class=\"swiper-lazy img-responsive swiper-lazy-loaded\" alt=\"{name}\" src=\"{img}\">"
                    +"<h6 class=\"tag-btm\"><span class=\"tag-free\">免費</span></h6>"
                    +"</div>"
                    +"<div class=\"info\">"
                    +"<h5>{name}</h5>"
                    +"<p class=\"note\">2020 / 台灣</p>"
                    +"</div>"
                    +"</a>"
                    +"<div class=\"btn-box\"><a class=\"btn btn-default autoplay\" href=\"#\" ctype=\"2\" cid=\"1471\">立即觀看</a></div>"
                    +"</div></div>";
    
    let tmpOtherSection = "<div class=\"container-fluid\">"
                    +"<div class=\"row movie-block\">"
                    +"<div class=\"col-xs-12\">"
                    +"<h2 class=\"section-title\">{title}</h2><a href=\"https://video.friday.tw/latest\" class=\"more pull-right\">更多</a>"
                    +"</div>"
                    +"<div class=\"swiper-container gallery-movie instance-0 swiper-container-horizontal\">"
                    +"<div class=\"swiper-wrapper\">"
                    +"</div>"
                    +"</div>"
                    +"<div class=\"swiper-button-prev swiper-button-white btn-prev-0 swiper-button-disabled\"></div>"
                    +"<div class=\"swiper-button-next swiper-button-white btn-next-0\"></div>"
                    +"</div>"
                    +"</div>"

    $.each(sectionList , (index , data) => {
        if(data != null){
            
            if(data.code == "class") {

            }else if(data.code == "5G"){

            }else {
                doOther(data);
            }
            
        }
    })

    function doOther(data) {
        console.log(data)
        const code = data.code;
        
        //載入大框
        let section = $("#" + code);
        section.html(tmpOtherSection.replace(/{title}/g , code))


        //載入子元素
        let lastHtml = "";
        $.each(data.sub , (index, subData) => {
            lastHtml += tmpOtherSub.replace(/{name}/g , subData.name)
                                .replace(/{img}/g , "images/" + code + "/" + subData.img)
                                .replace(/{syncDesc}/g , "");
        })

        let sectionSub = $("#" + code + " .swiper-wrapper");
        sectionSub.html(lastHtml)
    }
    

});

