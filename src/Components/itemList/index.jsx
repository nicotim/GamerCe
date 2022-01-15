import Item from "../item";

export const ItemList = ({items}) => {
    return (
    <>
    {items.map((item) => {return <Item item={item} key={item.id}/>})}
    </> )
};