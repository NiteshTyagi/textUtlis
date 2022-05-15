import { useState } from "react";

const Textarea = (props)=>{

    const [formvalue, setFormValue] = useState('');


    const handleonChange = (event) =>{
        setFormValue(event.target.value);
    }

    const handleUppercase = () =>{
        setFormValue(formvalue.toLocaleUpperCase());
        props.showAlert('Text is converted to uppercase.', 'success');
    }

    const handleLowerCase = () =>{
        setFormValue(formvalue.toLocaleLowerCase());
        props.showAlert('Text is converted to lowerCase.', 'success');
    }

    const handleCopyText = () =>{
        navigator.clipboard.writeText(formvalue);
        props.showAlert('Text is copied to clipboard.', 'success');
    }

    const handleClearText = () =>{
        setFormValue('');
        props.showAlert('Text is cleared.', 'success');
    }

    const handleRmvExSpace = () =>{
        let newText = formvalue.split(/[ ]+/);
        setFormValue(newText.join(" "));
        props.showAlert('Extra Spaces are emoved now.', 'success');
    }

    const handleRmvExLines = () =>{
        let newText = formvalue.split(/\n+/);
        setFormValue(newText.join("\n"));
        props.showAlert('Extra Lines are removed now.', 'success');
    }

    return (
        <div className="container py-5">
            <div className="form-group">
                <label htmlFor="FormControlTextarea">{props.heading}</label>
                <textarea className="form-control" id="formTextarea" onChange={handleonChange} value={formvalue} rows={props.rows}></textarea>
            </div>
            <div className="row" role="group">
                <button disabled={formvalue.length===0}  type="button" onClick={handleUppercase} className="btn btn-secondary mx-2 my-2">Convert To Uppercase</button>
                <button disabled={formvalue.length===0} type="button" onClick={handleLowerCase} className="btn btn-secondary mx-2 my-2">Convert To Lowercase</button>
                <button disabled={formvalue.length===0} type="button" onClick={handleCopyText} className="btn btn-secondary mx-2 my-2">Copy Text</button>
                <button disabled={formvalue.length===0} type="button" onClick={handleRmvExSpace} className="btn btn-secondary mx-2 my-2">Remove Extra Space</button>
                <button disabled={formvalue.length===0} type="button" onClick={handleRmvExLines} className="btn btn-secondary mx-2 my-2">Remove Blank Lines</button>
                <button disabled={formvalue.length===0} type="button" onClick={handleClearText} className="btn btn-secondary mx-2 my-2">Clear Text</button>
            </div>

            <div className='my-3'>
                <h3>Your text summary</h3>
                <p>{formvalue.split(/\s+/).filter(element => {return element.length!==0}).length} words, {formvalue.length} characters, {formvalue.split(/\n+/).filter(element => {return element.length!==0}).length} Paragraphs, {formvalue.split(".").filter(element => {return element.length!==0}).length} Sentences.</p>
                <p>{0.008 *  formvalue.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                {formvalue.length!==0?<pre>{formvalue}</pre>:<p>Nothing to preview.</p>}
                
            </div>
        </div>
    )
}


export default Textarea;