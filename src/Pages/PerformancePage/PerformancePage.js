import React from 'react'
import './PerformancePage.css'
import '../Misc/Scrollbar.css'
import '../ReponsiveDesigns/Max700.css'
import HomeButton from '../../Components/Buttons/HomeButton.js'
import ContactNow from '../../Components/Buttons/ContactNow.js'
import Performance from '../../Components/Performance/Performance'


const PerformancePage = () => {
    return (
        <div className='root'>
            <body className='body-welcome'>
               <Performance />
            </body>
            <footer>
                <HomeButton />
                <ContactNow />
            </footer>
        </div>
    )
}

export default PerformancePage

