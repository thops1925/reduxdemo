function Modal({ title, contact, del, id }) {
  const handleDelete = () => {
    del(id);
  };
  return (
    <div>
      <h1>{title}</h1>
      <h1>{contact}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Modal;
