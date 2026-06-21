import { Outlet } from "react-router-dom"
// import TopNav from './TopNav';

export default function Layout() {
    return (
        <div className="min-h-screen bg-surface">
            <main>
                <Outlet/>
            </main>
        </div>
    )
}