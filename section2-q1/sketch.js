function setup() {
  noFill();

  for(let i = 0; i < 10; i++){
    let r = i * 10 + 10;
    if(i < 5){// blue
      stroke(0,0,255);
    }
    else{// red
      stroke(255,0,0);
    }
    ellipse(50,50,r);
    }
  }
