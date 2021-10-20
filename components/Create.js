import { useState } from 'react';

function Create({ add }) {
  const [isContact, setContact] = useState({
    title: '',
    quotes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    add(isContact);
    setContact({
      title: '',
      quotes: '',
    });
  };

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
      </div>
    </div>
  );
}

export default Create;
