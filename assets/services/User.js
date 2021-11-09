function Users() {

  let user = {
    cart: [],
  }

  function getLocalStore() {
    if(typeof window !== 'undefined') {
      user.cart = JSON.parse(localStorage.getItem('cart')) || []
      console.log('localhost pego',  JSON.parse(localStorage.getItem('cart')))
    }
  }
  getLocalStore()

  function addToCart(product) {
    user.cart.push(product)
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  function getCart() {
    getLocalStore()
    return user.cart
  }



  function consoleCart() {
    console.log(user.cart)
  }

  return {
    consoleCart,
    getCart,
    addToCart,
  }
}

module.exports = Users
