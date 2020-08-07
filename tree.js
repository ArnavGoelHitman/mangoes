class Tree {
    constructor(){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(600,500,100,100,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/tree.png");
        World.add(world, this.body);

    }
    display(){
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        
        image(this.image,0,0,400,400);

    }
}