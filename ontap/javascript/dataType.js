const a = 10 // number
const b = '10';
const isMarried = true // boolean 
const info = {
    name: 'Độ',
    age: 18,
    run() {
        console.log(`Hoàng Thị ${info.name}`);
    },
}; // object literal

const app = document.getElementById('app');
if (app) {
    // template string : backtick
    // console.log(`${info.name} ${info.age}`);
    // info.run();
    app.innerHTML = `${info.name} ${info.age}`;
}

