import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>This is my first website!</h2>
            <h3>This is</h3>
            <h1>INCREDIBLE!</h1>
            <h3>I tried to write list!</h3>
            <ol>
                <li>I love you!</li>
                <li>However, why don't you love me?</li>
                <li>Plz love me, since I need you.</li>
                <li>At least, just be friends...</li>
                <li>I'll waiting for you, so plz come to me when you need me...</li>
            </ol>
            <Link href="/">Back to home</Link> 
        </div>
    )
}