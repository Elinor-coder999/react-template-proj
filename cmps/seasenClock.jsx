const { useState, useEffect, useRef } = React

export function SeasonClock() {
    const [realTime, setRealTime] = useState(new Date())  // Real-time clock
    const [customTime, setCustomTime] = useState(new Date()) // Custom time logic
    const [secondsElapsed, setSecondsElapsed] = useState(0) 
    const [isDark, setIsDark] = useState(false)
    const intervalIdRef = useRef()

    const getSeason = (month) => {
        if (month >= 2 && month <= 4) return 'Spring'
        if (month >= 5 && month <= 7) return 'Summer'
        if (month >= 8 && month <= 10) return 'Autumn'
        return 'Winter'
    }

    useEffect(() => {
        const realTimeInterval = setInterval(() => {
            //* Update real-time
            setRealTime(new Date())  
        }, 1000)

        //* Set interval for time updates (day/month) for changes
        intervalIdRef.current = setInterval(() => {
            setSecondsElapsed((prevSeconds) => {
                const newSeconds = prevSeconds + 1

                const updatedCustomTime = new Date(customTime)

                //* After 10 seconds, the day
                if (newSeconds % 10 === 0) {
                    updatedCustomTime.setDate(updatedCustomTime.getDate() + 1)
                }

                //* After 15 seconds, the month
                if (newSeconds % 15 === 0) {
                    updatedCustomTime.setMonth(updatedCustomTime.getMonth() + 1)
                }
//* Update time
                setCustomTime(updatedCustomTime)  

                return newSeconds
            })
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)  
            clearInterval(realTimeInterval)  
        }
    }, [customTime])

    const getMonthName = (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December',
        ]
        return months[monthIndex]
    }

    const getDayName = (dayIndex) => {
        const days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        ]
        return days[dayIndex]
    }

    function onToggleDark() {
        setIsDark((isDark) => !isDark)
    }

    const darkClass = isDark ? 'dark' : ''
    const season = getSeason(customTime.getMonth())
    const month = getMonthName(customTime.getMonth())
    const day = getDayName(customTime.getDay())

    //* real time
    const formattedRealTime = realTime.toLocaleTimeString() 

    return (
        <section className={`season-clock season ${season} ${darkClass}`}>
            <h2>{season}</h2>
            <img
                onClick={onToggleDark}
                className="dark"
                src={`img/${season}.png`}
                alt={season}
                style={{ cursor: 'pointer' }}
            />
            <h2>{month}</h2>
            <h3>{day}</h3>
            <p>{formattedRealTime}</p>  
        </section>
    )
}
