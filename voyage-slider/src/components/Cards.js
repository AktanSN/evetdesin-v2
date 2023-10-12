import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Çalışmalarımıza Gözat!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/evetdesin1.jpg'
              text='Evlilik Teklifi Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.jpg'
              text='Tüm Özel Gün Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/evetdesin1.jpg'
              text='Dış Mekan Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.jpg'
              text='Toplantı/ Etkinlik Çekimleri
              '
              label='evetdesin'
              path='/products'
            />
            <CardItem
              src='images/evetdesin1.jpg'
              text='Marka/ İçerik Tanıtım Çekimleri
              '
              label='evetdesin'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/evetdesin1.jpg'
              text='Katolog Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.jpg'
              text='Dron Çekimleri
              '
              label='evetdesin'
              path='/products'
            />
            <CardItem
              src='images/evetdesin1.jpg'
              text='Headshot Çekimleri'
              label='evetdesin'
              path='/sign-up'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
