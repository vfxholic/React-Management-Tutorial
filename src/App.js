import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/id/254/100/100',
  'name': '유승걸',
  'birthday': '930316',
  'gender': 'female',
  'job': 'engineer'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/253/100/100',
    'name': '전소현',
    'birthday': '930316',
    'gender': 'female',
    'job': 'engineer'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/252/100/100',
    'name': '유지후',
    'birthday': '930316',
    'gender': 'female',
    'job': 'engineer'
  }
]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
