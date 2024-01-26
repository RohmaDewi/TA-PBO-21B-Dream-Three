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

     //  buat arrow function agar isi data hanya dapat diisi huruf dan spasi
	 const keyText = (event) => {
        if (
          (event.key >= "a" && event.key <= "z") ||
          (event.key >= "A" && event.key <= "Z") ||
          event.which == 32 || event.key == "."
        ) {
          return true;
        } else {
          return false;
        }
        id ="nama"
      };
      // buat event "keypress" (kejadian saat menekan dan menahan tombol tertentu)
      // panggil fungsi "keyText" agar "txt_nama" hanya dapat diisi huruf dan spasi
      nama.addEventListener(
        "keypress",
        (event) => (event.returnValue = keyText(event))
      );