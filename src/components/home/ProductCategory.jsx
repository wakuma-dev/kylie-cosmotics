import React from 'react';
import Card from '../Card';
import img from '../../assets/2743a8dac90f6de3a49801a03ed5ff7f.jpg'
import img2 from '../../assets/69755e4c02a5ca6cea51d25782c7e013.jpg'
import img3 from '../../assets/1b8b0cef3111a5f2ba14204f0ea8b658.jpg'
import img4 from '../../assets/6a634fddd44ee1f1267ae9ea3ebc2727.jpg'
import img5 from '../../assets/43ec142940534118117de763d2e7f9b7.jpg'
import img6 from '../../assets/0ba85f8962f40c7a62bf2685ae015323.jpg'
export default function ProductCategory(){
    return (
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        <Card title="lips" backImage={img2} frontImage={img} />
        <Card title="face" frontImage={img4} backImage={img3} />
        <Card title="fragrance" backImage={img6} frontImage={img5} />
      </div>
    );
}