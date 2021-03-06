import { useContext } from 'react'
import AppConsumer from "../app"

const UseArticle = () => {

    const [appStorage, setStorage] = useContext(AppConsumer)

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