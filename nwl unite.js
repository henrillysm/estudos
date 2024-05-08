const participante = {
    nome: "Mayk Brito",
    email: "maykbrito@gmail.com",
    dataIncricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

const criarNovoParticipante = (participante) => {
    return `
    <tr>
        <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>${participante.email}</small>
        </td>
        <td>${participante.dataIncricao}</td>
        <td>${participante.dataCheckIn}</td>
    </tr>
    `
}

let participantes = [
    { 
    nome: "Mayk Brito",
    email: "maykbrito@gmail.com",
    dataIncricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
    }
]

const atualizarLista = (participante) => {

document.querySelector('tbody').innerHTML = criarNovoParticipante(participante)

}

atualizarLista(participante)