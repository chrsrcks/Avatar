
var avatar = [
  { name: 'Head',
    shape: 0,
    size: 0,
    color: 0 },
  { name: 'Eyes',
    shape: 0,
    size: 0,
    color: 0 },
  { name: 'Nose',
    shape: 0,
    size: 0,
    color: 0 },
  { name: 'Mouth',
    shape: 0,
    size: 0,
    color: 0 },
  { name: 'Ears',
    shape: 0,
    size: 0,
    color: 0 }/*,
  { name: 'Hair',
    shape: 0,
    size: 0,
    color: 0 }*/
];
//console.log(avatar);
var head=true, eyes=true, nose=true, mouth=true, ears=true, hair=true, brown=true, beard=true;
var canvas;

function setup(){
  canvas = createCanvas(600, 400);
  canvas.position(window.innerWidth/2 - 400, 50);
  canvas.mouseClicked(gen_random);
  colorMode(HSB);

  // explorer   DO THIS in ejs?
  var explorer_div = createDiv(' ❖ Avatar  ');
  explorer_div.position(window.innerWidth/2 + 200, 10);
  var random_button = createButton('random');
  random_button.parent(explorer_div);
  random_button.mouseClicked(gen_random);
  // create key divs
  for (var i=0; i < avatar.length; i++) {
    var div = createDiv(avatar[i].name + ':  ');
    div.parent(explorer_div);
    div.id(avatar[i].name);
    div.class('open');
    div.mouseClicked(div_hide);
    var button_view = createButton('⛯');
    button_view.parent(div);
    button_view.mouseClicked(view_hide);
    //button_view.style('display', 'block');

    console.log(avatar[i]);
    var slider_div = createDiv('Shape: ');
    slider_div.parent(div);
    slider_div.style('display', 'block');
    slider_div.class('slider_div');
    var slider = createSlider(1, 100, 50);
    slider.parent(slider_div);
    slider.id(avatar[i].name + '_shape');

    var slider_div = createDiv('Size: ');
    slider_div.parent(div);
    slider_div.style('display', 'block');
    slider_div.class('slider_div');
    var slider = createSlider(1, 100, 50);
    slider.parent(slider_div);
    slider.id(avatar[i].name + '_size');

    var slider_div = createDiv('Color: ');
    slider_div.parent(div);
    slider_div.style('display', 'block');
    slider_div.class('slider_div');
    var slider = createSlider(1, 360, 180);
    slider.parent(slider_div);
    slider.id(avatar[i].name + '_color');

  }
}

function draw(){
  background(220, 5, 100, 1);
  
  if (ears) {
    var size = map(select('#Ears_size').value(), 1, 100,  30, 200);
    var head_size_x = map(select('#Head_size').value(), 1, 100, 200, 500);
    var shape_index = round(map(select('#Ears_shape').value(), 1, 100, 0, 2));
    fill(select('#Ears_color').value(), 50, 50, 1);
    strokeWeight(size/10);
    stroke(select('#Head_color').value(), 50, 50, 1);

    switch (shape_index){
      case 0:
        ellipse(width/2 - head_size_x/2, height/3, size);
        ellipse(width/2 + head_size_x/2, height/3, size);
        break;
      case 1:
        ellipse(width/2 - head_size_x/2, height/3, size/2, size);
        ellipse(width/2 + head_size_x/2, height/3, size/2, size);
        break;
      case 2:
        ellipse(width/2 - head_size_x/2, height/3, size, size/2);
        ellipse(width/2 + head_size_x/2, height/3, size, size/2);
        break;
    }
  }
  
  noStroke();
  if (head) {
    var size = map(select('#Head_size').value(), 1, 100, 200, 500);
    var shape = map(select('#Head_shape').value(), 1, 100, 200, 500);
    fill(select('#Head_color').value(), 55, 80, 1);
    ellipse(300, 200, size, shape);
  }
  if (eyes) {
    var size = map(select('#Eyes_size').value(), 1, 100,  20, 200);
    var shape = map(select('#Eyes_shape').value(), 1, 100,  20, 200);
    fill(255);
    ellipse(250, 100, size, shape);
    ellipse(350, 100, size, shape);
    fill(select('#Eyes_color').value(), 90, 90, 1);
    ellipse(250, 100, size/2, shape/2);
    ellipse(350, 100, size/2, shape/2);
    fill(0);
    ellipse(250, 100, size/4, shape/4);
    ellipse(350, 100, size/4, shape/4);
  }
  if (nose) {
    var size = map(select('#Nose_size').value(), 1, 100,  10, 150);
    var shape_index = round(map(select('#Nose_shape').value(), 1, 100, 0, 3));
    fill(select('#Nose_color').value(), 75, 85, 1);

    switch (shape_index) {
      case 0:
        ellipse(width/2, height/2, size, size/2);
        break;
      case 1:
        ellipse(width/2, height/2, size/2, size);
        break;
      case 2:
        ellipse(width/2, height/2, size, size);
        break;
      case 3:
        triangle(width/2 - size, height/2 + size/2, width/2 + size , height/2 + size/2 , width/2, height/2 - size);
        break;


      default:

    }
  }
  if (mouth) {
    var size = map(select('#Mouth_size').value(), 1, 100,  50, 200);
    var shape_index = round(map(select('#Mouth_shape').value(), 1, 100, 0, 6));
    //fill(select('#Mouth_color').value(), 50, 50, 1);
    fill(0,0,0,1);
    strokeWeight(size/10);
    stroke(select('#Mouth_color').value(), 75, 60, 1);

    switch (shape_index) {
        case 0:
        ellipse(width/2, height*0.70, size/2, size/2);
        break;
      case 1:
        ellipse(width/2, height*0.70, size, size/2);
        break;
      case 2:
        ellipse(width/2, height*0.70, size/2, size);
        break;
      case 3:
        arc((width/2), height*0.70, size/2, size, 0, PI, CHORD);
        break;
      case 4:
        arc((width/2), height*0.70, size, size, 0, PI, CHORD);
        break;
      case 5:
        arc((width/2), height*0.70, size, size, 0, PI, OPEN);
        break;
      case 6:
        noFill();
        arc((width/2), height*0.70, size, size, 0, PI);
        break;

    }
  }

}

function gen_random() {
  var all_slider = selectAll('input');
  //console.log(all_slider[0].elt);
  for (var i in all_slider) {
    all_slider[i].elt.value = random(all_slider[i].elt.min, all_slider[i].elt.max);
  }
}

function windowResized() {
  //resizeCanvas(window.innerWidth, window.innerHeight);

}

function div_hide(elmt) {
  if (elmt.target.children.length == 4) {
    //console.log(elmt.target.children);
    var child = elmt.target.children;
    //console.log(children[0]);
    if (child[1].style.display == 'block') {

      for (var i=1; i < child.length; i++) {
        child[i].style.display = 'none';
      }
    } else {
      for (var i=1; i < child.length; i++) {
        child[i].style.display = 'block';
      }
    }
    // fill symbol ◇
    //console.log(elmt.target.className);
    if (elmt.target.className == 'open')  elmt.target.className = 'close';
    else  elmt.target.className = 'open';


  }


}

function view_hide(elmt) {
  /* sehr cool */ /*
  for (var i in elmt.target) {
    console.log(i);
  } */
  //console.log(elmt.target.parentElement.id);
  switch(elmt.target.parentElement.id) {
    case 'Head':
      head = !head;
      break;
    case 'Eyes':
      eyes = !eyes;
      break;
    case 'Nose':
      nose = !nose;
      break;
    case 'Mouth':
      mouth = !mouth;
      break;
    case 'Ears':
      ears = !ears;
      break;
  }
  // ⚙
  if (elmt.target.innerHTML == '⛯') elmt.target.innerHTML = '⛒';
  else  elmt.target.innerHTML = '⛯';
}
