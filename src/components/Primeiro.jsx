import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

import calender from '../Icons/Vector.png';
import dell from '../Icons/red.png';
import shortcuts from '../Icons/Shortcuts.png';

function App() {
    return (
        <div className="container">
            <button className="Menu"><img src={shortcuts} /></button>
            <header>
                <p>Created by <input type="text" name="text"></input></p>

                <h1>Keep productivity with DoList </h1>
                <h2>Tasks</h2>
            </header>
            <div className="selectors">
                <p>To-Do</p>
                <p>All</p>
                <p>Done</p>
            </div>
            <div className="List">

                <form>
                    <input type="checkbox"
                    />
                    <label>
                        Do Homework
                        </label>
                </form>
                <div className="date"
                ><span> <img src={calender}></img></span>
                    <button > <img src={dell}></img></button>
                </div>
            </div>
            <button className="add">
                <AiOutlinePlus></AiOutlinePlus>
            </button>
        </div>
    )
}

export default App;