import React from 'react'
import '../ServicePages.css'
import '../Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Lessons from '../../Components/Lessons/Lessons.js'


const LessonsPage = () => {
    return (
        <div>
            <main id="body" className='body-welcome'>
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

