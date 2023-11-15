// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');


// Função que retorna todos usuários no banco de dados
async function listFavorites(request, response) {

    const params = Array(request.params.id);

    const query = 'select u.id, u.nome_empresa as nomeEmpresa, u.endereco, u.instagram, u.telefone, u.foto ' +
    ' from usuarios u, favorites f ' +
    ' where f.id_usuario = ? and u.id = f.id_empresa;';

    // Preparar o comando de execução no banco
    connection.query(query, params, (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                console.log(results);
                response.status(200).json({
                    success: true,
                    message: 'Retorno de favoritos com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os favoritos.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

// Função que cria um novo usuário 
async function storeFavorites(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO favorites(id_empresa,id_usuario) VALUES(?,?);'; 
    console.log(request.body)
    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.idEmpresa,
        parseInt(request.body.idUser)
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        console.log(results)
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Favorito cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que atualiza o usuário no banco
async function updateFavorites(request, response) {
    // Preparar o comando de execução no banco
    const query = "UPDATE favorites SET `nome` = ?, `senha` = ? WHERE `id` = ?";

    // Recuperar os dados enviados na requisição respectivamente
    const params = Array(
        request.body.nome,
        bcrypt.hashSync(request.body.senha, 10),        
        request.params.id  // Recebimento de parametro da rota
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário atualizado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
// async function deleteFavorites(request, response) {
//     // Preparar o comando de execução no banco                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//     const query = "DELETE FROM favorites WHERE `id` = ?";

//     // Recebimento de parametro da rota
//     const params = Array(
//         request.params.id
//     );

//     // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
//     connection.query(query, params, (err, results) => {
//         try {
//             if (results) {
//                 response
//                     .status(200)
//                     .json({
//                         success: true,
//                         message: `Sucesso! Usuário deletado.`,
//                         data: results
//                     });
//             } else {
//                 response
//                     .status(400)
//                     .json({
//                         success: false,
//                         message: `Não foi possível realizar a remoção. Verifique os dados informados`,
//                         query: err.sql,
//                         sqlMessage: err.sqlMessage
//                     });
//             }
//         } catch (e) { // Caso aconteça algum erro na execução
//             response.status(400).json({
//                     succes: false,
//                     message: "Ocorreu um erro. Não foi possível deletar usuário!",
//                     query: err.sql,
//                     sqlMessage: err.sqlMessage
//                 });
//         }
//     });
// }

async function deleteFavorites(request, response) {

    const params = Array(request.params.id_empresa);

    const query = 'DELETE FROM favorites WHERE `id_empresa` = ?';

    // Preparar o comando de execução no banco
    connection.query(query, params, (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                console.log(results);
                response.status(200).json({
                    success: true,
                    message: 'Deletado com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível deletar os favoritos.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

async function relatorioFavorites(request, response) {

    const params = Array(request.params.id_empresa);

    const query = 'select * FROM favorites WHERE `id_empresa` = ?';

    // Preparar o comando de execução no banco
    connection.query(query, params, (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                console.log(results);
                response.status(200).json({
                    success: true,
                    message: 'Retorno com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar a quantia dos favoritos.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

module.exports = {
    listFavorites,
    storeFavorites,
    updateFavorites,
    relatorioFavorites,
    deleteFavorites
}