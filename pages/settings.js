import { headers } from '@/next.config';
import settingsStyle from '../styles/Settings.module.css'
import symbolsStyle from '../styles/Symbols.module.css'

import { useState, useEffect } from 'react';


export default function Settings (){
    const [languageProfile, setLanguageProfile] = useState(null);
    const [dataBot, setDataBot] = useState(null);
    const [botToken, setBotToken] = useState('');
    const [helloMessage, setHelloMessage] = useState('');
    const [like, setLike] = useState('');
    const [disLike, setDisLike] = useState('');
    const [report, setReport] = useState('');
    const [message, setMessage] = useState('');
    const [accountSettings, setAccountSettings] = useState('');
    const [menu, setMenu] = useState('');
    const [back, setBack] = useState('');
    const [startSearch, setStartSearch] = useState('');
    const [editForm, setEditForm] = useState('');
    const [restartForm, setRestartForm] = useState('');
    const [editFormField, setEditFormField] = useState('');
    const [activateAccount, setActivateAccount] = useState('');
    const [deactivateAccount, setDeactivateAccount] = useState('');
    const [yes, setYes] = useState('');
    const [no, setNo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => {
        fetch('http://localhost:3000/api/botSettings/get')
            .then(response => response.json())
            .then(data => {
                setDataBot(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        if (dataBot) {
            fetch('http://localhost:3000/api/languageProfile/one/1')
                .then(response => response.json())
                .then(data => {
                    setLanguageProfile(data);
                })
                .catch(error => {
                console.error('Error:', error);
                });
        }
    }, [dataBot]);
    useEffect(() => {
        if (dataBot && languageProfile){
            setBotToken(dataBot.botToken)
            setHelloMessage(languageProfile.helloMessage)
            setLike(dataBot.like)
            setDisLike(dataBot.disLike)
            setReport(dataBot.report)
            setMessage(dataBot.message)
            setAccountSettings(languageProfile.buttonNames.accountSettings)
            setMenu(languageProfile.buttonNames.menu)
            setBack(languageProfile.buttonNames.back)
            setStartSearch(languageProfile.buttonNames.startSearch)
            setEditForm(languageProfile.buttonNames.editForm)
            setRestartForm(languageProfile.buttonNames.restartForm)
            setEditFormField(languageProfile.buttonNames.editFormField)
            setActivateAccount(languageProfile.buttonNames.activateAccount)
            setDeactivateAccount(languageProfile.buttonNames.deactivateAccount)
            setYes(languageProfile.buttonNames.yes)
            setNo(languageProfile.buttonNames.no)
        }
    }, [dataBot, languageProfile]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (botToken === '') {
            setErrorMessage('Please enter bot token');
            return;
        }

        else if (helloMessage === '') {
            setErrorMessage('Please enter hello message');
            return;
        }

        else if (like === '') {
            setErrorMessage('Please enter like emoji');
            return;
        }

        else if (disLike === '') {
            setErrorMessage('Please enter dislike emoji');
            return;
        }

        else if (report === '') {
            setErrorMessage('Please enter report emoji');
            return;
        }

        else if (message === '') {
            setErrorMessage('Please enter like + message emoji');
            return;
        }

        else if (accountSettings === '') {
            setErrorMessage('Please enter name of "Account settings" button');
            return;
        }

        else if (menu === '') {
            setErrorMessage('Please enter name of "Menu" button');
            return;
        }

        else if (back === '') {
            setErrorMessage('Please enter name of "Back" button');
            return;
        }
        
        else if (startSearch === '') {
            setErrorMessage('Please enter name of "Start search" button');
            return;
        }

        else if (editForm === '') {
            setErrorMessage('Please enter name of "Edit form" button');
            return;
        }

        else if (restartForm === '') {
            setErrorMessage('Please enter name of "Restart form" button');
            return;
        }

        else if (editFormField === '') {
            setErrorMessage('Please enter name of "Edit form field" button');
            return;
        }

        else if (activateAccount === '') {
            setErrorMessage('Please enter name of "Activate account" button');
            return;
        }

        else if (deactivateAccount === '') {
            setErrorMessage('Please enter name of "Deactivate account" button');
            return;
        }

        else if (yes === '') {
            setErrorMessage('Please enter name of "Yes" button');
            return;
        }

        else if (no === '') {
            setErrorMessage('Please enter name of "No" button');
            return;
        }

        else if (accountSettings.length > 40) {
            setErrorMessage('Length of name of "Account settings" button can`t be more of 40 symbols');
            return;
        }

        else if (menu.length > 40) {
            setErrorMessage('Length of name of "Menu" button can`t be more of 40 symbols');
            return;
        }

        else if (back.length > 40) {
            setErrorMessage('Length of name of "Back" button can`t be more of 40 symbols');
            return;
        }
        
        else if (startSearch.length > 40) {
            setErrorMessage('Length of name of "Start search" button can`t be more of 40 symbols');
            return;
        }

        else if (editForm.length > 40) {
            setErrorMessage('Length of name of "Edit form" button can`t be more of 40 symbols');
            return;
        }

        else if (restartForm.length > 40) {
            setErrorMessage('Length of name of "Restart form" button can`t be more of 40 symbols');
            return;
        }

        else if (editFormField.length > 40) {
            setErrorMessage('Length of name of "Edit form field" button can`t be more of 40 symbols');
            return;
        }

        else if (activateAccount.length > 40) {
            setErrorMessage('Length of name of "Activate account" button can`t be more of 40 symbols');
            return;
        }

        else if (deactivateAccount.length > 40) {
            setErrorMessage('Length of name of "Deactivate account" button can`t be more of 40 symbols');
            return;
        }

        else if (yes.length > 40) {
            setErrorMessage('Length of name of "Yes" button can`t be more of 40 symbols');
            return;
        }

        else if (no.length > 40) {
            setErrorMessage('Length of name of "No" button can`t be more of 40 symbols');
            return;
        }

        else{
            const form = e.target;
            const formData = new FormData(form);
          
            const formDataJson = {};
            for (const [key, value] of formData.entries()) {
              formDataJson[key] = value;
            }
            setErrorMessage('')
            fetch('/api/settings', {
                method: 'POST',
                body: JSON.stringify(formDataJson),
                headers: {
                    'Content-Type': 'application/json'
                }
            })   
        }
    };

    return (
        <main>
            {dataBot && languageProfile && (
            <form onSubmit={handleSubmit} 
                className={settingsStyle.form}>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField}>Bot token:</p>
                    <input defaultValue={dataBot.botToken} 
                        type='text' 
                        name='botToken' 
                        placeholder="Paste bot token" 
                        onChange={(e) => setBotToken(e.target.value)}/>
                </span>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField} >Hello message:</p>
                    <textarea defaultValue={languageProfile.helloMessage} 
                    placeholder="Write hello message" 
                    name='helloMessage'
                    onChange={(e) => setHelloMessage(e.target.value)}></textarea>
                </span>
                <span className={settingsStyle.inputSpan}>
                    <p className = {settingsStyle.nameField}>Language:</p>
                    <select name='id'>
                        <option value={1}>English</option>
                    </select>
                    <p className={symbolsStyle.symbolPlus}>􀅼</p>
                    <p className={symbolsStyle.symbolDelete}>􀈑</p>
                </span>
                <div className={settingsStyle.extraSettings}>
                    <div className={settingsStyle.emojiesDiv}>
                        <h2>Emojies:</h2>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Like:</p>
                            <input defaultValue={dataBot.emojies.like} name='like' type='text'
                            onChange={(e) => setLike(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Dislike:</p>
                            <input defaultValue={dataBot.emojies.disLike} name='disLike' type='text'
                            onChange={(e) => setDisLike(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Like + Message:</p>
                            <input defaultValue={dataBot.emojies.message} name='message' type='text'
                            onChange={(e) => setMessage(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanEmojie}>
                            <p className = {settingsStyle.nameField}>Report:</p>
                            <input defaultValue={dataBot.emojies.report} name='report' type='text'
                            onChange={(e) => setReport(e.target.value)}/>
                        </span>
                    </div>
                    <div className={settingsStyle.buttonsDiv}>
                        <h2>Buttons:</h2>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Account settings:</p>
                            <input defaultValue={languageProfile.buttonNames.accountSettings} 
                            name='accountSettings' 
                            type='text'
                            onChange={(e) => setAccountSettings(e.target.value)}
                            />
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Menu:</p>
                            <input defaultValue={languageProfile.buttonNames.menu} 
                            name='menu' 
                            type='text'
                            onChange={(e) => setMenu(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Back:</p>
                            <input defaultValue={languageProfile.buttonNames.back} 
                            name='back' 
                            type='text'
                            onChange={(e) => setBack(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Start search:</p>
                            <input defaultValue={languageProfile.buttonNames.startSearch} 
                            name='startSearch' 
                            type='text'
                            onChange={(e) => setStartSearch(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Edit form:</p>
                            <input defaultValue={languageProfile.buttonNames.editForm} 
                            name='editForm' 
                            type='text'
                            onChange={(e) => setEditForm(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Restart form:</p>
                            <input defaultValue={languageProfile.buttonNames.restartForm} 
                            name='restartForm' 
                            type='text'
                            onChange={(e) => setRestartForm(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Edit form field:</p>
                            <input defaultValue={languageProfile.buttonNames.editFormField} 
                            name='editFormField' 
                            type='text'
                            onChange={(e) => setEditFormField(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Activate account:</p>
                            <input defaultValue={languageProfile.buttonNames.activateAccount} 
                            name='activate' 
                            type='text'
                            onChange={(e) => setActivateAccount(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Deactivate account:</p>
                            <input defaultValue={languageProfile.buttonNames.deactivateAccount} 
                            name='deactivate' 
                            ype='text'
                            onChange={(e) => setDeactivateAccount(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>Yes:</p>
                            <input defaultValue={languageProfile.buttonNames.yes} 
                            name='yes' 
                            type='text'
                            onChange={(e) => setYes(e.target.value)}/>
                        </span>
                        <span className={settingsStyle.inputSpanButton}>
                            <p className = {settingsStyle.nameField}>No:</p>
                            <input defaultValue={languageProfile.buttonNames.no} 
                            name='no' 
                            type='text'
                            onChange={(e) => setNo(e.target.value)}/>
                        </span>
                    </div>
                </div>
                {errorMessage && <p className={settingsStyle.errorText}>{errorMessage}</p>}
                <div className={settingsStyle.inputSubmitDiv}>
                    <input type="submit" value='save' />
                </div>
                
            </form>
            )}
        </main>
    )
}