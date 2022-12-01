class App
{
    runApplication()
    {
        console.log("hello world");
    

        this.mario();
        this.myfunction();
        this.optellen();
        this.tekenhuis();
        this.tekenkerstboom();
    }

    tekenhuis()
    {
        let canvas = document.getElementById("canvasId");
        let randomgetal = Math.random();
        let g = canvas.getContext("2d");
        let x = 20;
        let y = 20;
        
        //house
        g.beginPath();
        g.fillStyle = "#ae0001";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.fill();
        g.closePath();

        
        g.beginPath();
        g.fillStyle ="orange";
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.fill();
        g.stroke();
        g.closePath();

        g.beginPath();
        
        if(randomgetal < 0.5)
        {
            g.fillStyle = "#FFFF00";
        }
        else if(randomgetal > 0.5)
        {
            g.fillStyle = "black";
        }

        //window
        g.moveTo(35,35);
        g.lineTo(35,45);
        g.lineTo(45,47.5);
        g.lineTo(45,38);
        g.moveTo(35,35);
        g.lineTo(45,38);
        g.fill();
        g.closePath();
        g.stroke();
        
        let title = document.getElementById("newstitle");
        
        console.log(randomgetal)
        console.log(title);
        console.log(canvas);

    }

    tekenkerstboom(g,x,y)
    {

        g.beginPath();
        g.fillStyle = "#008000";
        g.moveTo(1020,1032);
        g.lineTo(101,105);
        g.closePath();
        g.stroke();
        
    }

    mario()
    {
        console.log("MARIO!!");
    }

    myfunction()
    {
        let mariovoice = "BWAHAHA!!!";
        console.log(mariovoice);
    }

    optellen()
    {
        return [3+5];

    }


        
    
}


let app = new App();
app.runApplication();
