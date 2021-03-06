import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const Component = props.component;

  return (
    <div className="page bg-2">
      <Header/>
      <div className="flex justify-center">
        <Component/>
      </div>
      <Footer/>
    </div>
  );
}
