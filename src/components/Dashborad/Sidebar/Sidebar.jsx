import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
    const links = [
        { icon: "fa-chart-bar", title: "states", path: "/" },
        { icon: "fa-users", title: "User Management", path: "/users" },
        { icon: "fa-building", title: "Projects Management", path: "/projects" },
        { icon: "fa-building", title: "Developers Management", path: "/developers" },
        { icon: "fa-globe", title: "Website CMS", path: "/" },
        { icon: "fa-message", title: "Live Chat", path: "/" },
    ]
    return (

        <aside className={`${styles.sidebar} min-vh-100 py-4`}>
            <div className="fw-semibold px-4 mb-3 fs-4">Dashboards</div>
            {/* Links Parent */}
            <nav>
                {links.map((item, i) => (
                    <NavLink to={item.path} key={i} className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}>
                        <i className={`fa-solid ${item.icon} fs-5`}></i>
                        <span  >{item.title}</span>
                    </NavLink>
                ))}

            </nav>
        </aside>
    )
}
