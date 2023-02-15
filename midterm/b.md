 <div class="box">
 <div class='img-box'>
             <img class="images" src="${response[i].images[1]}" alt="${
          response[i].category.name
        }" ></img>
        <div class='bottom'>
            <p>${
             title.length > 18 ? title.substring(0, 18).concat(' ...') : title
           }</p> 
             
             <h2>$${response[i].price}</h2>`
             +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
                 


            