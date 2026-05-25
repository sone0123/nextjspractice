export default function Article({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <article>
            {children}
        </article>
    );
}