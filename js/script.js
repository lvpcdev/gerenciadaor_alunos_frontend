async function buscarAlunos() {
    try {
        const resposta = await fetch('http://localhost:8080/alunos');
        
        const alunos = await resposta.json();
        
        const corpoTabela = document.getElementById('corpoTabela');
        corpoTabela.innerHTML = ''; 
        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];
            
            let linha = `<tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.matricula}</td>
                <td>${aluno.cpf}</td>
            </tr>`;
            
            corpoTabela.innerHTML += linha;
        }

    } catch (erro) {
        console.error("Erro ao buscar alunos:", erro);
        alert("Não foi possível conectar ao servidor. Verifique se o Back-end Java está rodando na porta 8080.");
    }
}