const { useState, useEffect, useRef } = React

export function SeasonClock() {
    const [time, setTime] = useState(new Date()) 
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
        //* Set an interval to update the time every second
        intervalIdRef.current = setInterval(() => {
            setSecondsElapsed((seconds) => {
                const newSeconds = seconds + 1

                // setTime(new Date())

                //* time change updates
                const updatedTime = new Date(time)

                //* After 10 seconds, increment the day
                if (newSeconds % 10 === 0) {
                    updatedTime.setDate(updatedTime.getDate() + 1)
                }

                //* After 15 seconds, change month
                if (newSeconds % 15 === 0) {
                    updatedTime.setMonth(updatedTime.getMonth() + 1)
                }

                //* Update the time
                setTime(updatedTime)

                return newSeconds
            })
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [time]) 

    const getMonthName = (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December',
        ]
        return months[monthIndex]
    }

    const getDayName = (dayIndex) => {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        return days[dayIndex]
    }

    function onToggleDark() {
        setIsDark((isDark) => !isDark)
    }

    const darkClass = isDark ? 'dark' : ''
    const season = getSeason(time.getMonth())
    const month = getMonthName(time.getMonth())
    const day = getDayName(time.getDay())

    const formattedTime = time.toLocaleTimeString()

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
            <p>{formattedTime}</p>
        </section>
    )
}
