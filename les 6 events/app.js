class App 
{
    runApplication()
    {
        const myButton = document.getElementById("myButton");
        myButton.addEventListener("click", this.myclick);
    }

    myclick()
    {
        const myButton = document.getElementById("myButton")
        myButton.style.backgroundColor = "red";
        console.log("Hello World")
    }
}

let app = new App();
app.runApplication();