//　多角形がランダムに出現するプログラム
let polygon;
let size;
function setup(){
  createCanvas(windowWidth, windowHeight);
  polygon = [];
  count = 0;
}

function draw(){
  count++;
  background(160, 192, 255);
  for(let i = 0; i < polygon.length; i++){
    let b = polygon[i];
    regularPolygon(b.n,b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  //わらわらと多角形を描写
  if(count % 60 == 0){
    const b = {x: width/2,y:height/2,size:50,vx: random(2)-1,vy:random(2)-1,n:round(random(3,9))};
    polygon.push(b);
  }

}
//enterキーを押すと多角形の色がランダムに変化
function keyPressed(){
  if(keyCode == ENTER){ fill(round(random(0,255)),round(random(0,255)),round(random(0,255))); }
}
//多角形の関数
function regularPolygon(n,cx, cy, r){
    beginShape();
    for(var i = 0; i < n; i++){
      let theta = TWO_PI * i / n- HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
