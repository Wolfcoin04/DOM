function Product(item,id,prix){
    this.item = item;
    this.id = id;
    this.prix =prix;
  }

  const White = new Product('/Ressources/ID00001ENVM/246398372_175616138080112_1862429416854398984_n.jpg','T-shirt original GStar Raw',2000);
const Green = new Product('/Ressources/ID00002ENVM/246607053_175616148080111_4347121807742626317_n.jpg','T-shirt original GStar Raw',2000);
const grey = new Product('img/nsk4100.jpg','nsk4100',60);
const Black = new Product('img/vsk3000elite.jpg','vsk3000',44.99)
products.forEach(prod=> listOfProducts += `
      <tr class="text-center">
        <td><img src=${prod.item} class="img-fluid img-thumbnail w-50"></td>
        <td class="w-25 align-middle">${prod.id}</td>
        <td class="w-25 align-middle">${prod.prix}€</td>
        <td class="w-25 align-middle"><button class="btn btn-info">View</button></td>
      </tr>
      `   
  )
 
document.getElementById('productList').innerHTML = listOfProducts;
