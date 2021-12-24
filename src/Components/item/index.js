import "../item/item.css";

const Item = ({item}) => { return (  
        <div class="card">
            <div class="card__body">
                <h1>{item.name}</h1>
                <p class="description">{item.description}</p>
                <p class="price">Precio del producto: ${item.price}</p>
                <img src={item.imgURL} alt={item.name}/>
            </div>
        </div>
)};

export default Item;