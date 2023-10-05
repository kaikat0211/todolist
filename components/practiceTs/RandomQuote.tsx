import React, { useEffect, useState } from "react";

const RandomQuote : React.FC = () => {
    const [quote, setQuote] = useState<quoteProps[] | null>([{
        _id:"",
        content:"",
        author:"",
    }
    ])
    interface quoteProps{
        _id:string;
        content:string;
        author:string;
    }
    const fetchQuote = async () => {
        const res = await fetch('https://api.quotable.io/random')
        const data = await res.json() as quoteProps
        let {_id, content, author} = data
        setQuote(prev=>([{...prev, _id: _id, content: content, author: author}]))
    }
    useEffect(()=> {
        fetchQuote()  
    },[])
    return (
        <>
            <button onClick={fetchQuote}>fetch new quote</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>author</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {!quote ? <div>Loading</div> : quote.map((v,i) => {
                        return (
                            <tr key={i}>
                                <td className="bg-info-subtle">{v._id}</td>
                                <td className="bg-success-subtle">{v.author}</td>
                                <td className="bg-warning-subtle">{v.content}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default RandomQuote