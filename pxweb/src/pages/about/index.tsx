
type MyComponentType = {
    firstname: string,
    lastname: string,
    adress: Adress
    children: React.ReactNode
}

type Adress = {
    street: string,
    postalNo: number
}

const MyComponent = ({ firstname, lastname, children }: MyComponentType) => {

}


const About = () => (
    <>
        <MyComponent
            firstname="Jonatan"
            lastname="Hallenberg"
            adress={{ street: "Storgatan", postalNo: 2 }}>
            <p>A</p>
            <p>B</p>
            <p>C</p>
        </MyComponent>
    </>
)

export default About;