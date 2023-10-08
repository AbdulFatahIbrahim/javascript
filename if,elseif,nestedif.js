//if
var b1 =2;
b1 = prompt("Masukan Angka = " );
if (b1 >= 1  <= 100){
    document.write("Angka yang dimasukan = "+b1)
}

//elseif & nested if
if (b1>0){
    if (b1%2==0){
        document.write(" adalah bilangan Genap")
    }
    else{
        document.write(" adalah bilangan Ganjil")
}}
else{document.write(" Masukan angka yang lebih besar dari 0")}