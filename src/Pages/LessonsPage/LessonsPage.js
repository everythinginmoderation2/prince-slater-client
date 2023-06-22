import React from 'react'
import './LessonsPage.css'
import '../Misc/Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Lessons from '../../Components/Lessons/Lessons.js'


const LessonsPage = () => {
    return (
        <div className='root'>
            <main className='body-welcome'>
               <Lessons />
            </main>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default LessonsPage

