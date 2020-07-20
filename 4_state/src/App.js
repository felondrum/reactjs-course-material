import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

class App extends Component{

    state = {
        cards: [
            { number: 1, title: 'Сходить в магазин'},
            { number: 2, title: 'Выбросить мусор'},
        ],
        titlePage: 'Список карточек'
    }

    changeTitleHandler = (title) => {
        // const oldTitle = this.state.titlePage
        this.setState({
            titlePage: title
        })
    }

    render(){
        const cards = this.state.cards

        return (
         <div className='App-header'>
             <h1>{this.state.titlePage}</h1>
             <button onClick={this.changeTitleHandler.bind(this, 'List cards:')}>Нажми на меня!</button>
             <Card number={cards[0].number} title={cards[0].title} onChengeTitle={this.changeTitleHandler.bind(this, 'List cards:')}/>
             <Card number={cards[1].number} title={cards[1].title} onChengeTitle={this.changeTitleHandler.bind(this, 'List cards:')}/>
         </div>
     )
 }
}


export default App;
