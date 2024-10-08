
const { useState, useEffect } = React

import { utilService } from '../services/util.service.js'
import { storageService } from '../services/async-storage.service.js' 

const CAR_KEY = 'watchers'

export function WatcherApp() {
    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)


    useEffect(() => {
        const fetchWatchers = () => {
            storageService.query(CAR_KEY)
                .then(savedWatchers => {
                    setWatchers(savedWatchers || {}) //* []
                })
                .catch(err => {
                    console.error('Failed to fetch watchers:', err)
                })
        }
        fetchWatchers()
    }, [])

    //& add another Watcher
    const onAddWatcher = () => {
        const fullName = prompt("Enter the full name of the watcher:")
        if (fullName) {
            const newWatcher = {
                id: utilService.makeId(),
                fullName,
                movies: [] //* not sure
            }
            const updatedWatchers = [...watchers, newWatcher]
            setWatchers(updatedWatchers)
            utilService.saveToStorage(CAR_KEY, updatedWatchers)
            //* Save to localStorage
        }
    }

    //* remove
    const onRemoveWatcher = (id) => {
        const updatedWatchers = watchers.filter(watcher => watcher.id !== id)
        setWatchers(updatedWatchers)
        utilService.saveToStorage(CAR_KEY, updatedWatchers)
        //* Save to localStorage
    }

    const onSelectWatcher = (watcher) => {
        setSelectedWatcher(watcher) 
    }

    const onCloseModal = () => {
        setSelectedWatcher(null)
    }

if(!watchers || watchers.length === 0 ) return 'no watchers to show '

console.log(watchers);

    return (
        <section className="watcher-app">
            <header>
                <h1>Watcher list</h1>
                <button onClick={onAddWatcher}>Add Watcher</button>
            </header>
            <ul>
                {watchers && watchers.map(watcher => (
                    <li key={watcher.id}>
                        <span onClick={() => onSelectWatcher(watcher)}>{watcher.fullName}</span>
                        <button onClick={() => onRemoveWatcher(watcher.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            {selectedWatcher && (
                <section className="modal">
                    <h1>working?</h1>
                    <h2>{selectedWatcher.fullName}</h2>
                    <p>Movies: {selectedWatcher.movies.join('') || 'No movies '}</p>
                    <button onClick={onCloseModal}>Close</button>
                </section>
            )}
        </section>
    )
}


