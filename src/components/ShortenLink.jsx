import React from 'react';
import styles from './ShortenLink.module.css';
import { useState } from 'react';
import LinkShorten from './LinkShorten';
function ShortenLink(){
    const [valueInput,SetValueInput]=useState("")
    const [response,setResponse]=useState(null)
    const [validResponse,setValidResponse]=useState(true)
async function makeRequest(){
      const request=await fetch(`https://api.shrtco.de/v2/shorten?url=${valueInput}`)
      const response=await request.json()
      setValidResponse(response.ok)
      console.log(response.result)
      setResponse(response.result)
  }
    return(
      <>
        <div className={styles.linkInput}>
          {/* Input Renderizado caso ocorra algum erro */}
          {!validResponse && <input className={styles.inputShortenError} type="text" placeholder="Shorten a link here..."value={valueInput} onChange={(event)=>{
              SetValueInput(event.target.value)
          }}/>}
          {/* Input Renderizado por Padrão */}
          {validResponse && <input className={styles.inputShorten} type="text" placeholder="Shorten a link here..."value={valueInput} onChange={(event)=>{
              SetValueInput(event.target.value)
          }}/>}

          <button id={styles.shortenIt} onClick={makeRequest}>Shorten It!</button>
          {!validResponse && <p className={styles.errorRequest}>Please add a link</p>}
        </div>
        {response && validResponse && 
        <div className={styles.ContainerLinks}>
        <LinkShorten originalLink={response.original_link} link={response.full_short_link}/>
        <LinkShorten originalLink={response.original_link} link={response.full_short_link2}/>
        <LinkShorten originalLink={response.original_link} link={response.full_short_link3}/>
        </div>
      }
      </>
    )
}
export default ShortenLink;