import { useSelector } from 'react-redux';
import Items from './Items';
function Modal() {
  const listitem = useSelector((state) => state.notes);

  // const handleDelete = () => {
  //   del(id);
  // };
  return (
    <div>
      {listitem.map((item) => (
        <Items key={item.id} title={item.title} quotes={item.quotes} />
      ))}
    </div>
  );
}

export default Modal;
