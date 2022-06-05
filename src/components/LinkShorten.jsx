import styles from './LinkShorten.module.css';
import {useState} from 'react'
function LinkShorten(props){
    const [copyStatus,setCopyStatus]=useState(false)
    async function changeCopy(){
        await navigator.clipboard.writeText(props.link)
        setCopyStatus(true)
    }
    return (
        <div className={styles.boxLink}>
            <p>{props.originalLink}</p>
            <div className={styles.copiedLink}>
                <span className="generatedLink">{props.link}</span>
                {!copyStatus && <button className={styles.copyButton} onClick={changeCopy}>Copy</button>}
                {copyStatus && <button className={styles.copiedButton}>Copied!</button>}
            </div>
        </div>
    )
}
export default LinkShorten;