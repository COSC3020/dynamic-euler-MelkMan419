function factorial(n) {
    let sum = 1;
    let i = 1;
    let curr = 1;
    while (i <= n) {
        curr *= i;
        sum += 1 / curr;
        i++;
    }
    return sum;
}
