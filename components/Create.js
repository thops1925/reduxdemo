import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function Create() {
  const [isContact, setContact] = useState({
    title: '',
    quotes: '',
  });
  // const listitem = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(isContact));
  };

  // console.log(listitem);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              setContact({ ...isContact, title: e.target.value })
            }
            value={isContact.title}
            name="title"
          />
          <textarea
            onChange={(e) =>
              setContact({ ...isContact, quotes: e.target.value })
            }
            value={isContact.quotes}
            name="quotes"
          />
          <button type="submit">submit</button>
        </form>
        {/* {listitem.map((item) => (
          <h1>{item.title}</h1>
        ))} */}
      </div>
    </div>
  );
}

export default Create;
