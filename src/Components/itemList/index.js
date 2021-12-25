import Item from "../item";

const ItemList = ({items}) => {
    return (
    <>
    {items.map((item) => {return <Item item={item} key={item.id}/>})}
    </> )
};

export default ItemList;