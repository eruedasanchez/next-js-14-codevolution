import Link from "next/link";

export const metadata = {
    title: 'About Hello-World'
}

const About = () => {
    return (
        <>
            <h1>About page</h1>
            <Link href="/">Home</Link>
        </>
    ) 
}

export default About;