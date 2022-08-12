import React from 'react'
import Image from 'next/image'
import styles from '../styles/Proyectos.module.css'
import Link from 'next/link'

const Proyectos = ({title, descripcion, image, url}) => {
  return (
    <div className='col-md-4 p-2' >
      <div className={styles.card}>
      <Link href={url}>
        <a className={styles.a} target='__blank'>
        <div className='card h-200'>
          <Image className='cardimgtop'
                src={`/img/${image}`}
                alt={title}
                width={450}
                height={450}
                >
          </Image>
                <div className='card-body'>
                <h3>{title}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
        </a>
        </Link>
        </div>
    </div>
  )
}

export default Proyectos
