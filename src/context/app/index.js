import React, { useState, useEffect } from "react"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [appStorage, setStorage] = useState(
        {
            article: {},
            user: {},
        }
    )

    useEffect(() => {
        const myArticle = window.localStorage.getItem('myArticle');
        console.log(myArticle)
        if (myArticle) {
            setStorage((prevState) => ({
                ...prevState,
                article: window.JSON.parse(myArticle)
            }))
        }
    }, [])

    return (
        <AppContext.Provider value={[appStorage, setStorage]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
export { AppProvider }