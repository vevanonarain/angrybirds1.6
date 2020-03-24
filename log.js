class Log{
    constructor(x,y,h,a){
        var options={
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,20,h,options);
        this.width=20;
        this.height=h;
        Matter.Body.setAngle(this.body,a);
        World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("brown");
      rect(0,0,this.width,this.height);
      pop();
    }
}