console.log("jquary-test.jsを読み込みました。")

// セレクタ
let test_p_1 = $("#test-p-1").text();
console.log(test_p_1);

// class
let test_p_2 = $(".test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123);

$("#test-p-1").hide();
// メソッド
// toggle
function toggle() {
    // 非表示
    // $("#test-p-1").hide();

    // 表示
    // $("#test-p-1").show();
    
    // 表示・非表示
    $("#test-p-1").toggle();
    
}

function slide() {
    // スライドダウン

    // 表示
    // $("#test-p-1").slideDown();

    // 消す
    // $("#test-p-1").slideUp();

    // アップ・ダウン
    $("#test-p-1").slideToggle();
}

function fade() {
    // フェードイン
    // $("#test-p-1").fadeIn();
    
    // フェードアウト
    // $("#test-p-1").fadeOut();
    
    // フェードイン・アウト
    $("#test-p-1").fadeToggle();
}

function color() {
    // 色を変える
    $("#test-p-1").css("color" , "red");
    
    // 文字のサイズを変える
    $("#test-p-1").css("fontSize","64px");
}

function customAnimate() {
    // アニメーションをつける
    // JSON
    // $("#test-p-1").animate(
    //     {
    //          "fontSize": "64px",
    //     }
    // );  

    // メソッドチェーン
     $("#test-p-1").animate({
        "fontSize" : "64px",
     }).animate({
        "fontSize" : "16px",
     });
}


// イベントハンドラ
$("#input-1") .on("focus", function(){
    console.log("インプットタグがフォーカスされました。");
});
