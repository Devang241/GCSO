var car, car2, car3, car4, wall, wall2, wall3, wall4;
var speed, speed2, speed3, speed4, weight, weight2, weight3, weight4;
var line, line2, line3;
var deformation,deformation2,deformation3,deformation4

function setup() {
  createCanvas(1600,500);

  speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  speed4=random(55,90);
  weight=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);
  weight4=random(400,1500);

  car = createSprite(50,100,70,20);
  car.velocityX=speed;
  wall = createSprite(1500,100,60,50);

  car2 = createSprite(50,200,70,20);
  car2.velocityX=speed2;
  wall2 = createSprite(1500,200,60,50);

  car3 = createSprite(50,300,70,20);
  car3.velocityX=speed3;
  wall3 = createSprite(1500,300,60,50);

  car4 = createSprite(50,400,70,20);
  car4.velocityX=speed4;
  wall4 = createSprite(1500,400,60,50);

  var line = createSprite(800,150,1800,10);
  line.shapeColor=color(255,255,255);

  var line2 = createSprite(800,250,1800,10);
  line2.shapeColor=color(255,255,255);

  var line3 = createSprite(800,350,1800,10);
  line3.shapeColor=color(255,255,255);

}

function draw() {
  background(0);
  


  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
     deformation=0.5 * weight * speed * speed/22509;
  }
  if(wall2.x-car2.x < (car2.width+wall2.width)/2){
    car2.velocityX=0;
    deformation2=0.5 * weight2 * speed2 * speed2/22509;
  }
  if(wall3.x-car3.x < (car3.width+wall3.width)/2){
    car3.velocityX=0;
    deformation3=0.5 * weight3 * speed3 * speed3/22509;
  }
  if(wall4.x-car4.x < (car4.width+wall4.width)/2){
    car4.velocityX=0;
     deformation4=0.5 * weight4 * speed4 * speed4/22509;
  }


    if(deformation<80){
      car.shapeColor=color(0,255,0);
    }
    else if(deformation>=80 && deformation<=180){
     car.shapeColor=color(230,230,0);
   }
    else if(deformation>180){
    car.shapeColor=color(255,0,0);
    }

  

    if(deformation2<80){
      car2.shapeColor=color(0,255,0);
    }
    else if(deformation2>=80 && deformation2<=180){
     car2.shapeColor=color(230,230,0);
    }
   else if(deformation2>180){
    car2.shapeColor=color(255,0,0);
   }
  
    if(deformation3<80){
      car3.shapeColor=color(0,255,0);
    }
    else if(deformation3>=80 && deformation3<=180){
     car3.shapeColor=color(230,230,0);
   }
   else if(deformation3>180){
    car3.shapeColor=color(255,0,0);
  }
  

  

    if(deformation4<80){
      car4.shapeColor=color(0,255,0);
    }
    
   else if(deformation4>=80 && deformation4<=180){
     car4.shapeColor=color(230,230,0);
   }

   else if(deformation4>180){
    car4.shapeColor=color(255,0,0);
  }

  


  drawSprites();
}