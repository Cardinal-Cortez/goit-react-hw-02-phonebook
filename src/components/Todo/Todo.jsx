import { Number, Item, Name, ButtonDel } from "./styled";

export const Todo = ({ name, number, onDelete }) => {
 const handleDelete = () => {
    onDelete();
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
