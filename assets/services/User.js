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
  // LocalStorage
  function getStorageUser() {
    if (typeof window !== 'undefined') {
      // Pega no localStorage os dados de usuario
      if (localStorage.getItem('userInfo')) {
        user.info = JSON.parse(localStorage.getItem('userInfo'));

      }
      // Pega no localStorage os itens do carrinho
      if (localStorage.getItem('cart')) {
        user.cart = JSON.parse(localStorage.getItem('cart'));

      }
    }
  }

  // User Infos functions

  // Devolve os dados do usuario
  function getUserInfo() {
    return user.info
  }

  // Coloca os dados de usuario no Objeto e localStorage
  function setUserInfo(info) {
    user.info = info
    localStorage.setItem('userInfo', JSON.stringify(user.info))
  }

  // Carrinho functions

  // Adiciona item no carrinho
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

  // Aumenta quantidade de um item no carrinho
  addQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity += 1
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  // Diminui quantidade de um item no carrinho
  removeQuantity = (id) => {
    let cartProduct = user.cart.find(item => item.id === id)
    cartProduct.quantity -= 1
    if (cartProduct.quantity === 0) {
      user.cart = user.cart.filter(item => item.id !== id)
    }
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  // Devolve os itens carrinho
  function getCart() {
    return user.cart
  }

  // Pega um produto do "X" carrinho
  function getUniqueProduct(id){
    let cartProduct = user.cart.find(item => item.id === id)
    return cartProduct
  }

  // Remove um produto do carrinho
  function removeFromCart(id) {
    user.cart = user.cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  // Limpa o carrinho
  function clearCart() {
    user.cart = []
    localStorage.setItem('cart', JSON.stringify(user.cart))
  }

  return {
    getStorageUser,

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
