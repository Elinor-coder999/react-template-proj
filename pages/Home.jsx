import { UserPreview } from '../cmps/UserPreview.jsx'
import { AnimalList } from '../cmps/animalList.jsx'

export function Home() {
    return (
        <section>
            <h2>Home Sweet Home</h2>
            {/* <UserPreview /> */}
            <AnimalList/>
        </section>
    )
}
