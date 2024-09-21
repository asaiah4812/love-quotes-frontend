import React from 'react'


export default async function getSingleQuote({ id }: any) {
  const res = await fetch(`http://127.0.0.1:8000/api/quotes/${id}/`);
  const data = await res.json();
  return data;
}