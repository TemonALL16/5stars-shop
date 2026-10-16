// Data Nominal/Paket untuk Masing-Masing Game
const dataNominal = {
    'Valorant': [
        { nama: 'Riot Cash 45,000 IDR', harga: 'Rp 45.000' },
        { nama: 'Riot Cash 75,000 IDR', harga: 'Rp 75.000' },
        { nama: 'Riot Cash 149,000 IDR', harga: 'Rp 149.000' },
        { nama: 'Riot Cash 219,000 IDR', harga: 'Rp 219.000' },
        { nama: 'Riot Cash 359,000 IDR', harga: 'Rp 359.000' },
        { nama: 'Riot Cash 739,000 IDR', harga: 'Rp 739.000' }
    ],
    'Mobile Legends': [
        { nama: '86 Diamonds', harga: 'Rp 20.000' },
        { nama: '172 Diamonds', harga: 'Rp 40.000' },
        { nama: '257 Diamonds', harga: 'Rp 60.000' },
        { nama: '344 Diamonds', harga: 'Rp 80.000' },
        { nama: '429 Diamonds', harga: 'Rp 100.000' },
        { nama: '706 Diamonds', harga: 'Rp 160.000' },
        { nama: 'Weekly Diamond Pass', harga: 'Rp 28.000' }
    ],
    'Free Fire': [
        { nama: '50 Diamonds', harga: 'Rp 8.000' },
        { nama: '140 Diamonds', harga: 'Rp 20.000' },
        { nama: '355 Diamonds', harga: 'Rp 50.000' },
        { nama: '720 Diamonds', harga: 'Rp 100.000' },
        { nama: '1450 Diamonds', harga: 'Rp 200.000' },
        { nama: 'Membership Mingguan', harga: 'Rp 30.000' }
    ],
    'Roblox': [
        { nama: '100 Robux', harga: 'Rp 18.000' },
        { nama: '200 Robux', harga: 'Rp 35.000' },
        { nama: '400 Robux', harga: 'Rp 65.000' },
        { nama: '800 Robux', harga: 'Rp 130.000' },
        { nama: '2000 Robux', harga: 'Rp 320.000' }
    ]
};

// Fungsi Membuka Halaman Detail Top Up
function bukaDetailTopUp(namaGameKey, namaGame, publisher, classGambar) {
    document.getElementById('halaman-utama').style.display = 'none';
    document.getElementById('halaman-topup-detail').style.display = 'block';
    
    // Set Header Game
    document.getElementById('detail-game-title').innerText = namaGame;
    document.getElementById('detail-game-publisher').innerText = publisher;
    
    // Set Logo Game
    const imgBox = document.getElementById('detail-game-img');
    imgBox.className = 'game-logo-box ' + classGambar;

    // Reset Pilihan Checkout
    document.getElementById('summary-item').innerText = 'Belum dipilih';
    document.getElementById('summary-total').innerText = 'Rp 0';

    // Render/Tampilkan Nominal Sesuai Game
    const nominalContainer = document.getElementById('nominal-container');
    nominalContainer.innerHTML = ''; // Bersihkan isi lama

    const paketList = dataNominal[namaGameKey] || [];

    paketList.forEach(paket => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'nominal-item';
        itemDiv.onclick = function() {
            pilihNominal(this, paket.nama, paket.harga);
        };
        itemDiv.innerHTML = `
            <h4>${paket.nama}</h4>
            <p>${paket.harga}</p>
        `;
        nominalContainer.appendChild(itemDiv);
    });

    window.scrollTo(0, 0);
}

// Fungsi Kembali ke Beranda Utama
function bukaHalamanUtama() {
    document.getElementById('halaman-utama').style.display = 'block';
    document.getElementById('halaman-topup-detail').style.display = 'none';
    window.scrollTo(0, 0);
}

// Fungsi Memilih Nominal Produk
function pilihNominal(element, namaItem, harga) {
    const items = document.querySelectorAll('.nominal-item');
    items.forEach(item => item.classList.remove('active'));

    element.classList.add('active');

    document.getElementById('summary-item').innerText = namaItem;
    document.getElementById('summary-total').innerText = harga;
}

// Fungsi Tombol Bayar
function prosesBayar() {
    const item = document.getElementById('summary-item').innerText;
    if (item === 'Belum dipilih') {
        alert('Silakan pilih nominal top up terlebih dahulu!');
    } else {
        alert('Terima kasih! Pesanan ' + item + ' Anda sedang diproses.');
    }
}