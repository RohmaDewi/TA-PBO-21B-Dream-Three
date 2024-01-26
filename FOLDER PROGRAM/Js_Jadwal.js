document.addEventListener('DOMContentLoaded', function () {
    var bulanDropdown = document.getElementById('bulanDropdown');
    var tableBody = document.querySelector('#jadwalTable tbody');

    // Fungsi untuk mengisi dropdown bulan
    function isiDropdownBulan() {
        var namaBulan = [
            '-','Jadwal Tahun 2024'
        ];

        for (var i = 0; i < namaBulan.length; i++) {
            var option = document.createElement('option');
            option.value = i + 1; // Menambah 1 karena indeks bulan dimulai dari 0
            option.text = namaBulan[i];
            bulanDropdown.add(option);
        }
    }

    // Fungsi untuk mengisi tabel dengan jadwal
    function tampilkanJadwal(bulan) {
        // Simulasi data jadwal, sesuaikan dengan kebutuhan Anda
        var jadwal = [
            { hari: 'Januari', jam: '14-20 Januari', mataPelajaran: 'Dafar Ulang Siswa' },
            { hari: 'Januari', jam: '24 Januari', mataPelajaran: 'Awal KBM (Kegiatan Belajar Mengajar' },
            { hari: 'Fabuari', jam: '08 fabuari', mataPelajaran: 'Isra Mikraj' },
            { hari: 'Fabuari', jam: '09-10 Fabuari', mataPelajaran: 'Tahun Baru Imlek' },
            { hari: 'Maret', jam: '11-12 Maret', mataPelajaran: 'Hari Suci Nyepi' },
            { hari: 'Maret', jam: '13-15 Maret', mataPelajaran: 'Bayaran Ujian' },
            { hari: 'Maret', jam: '18-27 Maret', mataPelajaran: 'Ulangan Mid Semester'},
            { hari: 'Maret', jam: '29-31 Maret', mataPelajaran: 'Wafat Isa Almasih' },
            { hari: 'April', jam: '02-5 April', mataPelajaran: 'Bayaran Ujian Kenaikan Kelas' },
            { hari: 'April', jam: '08-15 April', mataPelajaran: 'Hari Raya Idul Fitri' },
            { hari: 'April', jam: '16-26 April', mataPelajaran: 'Ujian Kenaikan Kelas' },
            { hari: 'April', jam: '30 April', mataPelajaran: 'Pembagian Lapor' },
            { hari: 'Mei', jam: '01-20 Mei', mataPelajaran: 'Libur Kenaikan Kelas' },
            { hari: 'Mei', jam: '21-23 Mei', mataPelajaran: 'Daftar Ulang Siswa' },
            { hari: 'Mei', jam: '24-24 Mei', mataPelajaran: 'Hari Raya Waisak' },
            { hari: 'Mei', jam: '27 Mei', mataPelajaran: 'Awal KBM (Kegiatan Belajar Mengajar' },
            { hari: 'Juni', jam: '01 Juni', mataPelajaran: 'Hari Lahir Pancasila' },
            { hari: 'Juni', jam: '17-18 Juni', mataPelajaran: 'Hari Raya Idul Adha' },
            { hari: 'Juli', jam: '07 Juli', mataPelajaran: 'Tahun Baru Islam' },
            { hari: 'Agustus', jam: '17 Agustus', mataPelajaran: 'Hari Kemerdekaan RI' },
            { hari: 'September', jam: '16 September', mataPelajaran: 'Mulid Nabi' },
            { hari: 'Desember', jam: '25-26 Desember', mataPelajaran: 'Hari Raya Natal' },
        ];

        // Menghapus semua baris dari tabel sebelum mengisi dengan data baru
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }

        // Mengisi tabel dengan data jadwal berdasarkan bulan yang dipilih
        jadwal.forEach(function (jadwalItem) {
            var row = document.createElement('tr');
            row.innerHTML = `<td>${jadwalItem.hari}</td><td>${jadwalItem.jam}</td><td>${jadwalItem.mataPelajaran}</td>`;
            tableBody.appendChild(row);
        });
    }

    // Menetapkan event listener untuk perubahan dropdown bulan
    bulanDropdown.addEventListener('change', function () {
        var bulanTerpilih = bulanDropdown.value;
        tampilkanJadwal(bulanTerpilih);
    });

    // Memanggil fungsi untuk mengisi dropdown bulan saat halaman dimuat
    isiDropdownBulan();
});
