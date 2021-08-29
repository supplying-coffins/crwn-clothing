import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
