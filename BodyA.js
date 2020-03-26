class BodyA{
    constructor(x,y,radius){
        
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        fill("red");
        ellipse(pos.x,pos.y,this.radius);
    }
}