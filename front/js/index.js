
//Recupéree les données de l'API
function requeteApi() {
 fetch("http://localhost:3000/api/products")
  .then(response => response.json())
  .then(products => {
    let resultat = "";
//Affichage des elements émise par l'API
    for(let produit of products) {
        resultat += `<a href="./product.html?id=${produit._id}">
                       <article>
                        <img src="${produit.imageUrl}" alt="${produit.altTxt}">     
                        <h3 class="productName">${produit.name}</h3>
                        <p class="productDescription">${produit.description}</p>
                       </article>
                      </a>`;
    }
//Affichage dynamique des produits 
   document.getElementById("items").innerHTML = resultat;
  })
 .catch(erreur => alert("Malehreseument on puex pas recupere l'API"));
}
requeteApi();






  

   
   

