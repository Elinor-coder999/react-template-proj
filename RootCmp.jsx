import { Home } from "./pages/Home.jsx"
// import { App } from "./pages/App.jsx"

import { AnimalList } from "./cmps/animalList.jsx"
import { CountDown } from '../cmps/countDown.jsx'

// export function App() {
//     return (
//         <section className="app">
//             <header className="app-header main-layout">
//                 <h1>My App</h1>
//             </header>
//             <main className="main-layout">
//                 {/* <Home /> */}
//                 {/* <App /> */}
//                 {/* <AnimalList/> */}
//             </main>
//         </section>
//     )
// }

export function App() {
    return (
        <section>
            <h1>Countdown Timer</h1>
            <CountDown startFrom={10}
             onDone={() => {
                console.log('Done!')
            }} 
            />
        </section>
    )
}
