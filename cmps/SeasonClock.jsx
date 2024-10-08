const { useState, useEffect, useRef } = React


export function SeasonClock() {

    const [timer, setTimer] = useState(0)
    const [isDark, setIsDark] = useState(false)
    const intervalIdRef = useRef()


    const getSeason = () => {
        const month = new Date().getMonth()
        if (month >= 2 && month <= 4) return 'Spring'
        if (month >= 5 && month <= 7) return 'Summer'
        if (month >= 8 && month <= 10) return 'Autumn'
        return 'Winter'
    }

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
            // setTimer(timer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [])

    const getMonthName = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ]
        return months[new Date().getMonth()]
    }



    function onToggleDark() {
        setIsDark(isDark => !isDark)
    }
    const darkClass = isDark ? 'dark' : ''
    const season = getSeason()
    const month = getMonthName()

    return (
        <section className={`season-clock season ${season} ${darkClass}`}>
            <h2> {season}</h2>
            <img onClick={onToggleDark} className="dark" src={`assets/img/season-imgs/${season}.png`} alt={season} />
            <h2> {month}</h2>
            <p>
                <span>{timer}</span>
            </p>
        </section>

    )

}






