const prompt = require('prompt-sync')({ sigint: true });
const input = prompt('Masukkan sebuah bilangan:');
const x = parseFloat(input);

if(isNaN(x)){
    console.log('Input bukan bilangan yang valid');
}else if( x < 0){
    console.log('Tidak bisa input bilangan negatif');
}else if(x % 2 !==0){
    console.log('Tidak bisa input bilangan ganjil');
}else{
    const result = Math.sqrt(x);
    console.log('Akar pangkat dua dari ' + x + ' adalah ' + result);
}