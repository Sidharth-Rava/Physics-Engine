class Bird{
    constructor(x,y){
        var options ={
            restitution : 0.5,
            friction : 1,
            density : 1.5
        }

        this.body = Bodies.rectangle(x,y,30,30,options);
        this.width = 30;
        this.height = 30; 
        World.add(world,this.body)   ;

    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
