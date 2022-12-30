import Layout from "../components/Layout"
import { Mailer } from "../components/Mailer"

const Blog = () => (
    <Layout 
        title='Contacto' 
        description='Mi pagina de contacto, para los que esten interesados en contactarse con migo'
        footer={true}>
        <h1 className="text-center">Contáctame</h1>
        <Mailer />
    </Layout>
)

export default Blog