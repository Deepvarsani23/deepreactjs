import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: '',
    artwork: {
      title: '',
      city: '',
      image: '',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label  className='border-4 border-black m-2 p-2'>
        Name:
        <input className='border-2 border-black m-2'
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label  className='border-4 border-black m-2 p-2'>
        Title:
        <input className='border-2 border-black m-2 '
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label className='border-4 border-black m-2 p-2'>
        City:
        <input className='border-2 border-black m-2 '
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label className="border-4 border-black m-2 p-2">
        Image:
        <input className='border-2 border-black m-2 '
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        
      />
    </>
  );
}
