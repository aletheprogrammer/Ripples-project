let rippAr = [];
let r = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function mousePressed() {
  ripple()
}

function ripple(){
  let c = new Ripples(mouseX, mouseY, r)
  let d = new Ripples(mouseX, mouseY, r)
  let e = new Ripples(mouseX, mouseY, r)
  let f = new Ripples(mouseX, mouseY, r)
  //let g = new Ripples(mouseX, mouseY, r)
  setTimeout(() => rippAr.push(c))
  setTimeout(() => rippAr.push(d), 300)
  setTimeout(() => rippAr.push(e), 600)
  setTimeout(() => rippAr.push(f), 900)
  //setTimeout(() => rippAr.push(g), 1200)
  //console.log(rippAr)
}

function draw() {
  background(220);
  for (let i = rippAr.length-1; i >= 0; i--) {
    rippAr[i].move();
    rippAr[i].display();
   if (rippAr[i].strok == 0){
     rippAr.splice(0, 1)
      
    }
  }
  
}
