const usuarios = [
    {
        'id': 1,
        'nome': 'chiquim'
    },
    {
        'id': 2,
        'nome': 'loirão'
    }
]
function listar(){
    return JSON.stringify(usuarios);
}

function criar(usuario){
    usuarios.push(usuario);
    return JSON.stringify(usuarios);
}
function atualizar(){
    return 'Atulizar usuario'
}
function deletar(usuario_id){
    let filtrados = usuarios.filter((usu)=> usu.id != usuario_id);
    return JSON.stringify(filtrados);
}
module.exports ={
    listar,
    criar,
    atualizar,
    deletar,
}