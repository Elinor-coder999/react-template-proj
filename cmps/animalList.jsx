
export function AnimalList() {

   const animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]

    return (
        <section className={`animal-counter`}>
            <section className={`count-container`}>

                <table>
                    <thead>
                        <tr>
                            <th>Rate Animals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animalInfos.map((animal, idx) => (
                            <tr key={idx}>
                                <td>{animal.type}</td>
                                <td>{animal.count}</td>
                                <td>
                                    <a
                                        href={`https://www.google.com/search?q=${encodeURIComponent(animal.type)}`}
                                        target="_blank"
                                        rel="noop">
                                        Search
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

//! why i used encodeURIComponent
//^ For example, a space in the animal type
//^ (like "Malayan Tiger") would be represented as %20 in the URL. Without encoding,
//^  it could break the URL or lead to unexpected results.
//^ Preserving URL Structure: 

