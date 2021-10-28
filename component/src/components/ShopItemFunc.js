import PropTypes from 'prop-types'
import ItemModel from '../models/ItemModel';

function ShopItemFunc( {item} ) {
    return(
        <div class="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">{item.descriptionFull}</div>
            <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.currency}{item.price}.00</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )

}

ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired
}

export default ShopItemFunc;