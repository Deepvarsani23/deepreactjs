import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    // firstName: ' Barbara',
    // lastName: 'Hepworth',
    // email: 'bhepworth@sculpture.com',
  });

  return (
    <>
      <label className="border-4 border-black  m-2 p-2">
        First name: 
        <input className='border-2 border-black m-2'
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label className='border-4 border-black m-2 p-2'>
        Last name:
        <input className='border-2 border-black m-2'
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label className='border-4 border-black m-2 p-2'>
        Email:
        <input className='border-2 border-black m-2'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}<br/>
        {form.email}
      </p>
    </>
  );
}
