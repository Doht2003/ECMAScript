function total(...number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i];
    }
    console.log('result',result);
}
total(2,9,23,11,3,24);