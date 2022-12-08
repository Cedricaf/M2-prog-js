class App
{
    runApplication()
    {
        console.log("hello world");
        let list = ["Bruno Mars", "Rihanna", "The Weekend", "Michael Jackson", "Dua Lipa", "Sia"]
        let Headers = document.getElementsByClassName("bandName")
        for(let i = 0; i < Headers.length;  i++){
            Headers[i].innerHTML = list[i];

        
        } 
        console.log(list)
    }
    

}

let app = new App();
app.runApplication();