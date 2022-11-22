class App
{
    runApplication()
    {
        console.log("hello World!");
        let appNaam = "test"
        let versienummer = 0.9
        let versiedatum = "22 november"
        let autheur = "Cedric Király"
        let copyright = "Google ©"
        let distributeur = "Google inc"
        let darkmode = true
        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();