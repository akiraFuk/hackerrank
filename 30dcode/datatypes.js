function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let secondInteger = readLine();
    let secondDouble = readLine();
    let secondString = readLine();

    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(Number(secondInteger) + i);

    // Print the sum of the double variables on a new line.
    console.log((Number(secondDouble) + d).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}
