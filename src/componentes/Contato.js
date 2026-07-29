import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "../styles/contato.scss";

export default function Contato() {
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 700,
      reset: false,
    });

    scrollReveal.reveal(".fade-up", {
      interval: 150,
    });
  }, []);

  return (
    <section id="contato">
      <h2>Contate-me</h2>
      <p className="subtitle fade-up">
        Vamos conversar? Escolha o canal mais conveniente para você.
      </p>

      <div className="contato-grid">
        {/* Contact Cards */}
        <nav className="contact-cards fade-up">
          <a
            href="mailto:jonthanrdo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Enviar e-mail para jonthanrdo@gmail.com"
          >
            <span className="card-icon">
              <FaEnvelope />
            </span>
            <span className="card-info">
              <span className="card-label">Email</span>
              <span className="card-value">jonthanrdo@gmail.com</span>
            </span>
          </a>

          <a
            href="https://wa.me/5532999155737"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Falar no WhatsApp"
          >
            <span className="card-icon">
              <FaWhatsapp />
            </span>
            <span className="card-info">
              <span className="card-label">WhatsApp</span>
              <span className="card-value">+55 32 99915-5737</span>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/jonathan-rianelli-de-oliveira-409609228/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Visitar perfil no LinkedIn"
          >
            <span className="card-icon">
              <FaLinkedinIn />
            </span>
            <span className="card-info">
              <span className="card-label">LinkedIn</span>
              <span className="card-value">Jonathan Rianelli</span>
            </span>
          </a>

          <a
            href="https://github.com/JonathanRianelli"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Visitar perfil no GitHub"
          >
            <span className="card-icon">
              <FaGithub />
            </span>
            <span className="card-info">
              <span className="card-label">GitHub</span>
              <span className="card-value">JonathanRianelli</span>
            </span>
          </a>
        </nav>

        {/* Form */}
        <form
          method="POST"
          action="https://formsubmit.co/jonthanrdo@gmail.com"
          enctype="multipart/form-data"
          className="contact-form fade-up"
        >
          <div className="input-group">
            <input
              type="text"
              name="Nome"
              id="nome"
              placeholder=" "
              required
              autoComplete="name"
            />
            <label htmlFor="nome">Nome</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="Mensagem"
              id="msg"
              rows="5"
              placeholder=" "
              required
            ></textarea>
            <label htmlFor="msg">Mensagem</label>
          </div>

          <button type="submit" className="btn-send">
            <FiSend className="btn-icon" />
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}