import { useRouter } from 'next/router';

const About = () => {
    const { push, query } = useRouter();

    const buttonHandler = () =>
        push({ query: { ...query, newParam: 'someValue' } }, undefined, { shallow: true });

    return (
        <button onClick={buttonHandler}>Klicka här!</button>
    )

}
export default About;