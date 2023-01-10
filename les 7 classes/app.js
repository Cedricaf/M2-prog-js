class Dino
{
    
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }

    eetDino()
    {
        let vleeseter = "T-rex";
        let planteter = "Triceratops";

        console.log(vleeseter,"eet", planteter);
    }
    eetPlant()
    {
        let plant = "grass";
        let planteter = "Triceratops";
        console.log(planteter, "eet", plant);
    }
}

class Plant 
{
    constructor(naam,leeft,honger)
    {
        this.naam = naam;
        this.leeft = leeft;
        this.honger = honger;
    }
}

class App 
{
    runApplication()
    {
        let trex = new Dino("T-rex",true,120);
        console.log(trex);
        let Brachiosaurus = new Dino("Brachiosaurus",true,210);
        console.log(Brachiosaurus);
        let Triceratops = new Dino("Triceratops",false,232);
        console.log(Triceratops);
    }
	
	
}


let dino1 = new Dino();
dino1.eetDino();
let dino2 = new Dino();
dino2.eetPlant();


let app = new App();
app.runApplication();

