import {useEffect, useState} from "react";

const useMountTransition = (isMounted, unmountedDelay) => {
    const [isTransiting, setIsTransiting] = useState(false);

    useEffect(() => {
        let timeouting;
        if (isMounted && !isTransiting) {
            setIsTransiting(true)
        } else if (isTransiting && !isMounted) {
            timeouting = setTimeout(() => setIsTransiting(false), [unmountedDelay])
        }

        return () => {
            clearTimeout(timeouting)
        }
    }, [unmountedDelay, isMounted, isTransiting])

    return isTransiting
}

export default useMountTransition