import React from 'react'
import Board from './components/Board';
import './Minesweeper.css';

export default function Minesweeper() {
    return (
        <div className='game-minesweeper'>
            <h1 className='title-minesweeper'>Démineur</h1>
            <Board />
        </div>
    );
}
