function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) throw new RangeError('Количество должно быть больше 0');
  if (!cart) return [];

  const productInCart = cart.find(item => item.id === product.id);

  const updateQuantity = productInCart && productInCart.quantity ? productInCart.quantity + quantity : quantity;
  if (updateQuantity > product.stock) throw new RangeError('Нельзя добавить товара больше, чем есть на складе');

  if (productInCart) {
    cart.forEach(item => {
      if(item.id === product.id) {
        item.quantity = updateQuantity;
      }
    })
    return cart;
  }

  return [...cart, {...product, quantity: updateQuantity}];
}

function changeQuantity(cart, id, quantity) {
  if (quantity <= 0) throw new RangeError('Количество должно быть положительное');
  const product = cart.find(item => item.id === id);
  if (!product) return cart;
  if (product.stock < quantity) throw new RangeError('Количество не может быть больше остатка на складе');
  product.quantity = quantity
  return cart;
}

function removeFromCart(cart, id) {
  const includeProduct = cart.find(el => el.id === id);
  return includeProduct ? cart.filter(el => el.id !== id) : cart;
}

function calculateCartSubtotal(cart) {
  if (!cart || cart.length === 0) return 0;
  return cart.reduce((sum, item) => { return sum + item.price * item.quantity}, 0);
}

function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);
  const delivery = subtotal < 50000 ? 30000 : 0; 
  const discount = promo === 'SAVE10' && subtotal > 20000 ? subtotal* 0.1 : 0;
  const total = subtotal - discount + delivery;
  return { subtotal, discount, delivery, total};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
