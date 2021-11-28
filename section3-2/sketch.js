// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 0.4; // 重力加速度
const vyMax = 30;
const jump = 20;
const size = 20;
const ground = 20;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width;
  y = 0;
  vx = 3;
  vy = 2;
  h = height - ground - size / 2;
}

function draw(){
  background(160, 192, 255);
  textSize(180);
  text("L",x, y);
  textAlign(CENTER);
  textSize(180);
  text("WE LCOME",width/2, height/2);
  textSize(30);
  text("PURODUCTIONS",width*(7/10), height/2 + 50);


  x += vx;
  y += vy;
  vy += g;

  vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
  if(y < 0 || y > height/2){ vy = -1 * vy; }
  y = constrain(y, 0, height/2);

  //if(keyIsDown(LEFT_ARROW)){ x -= 20; }
  //if(keyIsDown(RIGHT_ARROW)){ x += 20; }
  //if(keyIsDown(" ".charCodeAt(0))){
    //if(y < h / 2){ // 地面より上、つまり空中にいる
    //vy += g; // 下方向に重力の影響で加速する
  //}
  //else{
    //vy = 0;
    //y = h / 2;
  //}


　// 端の処理パターン (2) 跳ね返る
  if(x < 100 || x > width){ vx = -1.0 * vx; }
  if(y > height){ vy = -1 * vy; }
  if(x > width/2-160 &&x < width/2-150){
        if(y==height/2){noLoop();}
        else{x -= vx;}
  }
  x = constrain(x, 0, width);
  y = constrain(y, height/4, height/2);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
/色を変化させるためにループ処理をいれる/
