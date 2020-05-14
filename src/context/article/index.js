import { useContext } from 'react'
import AppContext from "../app"

const UseArticle = () => {

    const [appStorage, setStorage] = useContext(AppContext)

    const updateArticle = (article) => {
        window.localStorage.setItem('myArticle', JSON.stringify(article) );
        setStorage(
            (prevState) => (
                { ...prevState, article }
            )
        )
    }
    return {
        article: appStorage.article,
        updateArticle,
    }
}

export default UseArticle