import Navbar from "@/components/Navbar";

const MarketingLayout = ({
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

export default MarketingLayout;
