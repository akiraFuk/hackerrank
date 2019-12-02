/*
 * Create the function factorial here
 */
const factorial = number => {
    
    let res = 1;

    for(let f=number; f>1; f--) {
        res *= f;
    }

    return res;
}
