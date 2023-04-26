import styles from "../styles/Auth.module.css";
export default function Auth(){
    return(
        <main>
            <form className={styles.authForm}>
                <h1>Auth page</h1>
                <input type = "text" placeholder="login"/>
                <input type = "password" placeholder="password"/>
            </form>
        </main>
    )
}