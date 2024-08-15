function kalkulator(num1, num2, operasi) {
    let hasil;
    switch (operasi) {
        case '+':
            hasil = num1 + num2;
            break;
        case '-':
            hasil = num1 - num2;
            break;
        case '*':
            hasil = num1 * num2;
            break;
        case '/':
            if (num2 !== 0)
                hasil = num1 / num2;
            else {
                console.log("Error: Pembagian dengan nol tidak diperbolehkan.");
                return;
            }
            break;
        default:
            console.log("Error: Operasi tidak valid.");
            return;
    }
    return hasil;
}

// Contoh penggunaan
const angka1 = parseFloat(prompt("Masukkan angka pertama:"));
const operasi = prompt("Masukkan operator (+, -, *, /):");
const angka2 = parseFloat(prompt("Masukkan angka kedua:"));

const hasil = kalkulator(angka1, angka2, operasi);

if (hasil !== undefined) {
    console.log(`Hasil: ${hasil}`);
}