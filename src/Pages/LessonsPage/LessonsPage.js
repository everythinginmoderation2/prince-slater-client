import React from 'react'
import './LessonsPage.css'
import '../Misc/Scrollbar.css'
import '../ReponsiveDesigns/Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import BookNow from '../../Components/Buttons/BookNow.js'
import Lessons from '../../Components/Lessons/Lessons.js'


const LessonsPage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
               <Lessons />
            </body>
            <footer>
                <HomeButton />
                <BookNow />
            </footer>
        </div>
    )
}

export default LessonsPage

