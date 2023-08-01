/**
 *   1. Cơ chế khai báo biến var, let, const
 * ====== Var : hỗ trợ cơ chế hoisting
 * */

/**---------- Ví Dụ: Xây dựng chức năng thay đổi màu sắc của nhà
 * Cho mảng màu yêu cầu
 *    - Render các button tại div#colors
 *    - Xử lý khi click vào các button thì i#home thay đổi màu sắc tướng ứng
 * */

let arrColor = ["red", "green", "blue", "orange", "yellow", "purple", "pink"];
// arrow funtion
let renderButton = () => {
  // input : arrColor[]
  // output html <button>Red</button>  <button>green</button>
  let html = "";
  for (let index = 0; index < arrColor.length; index++) {
    // Mỗi lần duyệt lấy ra 1 màu
    let color = arrColor[index];
    html += `
        <button class="btn" style="background-color:${color}; color: white;" onclick ="changeColor('${color}')">${color}</button>
                
            `;
  }

  // in output ra giao diện
  document.querySelector("#colors").innerHTML = html;
};

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
};
// Khi trang web vừa load lên gọi hàm renderButton thực thi
window.onload = function () {
  renderButton();
};

// -------------- Dynamic Key ---- cho phép truyền giá trị vào tên thuộc tính
let key = "mô tả";

let pro = {
  id: "1",
  name: "produc 1",
  // ['mô tả'] : 'desc',
  [key]: "mô tả product",
};

// console.log('Mô tả : ',pro["mô tả"]);
console.log(pro);
console.log("key : ", pro[key]);

//------------------ for in & for of

let product = [
  { id: "1", name: "Iphone", price: 1000, productTypeId: "Phone" }, // index 0
  { id: "2", name: "Iphone XS", price: 2000, productTypeId: "Phone" }, // index 1
  { id: "3", name: "Macbook", price: 3000, productTypeId: "Laptop" }, // index 2
  { id: "4", name: "Macbook pro", price: 4000, productTypeId: "Laptop" }, //index 3
  { id: "5", name: "Ipad X", price: 4000, productTypeId: "Tablet" }, // index 4
  { id: "6", name: "Ipad Mini", price: 1000, productTypeId: "Tablet" }, // index 5
];
// for in : ngoài duyệt index của mảng thì còn duyệt được key của object
for (let index in product) {
  // Mỗi lần duyệt lấy ra index của mảng
  let pro = product[index];
  console.log("Product", pro);
}
let item = {
  id: "1",
  name: "item 1",
  price: 1000,
};

for (let key in item) {
  console.log(key, item[key]);
}
for (let key of product) {
  // Mỗi lần duyệt lấy ra 1 phần tử của mảng
  console.log("Product 2", key);
}

/**
 * let product = [
  { id: "1", name: "Iphone", price: 1000, productTypeId: "Phone" },// index 0
  { id: "2", name: "Iphone XS", price: 2000, productTypeId: "Phone" },// index 1
  { id: "3", name: "Macbook", price: 3000, productTypeId: "Laptop" },// index 2
  { id: "4", name: "Macbook pro", price: 4000, productTypeId: "Laptop" },//index 3
  { id: "5", name: "Ipad X", price: 4000, productTypeId: "Tablet" },// index 4
  { id: "6", name: "Ipad Mini", price: 1000, productTypeId: "Tablet" },// index 5
];
*/

/**  .filter : dùng để lọc 1 mảng con ( kết quả trả về mảng ) từ mảng chính.
 * Nếu phần tử thỏa arrow function thì phần tử đó sẽ được add vào mảng kết quả. Nếu không có phần tử nào khớp với arrow function thì kết quả trả về mảng rỗng
 */
/*=== Lấy ra các product là Phone -- arrPhone
            0:{id: '1', name: 'Iphone', price: 1000, productTypeId: 'Phone'}
            1:{id: '2', name: 'Iphone XS', price: 2000, productTypeId: 'Phone'}
            length:2

        === Lấy giá các sản phẩm từ 3000 trở xuống --- arrPrice
            0: {id: '1', name: 'Iphone', price: 1000, productTypeId: 'Phone'}
            1: {id: '2', name: 'Iphone XS', price: 2000, productTypeId: 'Phone'}
            2: {id: '3', name: 'Macbook', price: 3000, productTypeId: 'Laptop'}
            3: {id: '6', name: 'Ipad Mini', price: 1000, productTypeId: 'Tablet'}
            length: 4

      */

// let output = [];
// for ( key of product){

//   if ( key.productTypeId === "Phone"){

//     output.push(key);
//   }
// }
// console.log("key", output);

let arrPhone = product.filter((item) => item.productTypeId === "Phone");

console.log("arrPhone", arrPhone);

let arrPrice = product.filter((item) => item.price <= 3000);
console.log("arrPrice", arrPrice);

/**  .map()
 *
 */

// let html = product.map((item, index) => {
//   let tr = `<tr class ="item_${index}">
//               <td>${item.id}</td>
//               <td>${item.name}</td>
//               <td>${item.price}</td>
//               <td>${item.productTypeId}</td>
//             </tr>`;
//   return tr;
// });

// console.log(html);
// // for of duyệt lấy từng phần tử của mảng
// for (let tr of html) {
//   document.querySelector("#tblMap").innerHTML += tr;
// }

/** reduce
 *
 * ----- Tính tổng tiền
 */
/**
 * let product = [
  { id: "1", name: "Iphone", price: 1000, productTypeId: "Phone" },// index 0
  { id: "2", name: "Iphone XS", price: 2000, productTypeId: "Phone" },// index 1
  { id: "3", name: "Macbook", price: 3000, productTypeId: "Laptop" },// index 2
  { id: "4", name: "Macbook pro", price: 4000, productTypeId: "Laptop" },//index 3
  { id: "5", name: "Ipad X", price: 4000, productTypeId: "Tablet" },// index 4
  { id: "6", name: "Ipad Mini", price: 1000, productTypeId: "Tablet" },// index 5
];
*/
let tongTien = product.reduce((price, item, index) => {
  // price : 0 ->  price: 1000 ->
  return price + item.price; // 0 + 1000= 1000
}, 0);

console.log("Tỏng tiền", tongTien);

// let html_map = product.reduce((innerHTML, item, index) => {
//   return (innerHTML + `<tr class ="item_${index}">
//                 <td>${item.id}</td>
//                 <td>${item.name}</td>
//                 <td>${item.price}</td>
//                 <td>${item.productTypeId}</td>
//                 </tr>`);
// }, "");

// console.log(html_map);

/**  sort --- sắp xếp tăng dần
 * ----- sắp xếp theo giá
 */

let renderTblProduct = () => {
  let html_map = product.reduce((innerHTML, item, index) => {
    return (
      innerHTML +
      `<tr class ="item_${index}">
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.productTypeId}</td>           
                        </tr>`
    );
  }, "");
  document.querySelector("#tblMap").innerHTML = html_map;
};

renderTblProduct();

document.querySelector("#sapXepTheoGia").onclick = function () {
  // let arrSortGia = product.sort((itemKeTiep, item)=>{

  //   let giaSP = item.price;
  //   let giaSPKeTiep = itemKeTiep.price;

  //   return giaSPKeTiep - giaSP;

  // })

  // product = arrSortGia;
  product = _.sortBy(product, ["price", "name"]); // lodash
  // product.reverse();
  renderTblProduct();
};

/**
 *  Bài tập : Thông tin Nhân Viên
 */

document.querySelector("#btnXuatThongTin").onclick = function (event) {
  event.preventDefault(); // chặn cơ chế reload của browser

  let arrInput = document.querySelectorAll(" #frm input, #frm select");
  // [input, input, input, input, seclect]
  let nv = {};
  //        DOM
  for (let tagInput of arrInput) {
    // let id = tagIput.id;
    // let value = tagIput.value;
    let { id, value } = tagInput; // destructuring
    nv[id] = value;
  }
  console.log(nv);

  let html = "";
  // {maNV : 01, tenNV: 'nguyễn văn a', luongCb : 1000,...}
  for (let key in nv) {
    html += ` <tr>
                  <td>${key}</td>
                  <td>${nv[key]}</td>
            </tr>`;
  }
  document.querySelector("#tblNhanVien").innerHTML = html;
};
