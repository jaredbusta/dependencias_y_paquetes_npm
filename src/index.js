const messages =[
    "Jared",
    "Oscar",
    "Nico",
    "Ana",
    "Jess",
    "Diego",
    "Laura",
    "Rodolfo",
    "Enrique"
];

const randomMsg= ()=>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}
module.exports = { randomMsg }