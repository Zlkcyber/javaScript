function* createNames() {
    yield "eko";
    yield "budi";
    yield "deny";
}
const names = createNames();
for (const name of names) {
    document.writeln(name);
}

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++){
        if (i % 2 === 1){
            yield i;
        }
    }    
}

const numbers = buatGanjil(100);
for (const number of numbers) {
    document.writeln(number);
    
}