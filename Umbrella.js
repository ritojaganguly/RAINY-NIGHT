class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        this.image= loadImage();
        World.add(world, this.body);
    }
    
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,10,10);
    }
}