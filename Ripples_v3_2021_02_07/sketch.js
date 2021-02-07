/* jshint esversion: 8 */

let rippAr = [];
let inArr = [];
let ripp;
let r = 0;
let t = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  ripple();
}

function ripple() {
  for (let j = 0; j < t; j++) {
    inArr[j] = new Ripples(mouseX, mouseY, r)
  }
  for (let j = 0; j < t; j++) {
    delay(j);
    
  }
}

async function delay(j) {
  await setTimeout(() => rippAr.push(inArr[j]), j * 300)
  console.log(rippAr);
}




function draw() {
  background(220);
  for (let i = 0; i < rippAr.length; i++) {
    //
    rippAr[i].move();
    rippAr[i].display();
  }
    // console.log(arr[i])
  for (let i = rippAr.length - 1; i >= 0; i--) {
    if (rippAr[i].strok == 0) {
      rippAr.splice(0, 1)
      //console.log(rippAr)
    }
  }
}


// let a1 = ['a', 'b', 'c']
// let a2 = a1.map(function(item) { return item.toUpperCase() })
// console.log(a2) // logs ['A', 'B', 'C']