let cardList = [
   {
      namaKelas : "Seni Rupa",
      deskripsi : "deskripsi",
      image : "https://i.postimg.cc/DZyhyMzZ/adrianna-geo-1r-Bg5-YSi00c-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa",
      deskripsi : "deskripsi",
      image : "https://i.postimg.cc/DZyhyMzZ/adrianna-geo-1r-Bg5-YSi00c-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa",
      deskripsi : "deskripsi",
      image : "https://i.postimg.cc/DZyhyMzZ/adrianna-geo-1r-Bg5-YSi00c-unsplash.jpg"
   },
   {
      namaKelas : "Seni Rupa",
      deskripsi : "deskripsi",
      image : "https://i.postimg.cc/DZyhyMzZ/adrianna-geo-1r-Bg5-YSi00c-unsplash.jpg"
   },
]

function generateCards(data) {
   let cards = "";

   data.forEach((item) => {
       cards += `
         <div class="card">
            <img src="${item.image}" alt="seniRupa" style="width:100%">
               <div class="container-kelas">
                  <h4><b>${item.namaKelas}</b></h4> 
               <p>${item.deskripsi}</p> 
            </div>          
         </div>
      `;
   });

   return cards;
}

let cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = generateCards(cardList);