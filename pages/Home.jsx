import { UserPreview } from '../cmps/UserPreview.jsx'
import { AnimalList } from '../cmps/animalList.jsx'
// import { CountDown } from '../cmps/countDown.jsx'
import { WatcherApp } from '../cmps/watcherApp.jsx'
import { SeasonClock } from '../cmps/seasenClock.jsx'

export function Home() {
    return (
        <section>
            <h2>Home Sweet Home</h2>
            {/* <UserPreview /> */}
            {/* <AnimalList/> */}
            {/* <CountDown/> */}
            {/* <WatcherApp/> */}
            <SeasonClock/>
        </section>
    )
}

