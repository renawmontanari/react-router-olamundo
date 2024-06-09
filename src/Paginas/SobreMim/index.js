import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Renan!
            </h3>

            <img 
                src={fotoSobreMim}
                alt='Foto Renan'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Com habilidades abrangentes em desenvolvimento front-end, 
                design de interface e experiência do usuário, ofereço soluções completas e eficientes.
            </p> 
            <p className={styles.paragrafo}>
                Trabalhando como freelancer, melhorei minhas habilidades de gerenciamento de projetos 
                e comunicação. Sempre buscando novos conhecimentos, também estou me aprofundando em 
                desenvolvimento back-end para oferecer soluções mais completas. 
            </p>
            <p className={styles.paragrafo}>    
                Minha paixão pelo design e usabilidade, aplicada aos projetos de desenvolvimento, 
                me tornou um profissional altamente qualificado.
            </p>
        </PostModelo>
    )
}