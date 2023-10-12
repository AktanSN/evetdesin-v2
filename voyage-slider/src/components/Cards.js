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
              src='images/evetdesin1.png'
              text='Evlilik Teklifi Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.png'
              text='Tüm Özel Gün Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/evetdesin1.png'
              text='Dış Mekan Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.png'
              text='Toplantı/ Etkinlik Çekimleri
              '
              label='evetdesin'
              path='/products'
            />
            <CardItem
              src='images/evetdesin1.png'
              text='Marka/ İçerik Tanıtım Çekimleri
              '
              label='evetdesin'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/evetdesin1.png'
              text='Katolog Çekimleri
              '
              label='evetdesin'
              path='/services'
            />
            <CardItem
              src='images/evetdesin1.png'
              text='Dron Çekimleri
              '
              label='evetdesin'
              path='/products'
            />
            <CardItem
              src='images/evetdesin1.png'
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
