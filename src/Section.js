import { useContext } from "react"
import { DarkTheme } from "./DarkTheme"

const Section = () => {
    const { dark, setDark } = useContext(DarkTheme);
    return (
        <div>
            <button onClick={() => setDark(!dark)}> Dark</button>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Dicta hic accusamus aliquid quasi officiis minima illum tempora ? A, eius maiores.
        </div >
    )
}

export default Section