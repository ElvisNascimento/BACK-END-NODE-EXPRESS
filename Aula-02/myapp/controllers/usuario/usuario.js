let fs = require('fs');
let usuarios = fs.readFileSync('controllers/usuario/usuarios.json').toString();

function listar(){
    return usuarios;
}

function criar(usuario){
    let usuarios = JSON.parse(listar());
    console.log(typeof usuarios);
    usuarios.push(usuario);
    return usuarios;
}
function atualizar(){
    return 'Atulizar usuario'
}
function deletar(usuario_id){
    let filtrados = usuarios.filter((usu)=> usu.id != usuario_id);
    return JSON.stringify(filtrados);
}
function auth(){
    return "auth";
}
module.exports ={
    listar,
    criar,
    atualizar,
    deletar,
}