import React from 'react'
import './LessonsPage.css'
import '../Misc/Scrollbar.css'
import '../ReponsiveDesigns/Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Lessons from '../../Components/Lessons/Lessons.js'


const LessonsPage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
               <Lessons />
            </body>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default LessonsPage

