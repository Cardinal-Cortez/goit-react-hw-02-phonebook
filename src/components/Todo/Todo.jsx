import { Number, Item, Name, ButtonDel } from "./styled";

export const Todo = ({ name, number }) => {
  const handleDelete = (e) => {
      const item = e.target.parentNode;
  item.parentNode.removeChild(item);
  };

  return (
    <ul>
      <Item>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <ButtonDel onClick={handleDelete}>Delete</ButtonDel>
      </Item>
    </ul>
  );
};
