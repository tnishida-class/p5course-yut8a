// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  average = sum / scores.length;
  console.log(average);
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    if(largest < scores[i]){
      largest = scores[i];
    }
  }
  console.log(largest);

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if(smallest > scores[i]){
      smallest = scores[i];
    }
  }
  console.log(smallest);

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length ;
    const h = height * scores[i] / 100;
    if(scores[i] == smallest){
    fill(0,0,255);
    }
    else if (scores[i] == largest){
    fill(204,0,0);
    }
    else{
    fill(0);
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  stroke(0,255,0);
  line(0,height - average * height / 100 , width ,
    height- average * height / 100);
  stroke(204,0,0)
  line(0,height - largest * height / 100 , width
    , height- largest * height / 100);
  stroke(0,0,255)
  line(0,height - smallest * height / 100 , width
    , height- smallest * height / 100);
}
