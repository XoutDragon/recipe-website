import Navbar from "@/components/Navbar";

const PublicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default PublicLayout;
