export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item border-bottom p-2">
      <p>
        {item.title} - {item.price * item.quantity}
      </p>
      <div className="actions">
        <button className="btn btn-sm btn-outline-primary" onClick={onDecrease}>
          -
        </button>
        <span>{item.quantity}</span>
        <button className="btn btn-sm btn-primary" onClick={onIncrease}>
          +
        </button>
      </div>
    </li>
  );
}
