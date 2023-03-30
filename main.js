// validasi form
function handleGetFormData() {
   let obj = {
       name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       city : document.getElementById("city").value,
       zipCode : document.getElementById("zip-code").value,
       status : document.getElementById("status").checked
   }
   return obj
}

function isNumber(input) {
   if (isNaN(input)) { return false } 
   else { return true }
}

function checkboxIsChecked() {
   let isCheck = document.getElementById("status").checked
   if(isCheck) { return true } 
   else { return false }
}

function validateFormData({name, city, email, zipCode, status}) {
   let obj = {name, city, email, zipCode, status}
   for (let data in obj) {
       let checkNumber = isNumber(obj.zipCode)
       let isChecked = checkboxIsChecked(obj.status)
       if (obj[data] !== null && checkNumber && isChecked) {
           return true
       } else { return false }
   }
}

let submitForm = document.getElementById("submit-form")
submitForm.addEventListener("submit", () => {submit()})

function submit(event) {
   let dataValidasi = validateFormData(handleGetFormData())
   if (dataValidasi === false) {
       return document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
   } else {
       return document.getElementById("warning").innerHTML = "";
   }
   event.preventDefault()
}
// validasi form

// Active Menu
let navbar = document.getElementsByClassName("menu");
let btns = navbar[0].getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
   // console.log(btns[i])
   btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active")
      // console.log(current[0].className)
      current[0].className = current[0].className.replace(" active", "")
      this.className += " active"
   });
}
// Active Menu

// Generate Class Card
let cardListClass = [
   {
      namaKelas : "Seni Rupa Kontemporer",
      deskripsi : "Mengenal apa itu seni kontemporer",
      image : "https://i.postimg.cc/cHGCvdgh/steve-johnson-j-PT1h-VOhqb0-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa Millenium",
      deskripsi : "Generasi millenium perlu tahu nih apa sih seni rupa millenium itu",
      image : "https://i.postimg.cc/1zt4kWx0/fabrice-villard-Jrl-UQc-Zq-Oc-unsplash.jpg"
   },
   {
      namaKelas : "Belajar Membuat Cerpen",
      deskripsi : "Belajar bikin cerpen anti ngebosenin",
      image : "https://i.postimg.cc/nh1hKsPJ/Stock-Snap-HDWDWONFBI.jpg"
   },
   {
      namaKelas : "Mengenal Pameran",
      deskripsi : "Temen-temen harus tau apa itu Pameran Seni dan seberapa pentingnya",
      image : "https://i.postimg.cc/cHdxvdmJ/jessica-pamp-JNTSoyb-bbw-unsplash.jpg"
   }
]

function generateCardsClass(data) {
   let cards = "";

   data.forEach(item => {
       cards += `
         <div class="cardClass">
            <img src="${item.image}" alt="seniRupa" style="width:100%">
               <div class="body-card-class">
                  <h4><b>${item.namaKelas}</b></h4> 
                  <p>${item.deskripsi}</p>
                  <br>
               </div> 
               <button class="btn-kelas" id="btn-kelas">Mulai Belajar</button>         
         </div>
      `;
   });
   return cards;
}

let cardContainerClass = document.getElementById("card-class-container");
cardContainerClass.innerHTML = generateCardsClass(cardListClass);
// Generate Class Card