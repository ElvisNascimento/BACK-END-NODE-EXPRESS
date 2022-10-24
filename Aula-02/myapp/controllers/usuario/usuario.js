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
function auth(email, senha){
    let usuario = JSON.parse(usuarios).filter(us => us.email === email);
    // se não encontrou nenhum usuario, é porque não existe nenhum usuario com esse email
    if(usuario.length === 0) {
        return "Usuario não encontrado";
    }
    // testando se a senha é correta
    if (usuario[0].senha !== senha){
        return "Senha incorreta";
    }
    // se chegou até aqui email e senha estão certos
    let token = "TK$@%" + usuario[0].senha + "muda_ora_muda";
    token = token.split("").reverse().join("");
    // salvando o token no arquivo de banco de dados
    // usuarios = JSON.parse(usuarios).map(us =>{
    //     if (us.id == usuario[0].id){
    //         us.token = token;
    //     }
    //     return us;
    // })
    return token;
}
module.exports ={
    listar,
    buscar,
    criar,
    atualizar,
    deletar,
    auth,
}