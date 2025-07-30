function janken(myHand){
    // 必要となる変数（データ）の整理
    let handArray = ["グー","チョキ","パー"];

    let resultArray = ["あいこです","あなたの負けです","あなたの勝ちです"];

    let result = 0;

    let cpHand = 0;
    
    //プレイヤーの手を決定
    console.log("あなたの手は：" + handArray[myHand])

    //機械の手を決定
    let rand = Math.random()*100
    console.log("乱数："+ rand)

    //Math.floor()：与えられた引数以下のの最大の整数を返す
    let rand_int = Math.floor(rand)
    console.log("乱数（整数）：" +rand_int)

    //生成された乱数を3で割って、余りをコンピュータの手とする
    //余りは絶対に０，１，２のどれかになるため
    cpHand = rand_int % 3;
    console.log("pcHandの手は" + cpHand);
    console.log("コンピュータの手は" + handArray[cpHand]);

    //勝敗判定
    if(myHand === 0){
        if(cpHand === 0){
            result = 0;
        }else if(cpHand === 1){
            result = 2;
        }else if(cpHand === 2){
            result = 1;
        }

    }else if(myHand === 1){
         if(cpHand === 0){
            result = 1;
        }else if(cpHand === 1){
            result = 0;
        }else if(cpHand === 2){
            result = 2;
        }

    }else if(myHand === 2){
         if(cpHand === 0){
            result = 2;
        }else if(cpHand === 1){
            result = 1;
        }else if(cpHand === 2){
            result = 0;
        }

    }else{
        console.log("想定されていないデータが渡されました")

    }
    
    //結果を表示
    console.log(resultArray[result]);
    console.log("--------------------------------------")

    //HTMLに表示
    const janken_result = document.querySelector("#result")
    janken_result.textContent = resultArray[result];

     



}