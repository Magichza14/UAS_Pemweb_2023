const datamhs = [
    {
        nama: "Rizky",
        nim: "105021810001",
        prodi: "Sistem Informasi",
        email: "rizky@gmail.com",
        alamat: "Gg. Gak Berani, Jakarta",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Budi",
        nim: "105021810002",
        prodi: "Teknik Informatika",
        email: "budi@gmail.com",
        alamat: "Jl. Raya Kampus ITB, Bandung",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Siti",
        nim: "105021810003",
        prodi: "Sistem Informasi",
        email: "siti@gmail.com",
        alamat: "Jl. Raya Jambu, Kebumen",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Joko",
        nim: "105021810004",
        prodi: "Teknik Informatika",
        email: "joko@gmail.com",
        alamat: "Jl. Raya Kampus IPB, Bogor",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Dewi",
        nim: "105021810005",
        prodi: "Sistem Informasi",
        email: "dewi@gmail.com",
        alamat: "Jl. Raya Kampus UI, Depok",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Agus",
        nim: "105021810006",
        prodi: "Teknik Informatika",
        email: "agusboncos@gmail.com",
        alamat: "Jl. Raya Kampus UGM, Yogyakarta",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Lina Lapar",
        nim: "105021810007",
        prodi: "Sistem Informasi",
        email: "linakenyang@gmail.com",
        alamat: "Jl. Raya Kampus UNDIP, Semarang",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Rudi",
        nim: "105021810008",
        prodi: "Teknik Informatika",
        email: "rudianaknackal@gmail.com",
        alamat: "Jl. Raya Kampus UNNES, Semarang",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Fani",
        nim: "105021810009",
        prodi: "Sistem Informasi",
        email: "fanfans@gmail.com",
        alamat: "Jl. Raya Kampus UIN, Semarang",
        jenis_kelamin: "Perempuan",
    },
    {
        nama: "Hadi",
        nim: "105021810010",
        prodi: "Teknik Informatika",
        email: "hadipalingganteng@gmail.com",
        alamat: "Jl. Terusan Way Hui, Bandar Lampung",
        jenis_kelamin: "Laki-laki",
    },
    {
        nama: "Salma",
        nim: "105021810011",
        prodi: "Sistem Informasi",
        email: "salmasyantik@gmail.com",
        alamat: "Jl. Pajajaran, Bogor",
        jenis_kelamin: "Perempuan",
    }
];

// get element from id
let count_total_mhs = document.getElementById("count_total_mhs");
let count_total_mhs_laki = document.getElementById("count_laki_mhs");
let count_total_mhs_perempuan = document.getElementById("count_perempuan_mhs");
let count_si = document.getElementById("count_si");
let count_if = document.getElementById("count_if");
let table = document.getElementById("table-mhs");

// insert value to element
try {
    count_total_mhs.innerHTML = datamhs.length;
    count_total_mhs_laki.innerHTML = datamhs.filter(mhs => mhs.jenis_kelamin == "Laki-laki").length;
    count_total_mhs_perempuan.innerHTML = datamhs.filter(mhs => mhs.jenis_kelamin == "Perempuan").length;
    count_si.innerHTML = datamhs.filter(mhs => mhs.prodi == "Sistem Informasi").length;
    count_if.innerHTML = datamhs.filter(mhs => mhs.prodi == "Teknik Informatika").length;    
} catch (error) {
    // insert data to table
    for (let i = 0; i < datamhs.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${datamhs[i].nim}</td>
                <td>${datamhs[i].nama}</td>
                <td>${datamhs[i].jenis_kelamin}</td>
                <td>${datamhs[i].prodi}</td>
                <td>${datamhs[i].email}</td>
                <td>${datamhs[i].alamat}</td>
            </tr>
        `;
    }
}
