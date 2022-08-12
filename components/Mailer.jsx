import emailjs from '@emailjs/browser'
import styles from './Mailer.module.css'
import swal from "sweetalert";

export const Mailer = () => {

  const mostrarAlerta = () => {
    swal({
      title: 'Gracias por tu mensaje',
      text: `Tu mensaje se ha enviado con exito`,
      icon: 'success',
      button: 'Aceptar'
    })
  }
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_yydk9mm',
        'template_6nxh1xz',
        event.target,
        'mY6I5remDMwh5Txgh')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
      <>
        <div className='div-form'>
        <form className={styles.form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name='user_name' className={styles.controls}/>
          <hr />
  
          <label>Email</label>
          <input type="email" name='user_email' className={styles.controls}/>
          <hr />
  
          <label>Mensaje</label>
          <textarea name="user_message" id="" cols="30" rows="10" className={styles.controls}></textarea>
          <hr />


          <button className={styles.botons} onClick={() => mostrarAlerta()}>Enviar</button>
        </form>
      </div>
      </>
    )
}