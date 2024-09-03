import {useState, useEffect} from 'react'

export const withLoader = (Element, url) => {
    return (props) => {
        const [data, setData] = useState(null)
        const fetchData = async (url) => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
        useEffect(() => {
            fetchData(url).then(setData)
        }, []) 

        return data ? (
            <Element {...props} data={data} />
        ) : (
            <div>
                Data is loading....
            </div>
        )
    }
}