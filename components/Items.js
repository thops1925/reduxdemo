function Items({ key, title, quotes }) {
  return (
    <div key={key}>
      <h1>{title}</h1>
      <h1>{quotes}</h1>
      <button type="submit">Delete</button>
    </div>
  );
}

export default Items;
