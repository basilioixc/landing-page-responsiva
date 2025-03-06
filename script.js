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

// Função para obter o mês atual
function obterMesAtual() {
    const dataAtual = new Date();
    return dataAtual.getMonth(); // 0 = Janeiro, 11 = Dezembro
}

// Função para gerar a mensagem de aniversário
function gerarMensagem() {
    const mesAtual = obterMesAtual();
    const nomeMes = new Date().toLocaleString('pt-BR', { month: 'long' });
    
    // Filtrar aniversariantes do mês atual
    const aniversariantesMes = aniversariantes.filter(aniversariante => {
        const mesAniversario = parseInt(aniversariante[1].split('/')[1]) - 1;
        return mesAniversario === mesAtual;
    });

    // Se houver aniversariantes, calcular e exibir a mensagem
    if (aniversariantesMes.length > 0) {
        let mensagem = `🎉🎂 Olá, pessoal! Chegou o momento de celebrarmos os aniversariantes de ${nomeMes}! 🎉🎁🥳\n\n`;
        mensagem += "Este mês, temos o prazer de comemorar com os seguintes aniversariantes:\n\n";
        
        aniversariantesMes.forEach(item => {
            mensagem += `🎈 ${item[0]} - ${item[1]}\n`;
        });

        mensagem += `\nAgora, vamos fazer uma grande celebração! 💖🎁\n\n`;
        mensagem += "💳 *A chave PIX para contribuição está na descrição do grupo.*\n\n";
        mensagem += "📌 *Após realizar o pagamento, por favor, envie o comprovante através do seguinte link:*\n";
        mensagem += "👉 https://forms.gle/GfXgpVaNqT8ZE1US7\n\n";
        mensagem += "Agradecemos imensamente a colaboração de todos para tornar este mês ainda mais especial! 🙏 Vamos fazer deste momento uma lembrança inesquecível! 🎊🎉";
        
        // Exibe a mensagem no HTML
        document.getElementById("mensagem").innerText = mensagem;
    }
}

// Função para copiar a mensagem para a área de transferência
function copiarMensagem() {
    const botao = document.getElementById("copiarBtn");
    const mensagem = document.getElementById("mensagem").innerText;

    navigator.clipboard.writeText(mensagem).then(() => {
        botao.innerText = "Copiado!";
        botao.style.backgroundColor = "#2ecc71"; // Verde para indicar sucesso

        // Voltar ao estado original após 2 segundos
        setTimeout(() => {
            botao.innerText = "Copiar Mensagem";
            botao.style.backgroundColor = "#3498db"; // Azul original
        }, 2000);
    });
}

// Gerar a mensagem ao carregar a página
window.onload = gerarMensagem;

// Adicionar evento ao botão de copiar
document.getElementById("copiarBtn").addEventListener("click", copiarMensagem);
