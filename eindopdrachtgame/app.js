class App
{
    runApplication()
    {
        var canvas = document.getElementById("canvas");
        var g = canvas.getContext("2d");


    
        g.beginPath();
        g.arc(350,100,50,0,2*Math.PI);
        g.stroke();


        g.beginPath();
        g.arc(350,225,75,0,2*Math.PI);
        g.stroke()

        g.beginPath();
        g.arc(350,400,100,0,2*Math.PI);
        g.stroke();

        g.beginPath();
    
        g.lineTo(370,90);
        g.moveTo(350,110);
        g.lineTo(290,110);
        g.moveTo(290,110);
        g.lineTo(350,120);
        g.moveTo(350,120);
        g.lineTo(350,110);
        g.fill()
        g.stroke();

        g.beginPath();
        g.arc(330,130,5,0,2*Math.PI);
        g.fill();

        g.beginPath();
        g.arc(340,135,5,0,2*Math.PI);
        g.fill();

        g.beginPath();
        g.arc(350,137,5,0,2*Math.PI);
        g.fill();

        g.beginPath();
        g.arc(360,137,5,0,2*Math.PI);
        g.fill();

        g.beginPath();
        g.arc(370,135,5,0,2*Math.PI);
        g.fill();


        g.fillStyle = "red";
        g.fillRect(300,40,100,20);
        g.fillRect(317,10,70,50);

        g.beginPath();
        g.moveTo(420,200);
        g.lineTo(570,100);
        g.moveTo(510,140);
    
        g.stroke();

        g.beginPath();
        g.moveTo(280,200);
        g.lineTo(170,100);
        g.moveTo(180,110);
    
        g.stroke();

        g.lineWidth = 2
        g.strokeStyle = 'red'
        g.fillStyle = 'red'
        g.strokeRect(800, 500, 300, 200)
        g.fillRect(925, 600, 50, 100)
        g.beginPath()
        g.moveTo(700, 500)
        g.lineTo(1200, 500)
        g.lineTo(950, 300)
        g.lineTo(700, 500)
        g.stroke()
    }

}

let app = new App();
app.runApplication();