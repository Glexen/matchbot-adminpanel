import settingsStyle from '../styles/Settings.module.css'
import symbolsStyle from '../styles/Symbols.module.css'
export default function Settings (){
    return (
        <main>
            <form className={settingsStyle.form}>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField}>Bot token:</p>
                    <input type='text' placeholder="Paste bot token"/>
                </span>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField}>Hello message:</p>
                    <textarea placeholder="Write hello message"></textarea>

                </span>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField}>Language:</p>
                    <select>
                        <option>English</option>
                    </select>
                    <p className={symbolsStyle.symbolPlus}>􀅼</p>
                    <p className={symbolsStyle.symbolDelete}>􀈑</p>
                </span>
                <div className={settingsStyle.extraSettings}>
                    <div className={settingsStyle.emojiesDiv}>
                        <h2>Emojies:</h2>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Like:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Dislike:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Like + Message:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Report:</p>
                            <input type='text'/>
                        </span>
                    </div>
                    <div className={settingsStyle.buttonsDiv}>
                        <h2>Buttons:</h2>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Account settings:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Menu:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Back:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Start search:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Edit form:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Restart form:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Edit form field:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Activate account:</p>
                            <input type='text'/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Deactivate account:</p>
                            <input type='text'/>
                        </span>
                    </div>
                </div>
            </form>

        </main>
    )
}