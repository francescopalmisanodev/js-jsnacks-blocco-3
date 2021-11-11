const alphabet=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const players = [];
for (let i = 0; i < 10; i++) {

    players.push({
        Codice: genCode(),
        Nome: prompt(`inserisci il nome del ${i+1} giocatore:`),
        Cognome: prompt(`inserisci il cognome del ${i+1} giocatore:`),
        Età: prompt(`inserisci l'età del ${i+1} giocatore:`),
        Media: Rand(50),
        PuntiDa3: Rand(100),
    });
}
players.forEach(element => {
    alert(`${element.Codice} ${element.Nome} ${element.Cognome} ${element.Età}`);
});
const result = players.filter(element => element.Media>35 && element.PuntiDa3>80);
result.forEach(element => {
    alert(`${element.Codice} ${element.Media} ${element.PuntiDa3}`);
});


function Rand(max) {
    return Math.floor(Math.random() *max);
}
function genCode() {
    let code="";
    for (let i=0; i<3; i++){
        code+=alphabet[Rand(alphabet.length-1)];
    }
    for (let i=0; i<3; i++){
        code+=Rand(10);
    }
    return code;
}

