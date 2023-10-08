var pm = 2;
pm=prompt("pilih angka 1-4 = ")
switch(pm){
    case '1':
        document.write("\nBadminton")
        break;
    case '2':
        document.write("\nFutsal");
        break;
    case '3':
        document.write("\nBasket");
        break;
    case '4':
        document.write("\nVoli");
        break;
    default:
        document.write("\nHanya ada 4 pilihan");
}