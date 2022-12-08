class App
{
    runApplication()
    {
        console.log("hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let randomgetal = Math.random();


        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle ="grey";
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
            g.fillStyle = "yellow";
        }
        else if(randomgetal > 0.5)
        {
            g.fillStyle = "black";
        }
        g.moveTo(35,35);
        g.lineTo(35,45);
        g.lineTo(45,47.5);
        g.lineTo(45,38);
        g.moveTo(35,35);
        g.lineTo(45,38);
        g.fill();
        g.stroke();
        g.closePath();
        
        let title = document.getElementById("newstitle");
        
        
        console.log(randomgetal)
        console.log(title);
        console.log(canvas);
    }
}

let app = new App();
app.runApplication();

