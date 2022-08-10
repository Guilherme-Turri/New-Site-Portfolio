import React from 'react';
import styles from './Mail.module.css';
import emailjs from '@emailjs/browser';

const Mail = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6egt9yh',
        'template_ju7tmqn',
        form.current,
        'user_MIl6wwPW05GQwzARfuZM0',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('email enviado com sucesso');
        },
        (error) => {
          alert('Falha ao enviar o meil, tente novamente mais tarde!');
        },
      );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.containerForm}>
        <label>Nome:</label>
        <input type="text" name="user_name" className={styles.inputData} />
        <label>Email:</label>
        <input type="email" name="user_email" className={styles.inputData} />
        <label>Mensagem:</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" className={styles.sendBtn} />
      </div>
    </form>
  );
};

export default Mail;
