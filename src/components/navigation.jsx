import { Link } from "react-router-dom"

const links = [
    {
    to: '/',
    label: "Home Page"
    },
    {
        to: '/feed',
        label: "Feed"
    },
    {
        to: '/contacts',
        label: "Contacts"
    },
    {
        to: '/images',
        label: "Images"
    },

]

export const Navigation = ()=>{
    return (
    <nav className = "navigation">
        <ul className="navigation__item">
        {links.map(link=>{
            return(
            <li key={link.to}>
                <Link to ={link.to}>{link.label}</Link>
            </li>
            )
        })}
        </ul>
    </nav>)
}