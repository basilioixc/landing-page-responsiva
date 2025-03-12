// Lista de aniversariantes (nome e data)
const aniversariantes = [
    ["Renata Henriques", "08/01"], ["Willian Hora", "10/01"], ["Karine Cavalcante", "15/01"], ["Caio Aragão", "16/01"],
    ["Diego Rair", "08/02"], ["Rêmulo Ramalho", "05/02"], ["Álisson Silva", "11/03"], ["Thyago Alves", "20/04"],
    ["Jailson Bertoni", "01/05"], ["Fernanda Vital", "02/05"], ["Camila Santos", "22/05"], ["Natanael Paixão", "02/06"],
    ["Mauro", "03/06"], ["Tamara Ramalho", "11/06"], ["Valkenia", "23/06"], ["Cecy Rolim", "25/06"],
    ["Dayane Gouveia", "19/07"], ["Janaina Francisca", "20/07"], ["Gabriel Nobelino", "02/08"], ["Denise Silva", "03/08"],
    ["André Araujo", "07/08"], ["Higor Sousa", "07/08"], ["Victor Hugo Araújo Dantas", "19/08"], ["Pedro Felipe", "28/08"],
    ["Andre Bento", "29/08"], ["Michele", "15/09"], ["Jacilene Duarte", "09/09"], ["João Pedro", "25/09"],
    ["Jessé Brendon", "09/10"], ["Max Borges", "10/10"], ["Bruno Silva", "12/10"], ["Luiz Henrique", "12/10"],
    ["Leandro Santos", "16/10"], ["Carina Rocha", "22/10"], ["Sidney Sydem", "27/10"], ["Christian Marinho", "07/11"],
    ["Diogo Basílio", "22/11"], ["Joyce Porto", "29/11"], ["Matheus Mota", "02/12"], ["André Yuri", "13/12"],
    ["Anisio", "15/12"], ["Pedro Melo", "17/12"], ["Marcus Antônio", "19/12"], ["Douglas Almeida", "20/12"],
    ["Thais Schroll", "22/12"], ["Jefferson Byller", "27/12"], ["José Marinho", "29/12"], ["Claudioney Oliveira", "03/12"],
    ["Wellington do Nascimento", "15/05"], ["Ellifas Albuquerque", "21/08"]
];

function obterMesAtual() {
    return new Date().getMonth(); // 0 = Janeiro, 11 = Dezembro
}

function gerarMensagem() {
    const hoje = new Date();
    const mesAtual = obterMesAtual();
    const nomeMes = hoje.toLocaleString('pt-BR', { month: 'long' });
    const mesSeguinte = (mesAtual + 1) % 12;
    const nomeMesSeguinte = new Date(hoje.getFullYear(), mesSeguinte).toLocaleString('pt-BR', { month: 'long' });
    
    // Filtrar aniversariantes do mês atual
    const aniversariantesMes = aniversariantes.filter(([_, data]) => {
        return parseInt(data.split('/')[1]) - 1 === mesAtual;
    });
    
    // Filtrar aniversariantes do mês seguinte
    const aniversariantesArrecadacao = aniversariantes.filter(([_, data]) => {
        return parseInt(data.split('/')[1]) - 1 === mesSeguinte;
    });
    
    let mensagem = `🎉🎂 Olá, pessoal! Chegou o momento de celebrarmos os aniversariantes de ${nomeMes}! 🎉🎁🥳\n\n`;
    mensagem += "Este mês, temos o prazer de comemorar com os seguintes aniversariantes:\n\n";
    aniversariantesMes.forEach(([nome, data]) => {
        mensagem += `🎈 ${nome} - ${data}\n`;
    });
    
    if (aniversariantesArrecadacao.length > 0) {
        const totalContribuicao = aniversariantesArrecadacao.length * 200;
        const totalFuncionarios = aniversariantes.length;
        const contribuicaoPorPessoa = (totalContribuicao / totalFuncionarios).toFixed(2);
        
        mensagem += `\nAgora, estamos arrecadando para os aniversariantes de ${nomeMesSeguinte}! 💖💰\n`;
        aniversariantesArrecadacao.forEach(([nome, data]) => {
            mensagem += `🎁 ${nome} - ${data}\n`;
        });
        
        mensagem += `\nCada um de nós deve contribuir com *R$ ${contribuicaoPorPessoa}* para garantir que todos recebam um presente incrível! 🎁\n\n`;
        mensagem += "💳 *Dados para pagamento:*\n";
        mensagem += "👉 https://basilioixc.github.io/pix/\n\n";
        mensagem += "📌 *Após realizar o pagamento, por favor, envie o comprovante através do seguinte link:*\n";
        mensagem += "👉 https://forms.gle/GfXgpVaNqT8ZE1US7\n\n";
        mensagem += "Agradecemos imensamente a colaboração de todos para tornar este mês ainda mais especial! 🙏 Vamos fazer deste momento uma lembrança inesquecível! 🎊🎉";
    }
    
    document.getElementById("mensagem").innerText = mensagem;
}

function copiarMensagem() {
    const mensagem = document.getElementById("mensagem").innerText;
    navigator.clipboard.writeText(mensagem).then(() => {
        alert("Mensagem copiada!");
    });
}

window.onload = gerarMensagem;
document.getElementById("copiarBtn").addEventListener("click", copiarMensagem);
