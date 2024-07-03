import RootLayout from "../layout";

export default function BlogLayout({ children }) {
    return (
        <>
        <RootLayout>
            {children}
        </RootLayout>
        </>
    );
}