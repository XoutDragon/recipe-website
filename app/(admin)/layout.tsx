import { Metadata } from "next";

import { AdminNavbar } from "./(routes)/_components/Navbar";

export const metadata: Metadata = {
    title: "Dashboard | My Earth Kitchen",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AdminNavbar />
            <div>{children}</div>
        </>
    );
};

export default MainLayout;
