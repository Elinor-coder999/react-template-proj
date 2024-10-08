import { Home } from "./pages/Home.jsx"

import { AnimalList } from "./cmps/animalList.jsx"

export function App() {
    return (
        <section className="app">
            <header className="app-header main-layout">
                <h1>My App</h1>
            </header>
            <main className="main-layout">
                <Home />
                {/* <AnimalList/> */}
            </main>
        </section>
    )
}