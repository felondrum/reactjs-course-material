import React from 'react';
import './App.css';
import Card from './components/Card'

const name = 'магазин'
const trash = 'мусор'
const App = () => (
    <div className='App-header'>
        <Card number={1} title={'Сходить в ' + name} attr={['red', 'small']}/>
        <Card number={2} title={`Выбросить ${trash}`}>
            <p>Сейчас!!!</p>
            <p><em>Быстро!!!</em></p>
        </Card>
    </div>
)

export default App;
