import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../styles/contato.scss";

export default function Contato() {
  useEffect(() => {
    // Inicializa o ScrollReveal
    const scrollReveal = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 700,
      reset: false,
    });

    // Aplica a animação nos elementos com a classe 'elemento'
    scrollReveal.reveal(".", {
      interval: 150,
    });
  }, []);

  return (
    <section id="contato">
      <h2 >Contate-me</h2>
      <div>
        <nav className="fade-up">
          <i>
            <a
              href="mailto:jonthanrdo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaEnvelope />
              </span>
              jonthanrdo@gmail.com
            </a>
          </i>
          <i>
            <a
              href="https://wa.me/5532999155737"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaWhatsapp />
              </span>
              +55 32 99915-5737
            </a>
          </i>
          <i>
            <a
              href="https://www.linkedin.com/in/jonathan-rianelli-de-oliveira-409609228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedinIn />
              </span>
              Linkedin
            </a>
          </i>
          <i>
            <a
              href="https://github.com/JonathanRianelli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
              GitHub
            </a>
          </i>
        </nav>

        <form
          method="POST"
          action="https://formsubmit.co/jonthanrdo@gmail.com"
          enctype="multipart/form-data"
          className="fade-up"
        >
          <input type="text" name="Nome" placeholder="Nome" id="nome" />
          <input type="email" name="Email" placeholder="Email" id="email"  />
          <textarea
            cols="30"
            name="Mensagem"
            rows="10"
            placeholder="Mensagem"
            id="msg"
             
          ></textarea>
          <span  >
            <button type="submit">Enviar</button>
          </span>
        </form>
      </div>
    </section>
  );
}
