import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./UI/CartItem";
import { UIContext } from "../contexts/UIContext";

export default function Cart() {
  const { items, addToCart, removeFromCart } = useContext(CartContext);
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const { uiProgress, hideCart, showCheckout } = useContext(UIContext);
  return (
    <Modal open={uiProgress == "cart"}>
      <h1>Sepetiniz</h1>
      {items.length === 0 ? (
        <div className="alert alert-danger">Sepetinizde ürün bulunmamaktadır.</div>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => addToCart(item)}
              onDecrease={() => removeFromCart(item.id)}
            />
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <div className="modal-actions text-end">
          <button className="btn btn-sm btn-danger me-2" onClick={() => hideCart()}>
            Kapat
          </button>
          {items.length > 0 && (
            <button onClick={() => showCheckout()} className="btn btn-sm btn-outline-success">
              Sipariş Ver
            </button>
          )}
        </div>
        {items.length > 0 && <p className="badge text-bg-success mb-0 fs-5">Toplam: {cartTotal} ₺</p>}
      </div>
    </Modal>
  );
}
