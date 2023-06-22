import React from 'react'
import './PerformancePage.css'
import '../Misc/Scrollbar.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Performance from '../../Components/Performance/Performance'


const PerformancePage = () => {
    return (
        <div className='root'>
            <main className='body-welcome'>
               <Performance />
            </main>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default PerformancePage

