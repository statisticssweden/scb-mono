import Link from "next/link";
import { Button } from "@scb-mono/scb-ui";

const Index = () => (
    <>
        <h1>Hej</h1>
        <p>Hej på dig</p>
        <Button variant="primary">Klicka här</Button>
        <Button variant="secondary">Klick</Button>
        <Link href="/about">About</Link>
    </>
)

export default Index;