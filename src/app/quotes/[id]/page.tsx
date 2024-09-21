import getSingleQuote from '@/lib/Quote';
import React from 'react'

interface quoteProp {
  id: number;
  msg:string;
}



const Quote = async ({params}:{params:{id:string}}) => {
  const quote = await getSingleQuote(params.id) as quoteProp
  return (
    <div>{quote.msg}</div>
  )
}

export default Quote