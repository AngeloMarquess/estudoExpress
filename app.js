const express = require('express');
const app = express ();

let usuarios =[
{nome: "Angelo" , sobrenome: "Marques"}

];

//http://localhost:3000/

app.get("/", (request , response) => {
return response.send('olá mundo!');


} )

app.get("/usuarios", (request , response) => {

return response.json(usuarios);

})


app.listen(3000,()=> {
console.log('Servidor rodando !!!!!!')
})

