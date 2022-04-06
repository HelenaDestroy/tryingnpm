const messages = [
    "jesica", 
    "ana",
    "nicolas",
    "marcelo",
    "samanta"
    ]
    
    const mensajeRandom = () => {
        const message = messages[Math.floor(Math.random() * messages.length )]
    console.log(message);
    }
    module.exports = {mensajeRandom};