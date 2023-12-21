// Bounmce Challenge
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 650;
// global variables

let rect = {
  x: 100,
  y: 150,
  w: 40,
  h: 40,
  speed: 5,
  color: "blue",
};
let rect2 = {
  x: 240,
  y: 150,
  w: 40,
  h: 40,
  speed: 5,
  color: "green",
};
let rect3 = {
  x: 100,
  y: 400,
  w: 40,
  h: 40,
  xspeed: 5,
  yspeed: 5,
  color: "orange",
};

// drawFunct

requestAnimationFrame(animate);

function animate() {
  //  update variables
  rect.x += rect.speed;

  if (rect.x + rect.w > cnv.width) {
    rect.x = cnv.width - rect.w;
    rect.speed = -5;
  } else if (rect.x + rect.w < 40) {
    rect.x = rect.w;
    rect.speed = 5;
  }

  rect2.y += rect2.speed;

  if (rect2.y + rect2.h > cnv.height) {
    rect2.y = cnv.height - rect2.h;
    rect2.speed = -5;
  } else if (rect2.y + rect2.h < 40) {
    rect2.y = 0 + rect2.h;
    rect2.speed = 5;
  }
  // third rect
  rect3.x += rect3.xspeed;
  rect3.y -= rect3.yspeed;

  if (rect3.x + rect3.w > cnv.width) {
    rect3.xspeed = -5;
    rect3.yspeed = -5;
  } else if (rect3.x + rect3.w < 40) {
    rect3.yspeed = 5;
    rect3.xspeed = 5;
  } else if (rect3.y + rect3.h < 40) {
    rect3.xspeed = 5;
    rect3.yspeed = -5;
  } else if (rect3.y + rect3.h > cnv.height) {
    rect3.xspeed = -5;
    rect3.yspeed = 5;
  }

  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // draw a square
  ctx.fillStyle = "blue";
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  // draw secondsquare
  ctx.fillStyle = "green";
  ctx.fillRect(rect2.x, rect2.y, rect2.w, rect2.h);
  // deraw third sqr
  ctx.fillStyle = "orange";
  ctx.fillRect(rect3.x, rect3.y, rect3.w, rect3.h);
  // loop
  requestAnimationFrame(animate);
}
// event stufff(controlling how square moves)

// press mouse  and square moves
