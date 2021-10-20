function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if (i % 2 == 0){
        if(j % 2 == 1){
          //グレーで四角を塗る
          fill("grey");
          rect(size * i, size * j, size, size);
          if (j<3) {
            //赤の円を描く
            fill("red");
            ellipse(size*i+size/2, size*j+size/2,size);
            arc(size*i+size/2,size*j+size/2,size,PI*2);
           }
           if (j>4) {
             //黒の円を描く
             fill("black");
             ellipse(size*i+size/2, size*j+size/2,size);
             arc(size*i+size/2,size*j+size/2,size,PI*2);
            }

        }
      }
      if (i % 2 == 1){
        if(j % 2 == 0){
          //グレーで四角を塗る
          fill("grey");
          rect(size * i, size * j, size, size);
          if (j<3) {
            //赤の円を描く
            fill("red");
            ellipse(size*i+size/2, size*j+size/2,size);
            arc(size*i+size/2,size*j+size/2,size,PI*2);
          }
          if (j>4) {
            //黒の円を描く
            fill("black");
            ellipse(size*i+size/2, size*j+size/2,size);
            arc(size*i+size/2,size*j+size/2,size,PI*2);
           }
        }
      }
    }
  }
}
