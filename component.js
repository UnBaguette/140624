function generateProduct(product) {
    if (product.tag) {
      product.tag = capitalizefirstletter(product.tag)
    }
    if (product.image) {
      product.image = "data:image/png:base64," + product.image;
    }
    product.price = changepriceformat(product.price)
    product.unit_price = capitalizefirstletter(product.unit_price);
    const markup = `<div class="product-container" id="${product.name}">
    <img class="product-image" src="${product.image}" alt="${product.name}"></img>
    <p class="discount">${product.discount ?'-$(product.discount)%' : "" }</p>
    <p class="tag">${product.tag ? product.tag : ""}</p>

    <h4 class="product-name">${product.name}</h4>
    <p class="product-description">${product_short_desc}</p>
    <h4 class="product-price">${product.unit_price} ${product.price}</h4>
    <p class="product-old-price"><del>${product.old_price ? product.old_price : ""}</del></p>
}