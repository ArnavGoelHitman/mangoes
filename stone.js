class Stone {
    constructor(){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.rectangle(400,420,20,20,options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        
        image(this.image,0,0,400,400);

    }
}