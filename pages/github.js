import Layout from "../components/Layout";
import Image from "next/image";
import Error from './_error'
import styles from '../styles/github.module.css'

const Github = ({ data, statusCode }) => {

    if(statusCode) {
        return <Error  />
    }
    
    return(
        <Layout 
            title='Github' 
            description='Mi pagina de github con todos mis proyectos personales'
            footer={true}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className={styles.container}>
                        <div className="card card-body bg-dark text-light">
                            <h1>{data.name}</h1>
                            <Image
                            alt='yo'
                            src={data.avatar_url}
                            width={300}
                            height={280}
                            >
                            </Image>
                            <p>{data.bio}</p>
                            <a href={data.html_url} target='__blank' className='btn btn-light my-2' >Ir a mi Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/JohanLeon0914')
    const data = await res.json()

    const statusCode = res.status > 200 ? res.status : false



    return {
        props: {
          data,
          statusCode
        }
    }
}

export default Github