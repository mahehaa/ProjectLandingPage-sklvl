let navbar = document.getElementsByClassName("menu");
let btns = navbar[0].getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
   // console.log(btns[i])
   btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active")
      // let data = current[0].className
      current[0].className = current[0].className.replace(" active", "")
      this.className += " active"
   });
}

let cardListClass = [
   {
      namaKelas : "Seni Rupa Kontemporer",
      kategori : "seni rupa",
      image : "https://i.postimg.cc/cHGCvdgh/steve-johnson-j-PT1h-VOhqb0-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa Millenium",
      kategori : "seni rupa",
      image : "https://i.postimg.cc/1zt4kWx0/fabrice-villard-Jrl-UQc-Zq-Oc-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa",
      kategori : "kategori",
      image : "https://i.postimg.cc/ZKwSGJJg/simona-sergi-Ofj-Ouw-pr-Pg-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa",
      kategori : "kategori",
      image : "https://i.postimg.cc/KvHW7jGZ/alice-donovan-rouse-yu68f-UQDv-OI-unsplash.jpg"
   },
]

function generateCardsClass(data) {
   let cards = "";

   data.forEach(item => {
       cards += `
         <div class="cardClass">
            <img src="${item.image}" alt="seniRupa" style="width:100%">
               <div class="body-card-class">
                  <h4><b>${item.namaKelas}</b></h4> 
                  <p>${item.kategori}</p>
                  <br>
                  <a href="#">Cek Detail</a>
               </div>          
         </div>
      `;
   });
   return cards;
}

let cardContainerClass = document.getElementById("card-class-container");
cardContainerClass.innerHTML = generateCardsClass(cardListClass);