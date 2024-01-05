let menuicn = document.querySelector(".menuicn");
                      

let nav = document.querySelector(".navcontainer");





menuicn.addEventListener("click", () => {


    nav.classList.toggle("navclose");


})


DatadanHasil();

function DatadanHasil() { 
    $.ajax({
        url: "http://localhost/latihan/rest-server/api/mahasiswa",
        type: "get",
        dataType: "json",
        data: {
            'key':'data123',
        },
        success: function(respon){
            // console.log(respon)
            if (respon.status == true){
                let datahasil = respon.data;
                // console.log(datahasil);
                $.each(datahasil, function(i, data) {
                    $('#list-daftar').append(`
                    <tr class="text-center">
                        <td class="text-capitalize font-weight-bold">`+data.nama+`</td>
                        <td>`+data.nis+`</td>
                        <td>`+data.kelas+`</td>
                        <td class="text-capitalize">`+data.agama+`</td>
                        <td class="informasinya ">
                            <a href="#" class="card-link text-success font-weight-bold" data-toggle="modal" data-target="#ModalEdit" data-id="`+data.id+`" id="tombol-ubah">Ubah</a>
                            <a href="#" class="card-link text-danger font-weight-bold" data-toggle="modal" data-target="#ModalHapus" data-id="`+data.id+`" id="tombol-hapus">Hapus</a>
                        </td>
                    </tr>
                    `);
                }); 
                
                
            }
        },
        
    });
}
$('#tombol-tambah').on('click', function(){
    $('#list-daftar').html('');
    $('#informasi-hasil').html('');
    $.ajax({
        url: "http://localhost/latihan/rest-server/api/mahasiswa",
        type: "post",
        dataType: "json",
        data: {
            'key':'data123',
            'nama': $('#nama').val(),
            'nis': $('#nis').val(),
            'kelas':$('#kelas').val(),
            'agama': $('#agama').val(),
        },
        success: function(res){
            // console.log(res);
           
                let pesan = res.message;
                $('#informasi-hasil').append('<h4 class="text-capitalize">add success</h4>')

                
                DatadanHasil();
                
            }
            
        })
        $('#nama').val('');
        $('#nis').val('');
        $('#kelas').val('');
        $('#agama').val('');
    
})



// $('#tombol-ubah').on('click', function(){
    
//     $.ajax({
//         url: "http://localhost/latihan/rest-server/api/mahasiswa",
//         type: "get",
//         dataType: "json",
//         data: {
//             'key':'data123',
//             'nama': $('#nama').val(),
//             'nis': $('#nis').val(),
//             'kelas':$('#kelas').val(),
//             'agama': $('#agama').val(),
//         },
//         success: function(res){
//             // console.log(res);
           
//                 let pesan = res.message;
//                 $('#informasi-hasil').append('<h4 class="text-capitalize">'+pesan+'</h4>')

                
//                 DatadanHasil();
                
//             }
            
//         })
//         $('#nama').val('');
//         $('#nis').val('');
//         $('#kelas').val('');
//         $('#agama').val('');
    
// })
$('#list-daftar').on('click','#tombol-ubah', function(){
    $.ajax({
        url:'http://localhost/latihan/rest-server/api/mahasiswa',
        dataType:'json',
        type:'get',
        data:{
            'key':'data123',
            'id': $(this).data('id')
        },
        success: function(respon){
                // console.log(respon)
            HasilEdit();


            function HasilEdit(){
                if (respon.status == true){
                    let isi = respon.data[0];
                    $('#BodyEdit').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="icon-orang.png" class="img-fluid">
                            </div>
                            <div class="col-md-6">
                                <div class="row mt-3">
                                    <div class="col-2">
                                        <div class="form-group ket-nya ">
                                            <label for="usr" >ID:</label>
                                        </div>
                                        <div class="form-group">
                                            <label for="usr">Nama:</label>
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">NIS:</label>
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Kelas:</label>
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Agama:</label>
                                        </div>
                                    </div>
                                    <div class="col-6 mt-1 ml-5">
                                        <div class="form-group">
                                            <input type="text" class="form-control kotak-isi text-biru" id="hasil-id" disabled value="`+isi.id+`">
                                        
                                            <input type="text" class="form-control kotak-isi text-biru" id="hasil-nama" value="`+isi.nama+`">
            
                                            <input type="text" class="form-control kotak-isi text-biru" id="hasil-nis" value="`+isi.nis+`">
                                
                                            <select class="custom-select kotak-isi text-biru" id="hasil-kelas" >
                                                <option selected class="list-group-item-dark awal-kelas" >`+isi.kelas+`</option>
                                                <option >X</option>
                                                <option >XI</option>
                                                <option >XII</option>
                                            </select>
                                    
                                            <select class="custom-select kotak-isi text-biru" id="hasil-agama" >
                                                <option selected class="list-group-item-dark awal-kelas" >`+isi.agama+`</option>
                                                    <option>Islam</option>
                                                    <option>Kristen</option>
                                                    <option>Katolik</option>
                                                    <option>Budha</option>
                                                    <option>Hindu</option>
                                                    <option>Kong Hu Cu</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    `);
                }


                
            }
            
        }
        
    })
})

$('#simpan-putnya').on('click',function(){
    $('#list-daftar').html('');
    $('#informasi-hasil').html('');
    $.ajax({
        url:'http://localhost/latihan/rest-server/api/mahasiswa',
        dataType:'json',
        type: 'put',
        data:{
            'key':'data123',
            'id': $('#hasil-id').val(),
            'nama':$('#hasil-nama').val(),
            'nis':$('#hasil-nis').val(),
            'kelas':$('#hasil-kelas').val(),
            'agama':$('#hasil-agama').val()
        },
        success: function(res){
            // console.log(res);
           
                let pesan = res.message;
                $('#informasi-hasil').append('<h4 class="text-capitalize">'+pesan+'</h4>')

                
                DatadanHasil();
                
            }
            
    })

    // $.put = function(){
 
    //     if ( respon.status == true ){
    //       type = callback,
    //       callback = data,
    //       data = {
    //         'key':'data123',
    //         'id':$('#hasil-id').val(),
    //         'nama':$('#hasil-nama').val(),
    //         'nis':$('#hasil-nis').val(),
    //         'kelas':$('#hasil-kelas').val(),
    //         'agama':$('#hasil-agama').val()
    //       }
    //     }
       
    //     return $.ajax({
    //       url: 'http://localhost/latihan/rest-server/api/mahasiswa',
    //       type: 'PUT',
    //       success: callback,
    //       data: data,
    //       contentType: type
    //     });
    //   }
});



$('#list-daftar').on('click','#tombol-hapus',function(){
            $('#BodyHapus').html('');
            // $('#informasi-hasil').html('');
           
            $.ajax({
                url:'http://localhost/latihan/rest-server/api/mahasiswa',
                dataType:'json',
                type:'get',
                data:{
                    'key':'data123',
                    'id': $(this).data('id')
                },
                success: function(respon){
                    if (respon.status == true){
                        let isi = respon.data[0];
                    $('#BodyHapus').append(`
                    <div classs="container-fluid"> 
                        <div class="row text-center">
                            <h5 class="text-danger text-hapus">Apakah Data Ingin di Hapus ? </h5> 
                            <input type="text" id="id-untuk-hapus" class="id-hapus font-weight-bold" disabled value="`+isi.id+`">
                        </div>
                    </div>
                    `);
                    }
                        
                }
            })
        
})



$('#tombolHapusData').on('click',function(){
    $('#list-daftar').html('');
    $('#informasi-hasil').html('');
   $.ajax({
        url:'http://localhost/latihan/rest-server/api/mahasiswa',
        dataType:'json',
        type:'delete',
        data:{
            'key':'data123',
            'id': $('#id-untuk-hapus').val()
        },
        success: function(respon){
            let pesan = respon.message;
            $('#informasi-hasil').append('<h4 class="text-capitalize">'+pesan+'</h4>')

            DatadanHasil();
        }
   })
  
})

// $('#tombol-hapus').on('click', function(){
//     $.ajax({
//         url: "http://localhost/latihan/rest-server/api/mahasiswa",
//         type: "delete",
//         dataType: "json",
//         data: {
//             'key':'data123',
//             'id': $('#kode-id').html()
//         },
//         success: function(isi){
//         console.log(isi);
//         }
//     }); 
// })

var formAb = document.querySelector(".form-absensi");
var footerD = document.querySelector('.footerD');

// if(localStorage.getItem('theme') == 'tDark')
// 	darkmode(true)

function darkmode(isDark) 
{
	if (isDark) {
		document.body.setAttribute('id','dark');
		formAb.classList.remove("shadow-lg");
		formAb.setAttribute('id', 'bshadow');
		footerD.classList.toggle('d-none');
		// localStorage.setItem('theme', 'tDark');
	}
	else {
		document.body.setAttribute('id', '');
		formAb.classList.add("shadow-lg");
		formAb.setAttribute('id', '');
		footerD.classList.toggle('d-none');
		// localStorage.setItem('theme', '');
	}
}
