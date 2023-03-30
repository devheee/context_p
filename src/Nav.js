import { useContext } from "react"
import { DarkTheme } from "./DarkTheme"

const Nav = () => {
    const { dark, setDark } = useContext(DarkTheme);
    return (
        <div>
            {
                dark ? 'x' : 'o'
            }
            <button onClick={() => setDark(!dark)}> O X </button>
        </div>
    )
}

export default Nav