import Item from "../item";

const ItemList = ({items}) => {
    return (
    <>
    {items.map((item) => {return <Item key={item.id} item={item}/>})}
    </> )
};

export default ItemList;