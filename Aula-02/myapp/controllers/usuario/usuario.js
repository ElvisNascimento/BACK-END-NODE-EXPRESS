let fs = require('fs');
let usuarios = fs.readFileSync('controllers/usuario/usuarios.json').toString();

function listar(){
    usuarios = JSON.parse(usuarios).map(us =>{
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
        }
    })
    return usuarios;
}
function buscar(idUrl){
    let usuario = JSON.parse(usuarios).filter(us => us.id == idUrl).map(us =>{
        return{
            id: us.id,
            nome: us.nome,
            email: us.email,
        }
    });
    return usuario[0];
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
    buscar,
    criar,
    atualizar,
    deletar,
}