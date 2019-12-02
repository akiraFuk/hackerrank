 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vogais = [];
    let consoantes = [];

    for(let letter of s) {
        if(letter.match(/a|e|i|o|u/g)){
            vogais.push(letter);
        } else {
            consoantes.push(letter);
        }
    }

    let res = vogais.concat(consoantes);

    for(let l of res) console.log(l);
}
