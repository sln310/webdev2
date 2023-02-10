// const product = [
//   {
//     id: 0,
//     image: "image/gg-1.jpg",
//     title: "Z Flip Foldable Mobile",
//     price: 120,
//   },
//   {
//     id: 1,
//     image: "image/hh-2.jpg",
//     title: "Air Pods Pro",
//     price: 60,
//   },
//   {
//     id: 2,
//     image: "image/ee-3.jpg",
//     title: "250D DSLR Camera",
//     price: 230,
//   },
//   {
//     id: 3,
//     image: "image/aa-1.jpg",
//     title: "Head Phones",
//     price: 100,
//   },
// ];

// const API = "https://fakestoreapi.com/products";

// async function callApi() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const aaa = await res.json();
//   return aaa;
// }

// callApi();

//JSON文字列に変換する
// const res = await fetch("https://fakestoreapi.com/products");
// const aaa = await res.json();
// return aaa;
// const json = JSON.stringify("https://fakestoreapi.com/products");
// JSON文字列からオブジェクトに変換する
// const product = JSON.parse(json);
// console.log(aaa);

// let product = JSON.parse(aaa);

// const product = sendHttpRequest(
//   "GET",
//   "https://jsonplaceholder.typicode.com/posts"
// );
// const product = await fetch("https://fakestoreapi.com/products");
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.text())
//   .then((text) => {
//     console.log(text);
//   });

// const product = [];

// callApi.forEach((value) => {
//   product.push(value.userId);
// });

function readJson() {
  //サンプルのjsonデータの格納URLを変数で定義する
  let url = "https://fakestoreapi.com/products";
  //URLにリクエストしてレスポンスとしてjsonデータを読み込む
  let response = UrlFetchApp.fetch(url).getContentText();
  console.log(response);
  //そのままではjsonとして値の取り出しができない(undefinedに)
  //   console.log(response);
  //そのままではスクリプトで処理できないのでparseする
  let json = JSON.parse(response);
  console.log(json);
}

//------------------------------------------------
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

//-----------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     let products = document.querySelector("#root");
//     async function fetchProducts(url) {
//       try {
//         let data = await fetch(url);
//         let response = await data.json();

//         for (let i = 0; i < response.length; i++) {
//           let description = response[i].description;
//           let title = response[i].title;
//           products.innerHTML +=
//             `
//         <div class="box">
//         <div class='img-box'>
//                     <img class="images" src="${response[i].images[1]}" alt="${
//               response[i].category.name
//             }" ></img>
//                <div class='bottom'>
//                    <p>${
//                      title.length > 18
//                        ? title.substring(0, 18).concat(" ...")
//                        : title
//                    }</p>

//                     <h2>$${response[i].price}</h2>` +
//             "<button onclick='addtocart(" +
//             i++ +
//             ")'>Add to cart</button>" +
//             `</div>
//                </div>`;
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchProducts("https://api.escuelajs.co/api/v1/products");
//   })
//   .join("");
//--------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   let products = document.querySelector(".container");
//   async function fetchProducts(url) {
//     try {
//       let data = await fetch(url);
//       let response = await data.json();

//       for (let i = 0; i < response.length; i++) {
//         let description = response[i].description;
//         let title = response[i].title;
//         products.innerHTML += `
//        <div class="box">
//            <img src="${response[i].images[1]}" alt="${
//           response[i].category.name
//         }" class="product-img">
//            <div class="product-content">
//            <h2 class="product-title">${
//              title.length > 18 ? title.substring(0, 18).concat(" ...") : title
//            }</h2>
//            <h4 class="product-category">${response[i].category.name}</h4>
//            <p class="product-description">${
//              description.length > 80
//                ? description.substring(0, 80).concat(" ...more")
//                : description
//            }</p>
//            <div class="product-price-container">
//                <h3 class="product-price">$${response[i].price}</h3>
//                <a href="#!" data-productId="${
//                  response[i].id
//                }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
//            </div>
//            </div>

//        </div>
//        `;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   fetchProducts("https://api.escuelajs.co/api/v1/products");
// });
//--------------------------------------
var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
