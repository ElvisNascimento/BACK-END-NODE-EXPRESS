let fs = require('fs'); 

function listar(){
    return JSON.parse(fs.readFileSync('controllers/produto/produtos.json', 'utf-8'));
}
function criar(produto){
    let produtos = listar();
    console.log(typeof produtos);
    produtos.push(produto);
    fs.writeFileSync('controllers/produto/produtos.json',JSON.stringify(produtos))
    return listar();
}
function atualizar(){
    return 'Atulizar produto'
}
function deletar(produto_id){
    let filtrados = produtos.filter((prod)=> prod.id != produto_id);
    return JSON.stringify(filtrados);
}
module.exports ={
    listar,
    criar,
    atualizar,
    deletar,
}
