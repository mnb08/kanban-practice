import React from 'react'
import { Item } from '../Items'

export const Board = ({ board, boards, setCurrentItem, currentItem, setCurrentBoard, currentBoard, setBoards} ) => {

    return (
      	<div className='board'>
			<div className="board__title">{board.title}</div>
			{
				board.items.map( item => (
					<Item 
						item={item} 
						board={board} 
						boards={boards} 
						setBoards={setBoards}
						setCurrentItem={setCurrentItem} 
						currentItem={currentItem} 
						setCurrentBoard={setCurrentBoard} 
						currentBoard={currentBoard} 
					/>
				))
			}
		</div>
    )
}
