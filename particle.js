class Particle{
   
   constructor(x,y){

    var options = {
        restitution:3,
        friction:2,
        isStatic:true
    }

     this.body=Bodies.circles(x,y,this.r,options);
     this.color=color(random(0,225),random(0,225),random(0,225));
     World.add(world,this.body);

     if (frameCount%60===0)
     {
          particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
        
        }

    push()
    pop()
   } 

   
  

}