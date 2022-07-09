import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-10 text-purple-800">Welcome!</h1>
      <Card
        data={{
          title: 'Computer',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, magnam libero quaerat deleniti facere nobis dolor ipsam numquam. Accusamus consectetur consequatur quasi omnis magnam!',
          image:
            'https://www.pngall.com/wp-content/uploads/11/CPU-PNG-Image-HD.png',
          button: {
            text: 'Start',
            buttonColor: 'bg-blue-700',
            onClick: () => {
              navigate('/select-parts');
            }
          }
        }}
      />
    </main>
  );
}

export default HomePage;
