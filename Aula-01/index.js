const http = require("http");
const fs = require('fs');
let endereco = 'localhost';
let port = 8000;
let respostaJson =[{'nome': 'deivid lima', 'idade': '23', 'id': '116'},{'nome':'jose', 'idade':'24','id':'117'}];
let servidorHttp = http.createServer(function(requesicao, resposta){
    if(requesicao.url.indexOf('/alunos') >= 0){
        if(requesicao.method === 'GET'){
            resposta.writeHead(200);
            resposta.end(JSON.stringify(respostaJson));
        }else if(requesicao.method === 'POST'){
            let data = '';
            requesicao.on('data', parte => {
                dado += parte;
            });
            requesicao.on('end', () => {
                let alunoAdicionado = JSON.parse(dado);
                respostaJson.push(alunoAdicionado);
                resposta.writeHead(200);
                resposta.end(JSON.stringify(alunoAdicionado));
            });
        } else {
            resposta.writeHead(404);
            resposta.end('');
        }
    }
    });
servidorHttp.listen(port, endereco, () =>{
    console.log('iniciei a escuta');
});