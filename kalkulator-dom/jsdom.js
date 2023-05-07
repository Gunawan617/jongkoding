function tambah(){

    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil=eval(angka1)+eval(angka2)
    document.getElementById("hasil").innerHTML = `Hasil dari ${angka1} + ${angka2} = ${hasil}`
}

function kurang(){

    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil=eval(angka1)-eval(angka2)
    document.getElementById("hasil").innerHTML = `Hasil dari ${angka1} - ${angka2} = ${hasil}`
}

function bagi(){

    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil=eval(angka1)/eval(angka2)
    document.getElementById("hasil").innerHTML = `Hasil dari ${angka1} / ${angka2} = ${hasil}`
}
function kali(){

    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    let hasil=eval(angka1)* eval(angka2)
    document.getElementById("hasil").innerHTML = `Hasil dari ${angka1} x ${angka2} = ${hasil}`
}
function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").innerHTML = "";
  }
  