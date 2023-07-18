function Product(name, price, quantity, sale = 0) {
  this.productName = String(name);
  this.productPrice = Number(price);
  this.productQuantity = Number(quantity);
  this.productSale = Number(sale);
}
function ProductPrototype() {
  this.showinfo = function () {
    return `
    |Загальна інформація|
    Товар: ${this.productName}
    Ціна: ${this.productPrice} UAH
    Наявна кількість: ${this.productQuantity} шт.
    Знижка: ${this.productSale} %`;
  };
  this.getSalePrice = function () {
    return (this.productPrice / 100) * (100 - this.productSale);
  };
  this.setSaleToPrice = function () {
    if (this.productSale !== 0) {
      return `Акційна ціна - ${this.getSalePrice()} UAH`;
    }
    return "Знижка відсутня";
  };
  this.buyAmountProduct = function () {
    if (this.productSale !== 0 && this.productQuantity >= 300) { // нехай 300 - достатня кількість для відвантаження
      return `Варітсть товару на складі:
      без знижки - ${this.productPrice * this.productQuantity} UAH
      зі знижкою - ${this.getSalePrice() * this.productQuantity} UAH`;
    } if (this.productQuantity >= 300){
      return `Варітсть товару на складі: ${this.productPrice * this.productQuantity} UAH`;
    }
    return null;
  };
}
Product.prototype = new ProductPrototype();

const appleGold = new Product("Яблуко Голд", 7, 12000, 30);
console.log(appleGold.showinfo());
console.log(appleGold.setSaleToPrice());
console.log(appleGold.buyAmountProduct());
const pearStandart = new Product("Груша Звичайна", 9.5, 8000, 10);
console.log(pearStandart.showinfo());
console.log(pearStandart.setSaleToPrice());
console.log(pearStandart.buyAmountProduct());
const mangoStandart = new Product("Манго Звичайне", 85, 4000);
console.log(mangoStandart.showinfo());
console.log(mangoStandart.setSaleToPrice());
console.log(mangoStandart.buyAmountProduct());
const kiwiNewZeland = new Product("Ківі Нова Зеландія", 75, 250, 20);
console.log(kiwiNewZeland.showinfo());
console.log(kiwiNewZeland.setSaleToPrice());
console.log(kiwiNewZeland.buyAmountProduct());