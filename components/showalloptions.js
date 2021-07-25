import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function ShowAllOptions(props){
    const [content,setContent] = useState([])
    const router = useRouter()
    function goTo(obj){
        if(obj === undefined)
            return
        const target = `/${props.request}/${obj.target[obj.target.options.selectedIndex].value}`
        //window.alert(target)
        router.push(target)
    }

    async function getContent(){
        const url = process.env.NEXT_PUBLIC_ENDPOINT + props.request + '/outline.json'
        const data = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        const json = await data.json()
        console.log(content)
        setContent(json)
    }

    useEffect(()=>{
        getContent()
        // eslint-disable-next-line
    },[])
    return(
        <select onChange={goTo}>
            <option value="selected">Choose a Lesson</option>
            {content.map(data=>{
                return(
                    <option value={data.link}>{data.title} : {data.context}</option>
                )
            })}
        </select>
    )
}