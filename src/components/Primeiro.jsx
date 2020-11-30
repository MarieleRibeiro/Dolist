import React from 'react'
import { AiOutlinePlus, AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';

import calender from '../Icons/Vector.png';
import dell from '../Icons/red.png';
import shortcuts from '../Icons/Shortcuts.png';

function App() {
    return (
        <div className="container">
            <header>
                <p>Created by <input type="text"></input></p>

                <h1>Keep productivity with DoList </h1>
                <h2>Tasks</h2>
                <button><img src={shortcuts} /></button>
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
                <div
                ><span> <img src={calender}></img></span>
                    <button > <img src={dell}></img></button>
                </div>

            </div>


        </div>

    )
}

export default App;