import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: 'Mother Board',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW90aGVyYm9hcmR8ZW58MHx8MHx8&w=1000&q=80',
    button: {
      text: 'Select this part',
      buttonColor: 'bg-teal-500'
    }
  },
  {
    id: 2,
    title: 'Processor',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
    image:
      'https://images.unsplash.com/photo-1540829917886-91ab031b1764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    button: {
      text: 'Select this part',
      buttonColor: 'bg-teal-500'
    }
  },
  {
    id: 3,
    title: 'Graphical Processing Unit',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
    image:
      'https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    button: {
      text: 'Select this part',
      buttonColor: 'bg-teal-500'
    }
  },
  {
    id: 4,
    title: 'Random Access Memory',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
    image:
      'https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
    button: {
      text: 'Select this part',
      buttonColor: 'bg-teal-500'
    }
  },
  {
    id: 5,
    title: 'Solid State Drive',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
    image:
      'https://static6.depositphotos.com/1000128/541/i/600/depositphotos_5418702-stock-photo-128gb-solid-state-drive-ssd.jpg',
    button: {
      text: 'Select this part',
      buttonColor: 'bg-teal-500'
    }
  }
];

function SelectParts() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/assembly-page');
  }
  return (
    <main className="w-full h-screen flex flex-col mt-20 items-center">
      <h1 className="text-4xl font-semibold mb-10 text-purple-800">
        Select Parts of CPU to build your own!
      </h1>
      <section className="w-full flex items-center gap-8 overflow-x-auto flex-nowrap py-10">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 mt-10 px-3 py-1 rounded-sm text-white"
        >
          Assembly Page
        </button>
      </div>
    </main>
  );
}

export default SelectParts;
