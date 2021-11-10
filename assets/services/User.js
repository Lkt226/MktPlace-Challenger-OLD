// Acertar esse código no futuro, pq ta muito feio, mas funciona.
// Talvez separar por actions.
const user = {
  info:{
    name: '',
    email: '',
    cpf: '',
    phone: '',
    birth: '',

    cep: '',
    address: '',
    number: '',
    complement: '',
    bairro: '',
    city: '',
    state: '',
  },
  cart: [],
}

function Users() {
  // User Infos functions
  function getUserInfo() {
    return user.info
  }

  function setUserInfo(info) {
    user.info = info
    localStorage.setItem('userInfo', JSON.stringify(user.info))
  }

  // Carrinho functions
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
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  addQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity += 1
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  removeQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity -= 1
    if (cartProduct.quantity === 0) {
      user.cart = user.cart.filter(item => item.id !== id)
    }
    localStorage.setItem('cart', JSON.stringify(user.cart))
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
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  function clearCart() {
    user.cart = []
  }

  return {
    getUserInfo,
    setUserInfo,

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
