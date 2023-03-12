const product = [
    {
      id: 1,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_m2.png",
      tillte: "Apple Macbook Air M2 2022 8GB 256GB I Chính hãng Apple Việt Nam",
      price: "27.390.000",
      note: "Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19 triệu trở lên và thanh toán qua ví Moca trên ứng dụng Grab và 3 km khác.",
      rating: 0,
      discount: "32%",
    },
    {
      id: 2,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_air_22.png",
      tillte: "Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam ",
      price: "19.690.000",
      note: "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 4 km khác",
      rating: 5,
      discount: "17%",
    },
    {
      id: 3,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9.1.jpg",
      tillte: "Laptop Asus Vivobook Flip 14 TP470EA EC346W",
      price: "19.690.000",
      note: "Quà 8/3 - Tặng thêm phiếu mua hàng 150.000đ và 3 km khác",
      rating: 5,
      discount: "31%",
    },
    {
      id: 4,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9.1.jpg",
      tillte: "Laptop Asus Vivobook Flip 14 TP470EA EC346W",
      price: "18.490.000",
      note: "Quà 8/3 - Tặng thêm phiếu mua hàng 150.000đ và 3 km khác",
      rating: 5,
      discount: "23%",
    },
    {
      id: 5,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook_256.png",
      tillte:
        "Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam",
      price: "30.290.000",
      note: "Quà 8/3 - Tặng thêm phiếu mua hàng 150.000đ và 3 km khác",
      rating: 0,
      discount: "16%",
    },
    {
      id: 6,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/h/1h47.png",
      tillte: "Laptop Lenovo Ideapad Gaming 3 15ARH7",
      price: "23.990.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 2 km khác",
      rating: 0,
      discount: "13%",
    },
    {
      id: 7,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/y/o/yoga-purple.jpg",
      tillte: "Laptop Lenovo Yoga Slim 7I 14ITL5 ",
      price: "21.990.000",
      note: "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 1 km khác",
      rating: 0,
      discount: "21%",
    },
    {
      id: 8,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/e/text_ng_n_22_.png",
      tillte: "Laptop MSI Modern 14 B11MOU-1032VN",
      price: "14.790.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 3 km khác",
      rating: 4,
      discount: "23%",
    },
    {
      id: 9,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/r/pro_8gb.png",
      tillte:
        "Apple MacBook Pro 13 Touch Bar M1 256GB 2020 I Chính hãng Apple Việt Nam",
      price: "27.590.000",
      note: "Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k và 2 km khác",
      rating: 5,
      discount: "32%",
    },
    {
      id: 10,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/a/laptop-hp-gaming-victus-15-fa0031dx-6503849-6.jpg",
      tillte: "Laptop HP Gaming Victus 15-FA0031DX 6503849",
      price: "16.790.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 2 km khác",
      rating: 0,
      discount: "27%",
    },
    {
      id: 11,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/i/air_m2_16gb.png",
      tillte: "Apple Macbook Air M2 2022 16GB 256GB I Chính hãng Apple Việt Nam",
      price: "33.490.000",
      note: "Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19 triệu trở lên và thanh toán qua ví Moca trên ứng dụng Grab và 3 km khác",
      rating: 0,
      discount: "16%",
    },
    {
      id: 12,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/5/h/5h53.png",
      tillte: "Laptop ASUS TUF Gaming F15 FX506HC-HN144W",
      price: "19.990.000",
      note: "Tặng balo ASUS TUF Gaming VP4700 và 4 km khác",
      rating: 0,
      discount: "23%",
    },
    {
      id: 13,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/c/dcd_1.jpg",
      tillte: "Laptop Asus Vivobook OLED 15X A1503ZA-L1151W",
      price: "14.690.000",
      note: "Giảm thêm 200K khi mua combo Laptop/Mac kèm office và 2 km khác",
      rating: 0,
      discount: "22%",
    },
    {
      id: 14,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/gaming_5_3.png",
      tillte: "Laptop Asus Vivobook 14X M1403QA-LY024W",
      price: "14.990.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 2 km khác",
      rating: 0,
      discount: "27%",
    },
    {
      id: 15,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/5/h/5h03_1.png",
      tillte: "Laptop ASUS Gaming TUF FX506LHB-HN188W",
      price: "16.690.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 2 km khác",
      rating: 5,
      discount: "21%",
    },
    {
      id: 15,
      image:
        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/5/h/5h03_1.png",
      tillte: "Laptop ASUS Gaming TUF FX506LHB-HN188W",
      price: "16.690.000",
      note: "Thu cũ lên đời - Trợ giá 1 triệu và 2 km khác",
      rating: 5,
      discount: "21%",
    },
  ];
  // tạo list sản phẩm
  const bodyElement = document.getElementById("body");
  
  function getProducts() {
    for (let i = 0; i < product.length; i++) {
      const laptopElement = document.createElement("div");
      laptopElement.classList.add("list-laptop");
      const laptopContent = `
            <div class="discounts">Giảm&nbsp;${product[i].discount}</div>
            <div class="img">
              <img src="${product[i].image}" alt="laptop">
            </div>
            <div class="product-tillte">
              <h3>${product[i].tillte}</h3>
            </div>
           
            <div class="price">
              <p>${product[i].price}&nbsp;₫</p>
            </div>
            <div class="note"><p>${product[i].note}</p></div>
            <div class="vote">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i> 
            </div>
            <button class="click">thêm vào giỏ hàng</button>
          </div>
        </div>`;
      laptopElement.innerHTML = laptopContent;
      bodyElement.appendChild(laptopElement);
    }
  }
  // thêm sản phẩm vào giỏ hàng
  // bước 1: lấy thông tin sản phẩm
  getProducts();
  function addToCard() {
    const btn = document.querySelectorAll(".click");
    // console.log(btn);
    btn.forEach(function (button, index) {
      button.addEventListener("click", function (event) {
        {
          let btnItem = event.target;
          let product = btnItem.parentElement;
          let productImg = product.querySelector("img").src;
          let productTillte = product.querySelector("h3").innerHTML;
          let productPrice = product.querySelector("p").innerHTML;
          // console.log(productPrice, productImg, productTillte);
          addCard(productImg, productTillte, productPrice);
        }
      });
    });
  }
  addToCard();
  function addCard(productImg, productTillte, productPrice) {
    const addcard = document.querySelector(".addCard");
    const lineProduct = document.createElement("div");
    lineProduct.classList.add("line-product");
    const lineProductContent = `
    <div class="name-product">
            <img src="${productImg}" alt="laptop">
            <h3>${productTillte}</h3>
          </div>
          <div class="product-price">${productPrice}</div>
    `;
    lineProduct.innerHTML = lineProductContent;
    addcard.appendChild(lineProduct);
  }
  // function showCard() {
  //   addToCard();
  //   addCard(productImg, productTillte, productPrice);
  // }
  function sendRequire() {
    const send = document.querySelector(".send");
    const inpName = document.querySelector("#inp-i4-1");
    const inpEmail = document.querySelector("#inp-i4-2");
    if (inpName.value === "" || inpEmail.value === "") {
      alert("mời nhập đầy đủ thông tin");
    } else {
      alert("Thông tin đã được gửi");
      send.remove;
    }
  }
  
  // search
   