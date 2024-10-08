const { useState, useEffect } = React

export function CountDown({ startFrom, onDone }) {
    const [seconds, setSeconds] = useState(startFrom)
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        let interval
        if (isActive && seconds > 0)  {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1)
            }, 100)
        }

        if (seconds === 0) {
            setIsActive(false)
            onDone() 
        } //* stop at 0 sec

        //* run
        return () => clearInterval(interval)
    },  [isActive, seconds, onDone])

    const onHandleStop = () => {
        setIsActive(false)

    }

    //* on 6 sec the num become red
    function getCountClass() {
       if (seconds <= 6) return 'red'
        return ''
    }

    // console.log(seconds)
    

    const countClass = getCountClass()
    return (
        <div>
            <section className={`count-container ${countClass}`}>
                <p>{seconds} seconds have passed</p>
                <button  onClick={onHandleStop} disabled={!isActive}>
                    Stop timer
                </button>
            </section>
        </div>
    )
}




