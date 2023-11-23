const chaveDaApi = "b5bd74392cae4aaea3c174849232311";
const BotaoDeBusca = document.querySelector(".btn-busca");

BotaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await BuscarDadosDaCidade(cidade);

    if (dados) preencherDadosNaTela(dados, cidade);
});

async function BuscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}$aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconecondicao = dados.current.condition.icon;

    console.log(temperatura)


    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} ºC`;

    document.getElementById("condicao").textContent = condicao

    document.getElementById("humidade").textContent = `${humidade}%`

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`

    document.getElementById("icone-condicao").setAttribute("src", iconecondicao)
}