import {
    Link,
    NavLink,
    Outlet,
    useParams,
    useSearchParams,
    useRouteError
} from 'react-router-dom'

const menu = {
    tacos: {
        name: "Tacos",
        image: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
        description: "Shell + fillings",
        price: 5.95
    },
    pizza: {
        name: "Pizza",
        image: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
        description: "Crust, sauce, cheese",
        price: 19.95
    },
    sushi: {
        name: "Sushi",
        image: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif",
        description: "Raw fish + rice",
        price: 10.95
    }
}

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/people">People</Link></p>
            <p><Link to="/menu">Menu</Link></p>
        </>
    )
}

export function About() {
    // throw new Error("about page error")
    return <h1>About</h1>
}

export function People() {
    return <h1>People</h1>
}

export function Menu() {
    return (
        <>
            <aside>
                <ul>
                    {Object.keys(menu).map(item => (
                        <li key={item}>
                            <NavLink to={item}>{menu[item].name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function Root(props) {
    const { children } = props
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/people">People</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                </ul>
            </nav>
            <main>{children || <Outlet />}</main>
        </>
    )
}

// http://localhost:5173/menu/pizza?name=value&name2=value2
export function MenuItem() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    console.log("== params:", params)
    console.log("== searchParams:", searchParams)

    const menuItem = menu[params.menuItem]

    return (
        <>
            <h2>{menuItem.name} - ${menuItem.price}</h2>
            <p>{menuItem.description}</p>
            <div>
                <img src={menuItem.image} />
            </div>
        </>
    )
}

export function Specials() {
    return <h1>Specials</h1>
}

export function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}
