const user = {
  cart: [],
}

function Users() {
  function addToCart(product) {
    if (user.cart.length === 0) {
      user.cart.push(Object.assign({quantity:1}, product))
    }else{
      let cartProduct = user.cart.find(item => item.id === product.id)
      if (cartProduct) {
        cartProduct.quantity++
      }else{
        user.cart.push(Object.assign({quantity:1}, product))
      }
    }
  }

  addQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity += 1
  }

  removeQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity -= 1
    if (cartProduct.quantity === 0) {
      user.cart = user.cart.filter(item => item.id !== id)
    }
  }

  function getCart() {
    return user.cart
  }

  function getUniqueProduct(id){
    let cartProduct = user.cart.find(item => item.id === id)
    return cartProduct
  }

  function removeFromCart(id) {
    user.cart = user.cart.filter(item => item.id !== id)
  }

  function clearCart() {
    user.cart = []
  }

  function consoleCart() {
    console.log(user.cart)
  }

  return {
    consoleCart,
    getCart,
    addToCart,
    addQuantity,
    removeQuantity,
    getUniqueProduct,
    removeFromCart,
    clearCart
  }
}

module.exports = Users
