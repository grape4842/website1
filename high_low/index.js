var lis = [
    ["입니다.", "이다."],
    ["합니다.", "한다."],
    [" 저는", " 나는"],
    ["했습니다.", "했다."],
    ["봤습니다.", "봤다."],
    ["쳤습니다.","쳤다."],
    ["쌌습니다.","쌌다."],
    ["해주세요.", "해요."],
    ["샀습니다.","샀다."],
    ["었습니다.","었다."],
    ["먹습니다.","먹다."],
    ["있습니다.", "있다."],
    ["좋습니다.", "좋다."],
    ["많습니다.", "많다."],
    ["됩니다.", "된다."],
    ["없습니다.", "없다."],
    ["하겠습니다.","하겠다."],
    ["다가옵니다.","다가온다."],
    ["필수입니다.","필수다."],
    ["생깁니다.","생긴다."],
    ["않습니다.","않는다."],
    ["보겠습니다.","보겠다."],
    ["하십니다.","하신다."],
    ["가능합니다.","가능하다."],
    ["하였습니다.", "하였다."],
    ["중요합니다." , "중요하다."],
    ["바랍니다.","바란다."],
    ["나옵니다.","나온다."],
    ["놓았습니다.", "놓았다."],
    ["어렵습니다.", "어렵다."]
];




function value_check(){
    var check_cnt = document.getElementsByName("lan").length;
    for (var i=0; i<check_cnt;i++){
        if (document.getElementsByName("lan")[0].checked == true) {
            low_high();
            break        
        }else if(document.getElementsByName("lan")[1].checked == true){
            high_low();
            break;
        }
    }   
}
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

//  입니다 이다 이다 입니다 한다 한다 합니다 합니다
function low_high(){
    for(var i=0; i<lis.length;i++){
        resultString = resultString.replaceAll(lis[i][1],lis[i][0]);
    }
}

function high_low(){
    for(var i=0; i<lis.length;i++){
        resultString = resultString.replaceAll(lis[i][0],lis[i][1]);
    }
}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = 12 + obj.scrollHeight + "px";
}

