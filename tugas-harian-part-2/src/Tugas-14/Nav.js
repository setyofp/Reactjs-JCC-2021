import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./ThemeContext"
const Nav = () => {
    const [theme] = useContext(ThemeContext)
    return (


        <nav className={`navbar navbar-${theme}`}>
               <ul>
                 <li>
                   <Link to="/tugas9">Tugas 9</Link>
                 </li>
                 <li>
                   <Link to="/tugas10">Tugas 10</Link>
                 </li>
                 <li>
                   <Link to="/tugas11">Tugas 11</Link>
                 </li>
                 <li>
                   <Link to="/tugas12">Tugas 12</Link>
                 </li>
                 <li>
                   <Link to="/tugas13">Tugas 13</Link>
                 </li>
                 <li>
                   <Link to="/tugas14">Tugas 14</Link>
                 </li>
                 </ul>
             </nav>
    )
}
export default Nav;