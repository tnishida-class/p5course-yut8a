// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(200,200,"I love hinatazaka46",255,255,0);
}

function balloon(x,y,t,r,g,b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(x, y, w + p * 2, h + p * 2);
  fill(r,g,b);
  text(t, x, h + x);
  fill(0);
  triangle(x, y+(6/5*h), x*(19/20), y+2*h, x+x/3, y+h)
}
