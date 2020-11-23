class slingShot
{
    constructor(body1,point2)
    {
        var options = { bodyA :body1,
            pointB : point2,
            stiffness : 0.04,
            length :10
                                    }

          this.slingshot = constraint.create(options)
         World.add(world, this.slingshot)
    }

    display()
    {
        if(this.slingshot.bodyA!=null)
        {
          var birdpos = this.slingshot.bodyA.position;
          var slingpos = this.slingshot.pointB;
          line(birdpos.x,birdpos.y,slingpos.x,slingpos.y)
        }
    }

    fly()
    {
        this.slingshot.bodyA = null;
    }
}


