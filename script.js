//HARGA SATUAN MAKANAN
// payam = 14000
// plele = 12000
// bekgoreng = 17000
// aybakar = 15000
// Sotayam = 11000
// Sotdaging = 13000

//HARGA SATUAN SAYUR
// Sayasem = 10000
// Saylod = 11000
// Saybay = 10000
// cahkng = 12000
// Tcapcai = 12000

//HARGA SATUAN MINUMAN
// TmnisAngt = 5000
// Tmnisdngin = 6000
// EsJeruk = 5000
// AirP anget = 3000
// AirP dingin = 4000
// SusuJahe = 6000




const Tombolbayar = document.getElementById('total');
const Tombolreset = document.getElementById('reset');




Tombolbayar.addEventListener('click', function() {

    //LAUK
    const lauk = document.getElementById('lauk');
    let makan = lauk.options[lauk.selectedIndex].text;
    let makanV = lauk.options[lauk.selectedIndex].value;
    const porsiL = document.getElementById('porsiL').value;

    //SAYUR
    const sayur = document.getElementById('sayur');
    let makan2 = sayur.options[sayur.selectedIndex].text;
    let makan2V = sayur.options[sayur.selectedIndex].value;
    const porsiS = document.getElementById('porsiS').value;``

    // //MINUM
    const minuman = document.getElementById('minum');
    let minum1 = minuman.options[minuman.selectedIndex].text;
    let minum2 = minuman.options[minuman.selectedIndex].value;
    const porsiM = document.getElementById('porsiM').value;
    
    const list = document.getElementById('makan');
    const li = document.createElement('li');
    li.textContent = makan;
    list.appendChild(li);

    const list2 = document.getElementById('makan2');
    const li2 = document.createElement('li');
    li2.textContent = makan2;
    list2.appendChild(li2);

    const list3 = document.getElementById('minum1');
    const li3 = document.createElement('li');
    li3.textContent = minum1;
    list3.appendChild(li3);

    const total = document.getElementsByClassName('total')[0];
    const totalPesanan = document.createElement('h4');
    totalPesanan.textContent = `Rp.` + [(makanV * porsiL) + ( makan2V * porsiS) + (minum2 * porsiM)];
    totalPesanan.style.color = 'white';
    totalPesanan.style.fontSize = '1.3rem';
    total.appendChild(totalPesanan);

    
    
    
    
});

Tombolreset.addEventListener('click', function() {
    location.reload();
})

