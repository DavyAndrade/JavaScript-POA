function consulta() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.erro) {
        document.getElementById("resultado").innerHTML = "CEP não encontrado!";
      } else {
        document.getElementById("resultado").innerHTML = `
              <strong>Endereço:</strong><br>
              ${dados.logradouro}, ${dados.bairro}<br>
              ${dados.localidade} - ${dados.uf}<br>
              ${dados.cep}
            `;
      }
    })
    .catch((erro) => {
      document.getElementById("resultado").innerHTML = "Erro!";
      console.error(erro);
    });
}
