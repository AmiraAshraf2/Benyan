import styles from "./Developers.module.css"
import { Outlet } from "react-router-dom"
export default function Developers() {
    return (
        <section className="py-4">

            <Outlet />
        </section>
    )
}