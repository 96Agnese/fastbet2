import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import Accordion from "../Accordion/Accordion";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Funzione per determinare se lo schermo è mobile
  const checkMobileView = () => {
    setIsMobile(window.innerWidth <= 500); // Impostiamo una larghezza per il cambio, puoi usare 768 per mobile
  };

  // Usa useEffect per eseguire il controllo al primo render e quando la finestra cambia dimensione
  useEffect(() => {
    // Esegui il controllo all'inizio
    checkMobileView();

    // Aggiungi un event listener per monitorare il resize della finestra
    window.addEventListener("resize", checkMobileView);

    // Cleanup: rimuovi il listener quando il componente è smontato
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);
  return (
    <div className={styles["footer"]}>
      {isMobile ? (
        <Accordion />
      ) : (
        <div className={styles["footer__inline"]}>
          <div className={styles["footer__section"]}>
            <h3 className={styles["footer__title"]}>Fastbet</h3>
            <p className={styles["footer__subtitle"]}>Chi siamo</p>
            <p className={styles["footer__subtitle"]}>Fastbet.news</p>
            <p className={styles["footer__subtitle"]}>Fastpay.it</p>
            <p className={styles["footer__subtitle"]}>Casino</p>
            <p className={styles["footer__subtitle"]}>Casino Live</p>
          </div>
          <div className={styles["footer__section"]}>
            <h3 className={styles["footer__title"]}>Giochi</h3>
            <p className={styles["footer__subtitle"]}>Sport</p>
            <p className={styles["footer__subtitle"]}>Live</p>
            <p className={styles["footer__subtitle"]}>Slot</p>
            <p className={styles["footer__subtitle"]}>Casino</p>
            <p className={styles["footer__subtitle"]}>Casino Live</p>
            <p className={styles["footer__subtitle"]}>Poker</p>
            <p className={styles["footer__subtitle"]}>Card Game</p>
            <p className={styles["footer__subtitle"]}>Virtual</p>
            <p className={styles["footer__subtitle"]}>Ippica</p>
            <p className={styles["footer__subtitle"]}>Totocalcio</p>
            <p className={styles["footer__subtitle"]}>Bingo</p>
            <p className={styles["footer__subtitle"]}>Lotterie</p>
          </div>
          <div className={styles["footer__section"]}>
            <h3 className={styles["footer__title"]}>Regolamenti</h3>
            <p className={styles["footer__subtitle"]}>Gioco responsabile</p>
            <p className={styles["footer__subtitle"]}>Termini e Condizioni </p>
            <p className={styles["footer__subtitle"]}>Normativa</p>
            <p className={styles["footer__subtitle"]}>Privacy Policy</p>
            <p className={styles["footer__subtitle"]}>Cookie Policy</p>
            <p className={styles["footer__subtitle"]}>Gestione Cookie</p>
            <p className={styles["footer__subtitle"]}>Contratto di Gioco</p>
          </div>
          <div className={styles["footer__section"]}>
            <h3 className={styles["footer__title"]}>Assistenza</h3>
            <p className={styles["footer__subtitle"]}>Assistenza</p>
            <p className={styles["footer__subtitle"]}>FAQ</p>
            <p className={styles["footer__subtitle"]}>Regolamento scommesse</p>
            <p className={styles["footer__subtitle"]}>Bonus Scommessse</p>
          </div>
        </div>
      )}
      <div className={styles["footer__inline-payment"]}>
        <h3 className={styles["footer__method"]}>Metodi di pagamento sicuri</h3>
        <div className={styles["footer__display-payment"]}>
          <img src="/src/assets/payment-icon/visa.png" alt="" />
          <img src="/src/assets/payment-icon/visa.png" alt="" />
          <img src="/src/assets/payment-icon/visa.png" alt="" />
          <img src="/src/assets/payment-icon/visa.png" alt="" />
          <img src="/src/assets/payment-icon/visa.png" alt="" />
        </div>
      </div>
      <p className={styles["footer__policy"]}>
        ©2019 Replatz s.r.l. - Via Masaccio (al Secolo Primo Visentin) n.10 - 36028 Rossano Veneto
        (VI) - cap. soc. 80.000 euro i.v. - R.E.A. 276516 - PIVA 02806270241 - Tutti i diritti
        riservati Fastbet.it è una piattaforma di gaming online di Replatz s.r.l. e opera sul
        territorio italiano con la concessione ADM per il gioco a distanza GAD 15234. ADM - Agenzia
        Dogane Monopoli - regola il comparto del gioco pubblico in Italia: per maggiori informazioni
        consulta il sitowww.adm.gov.it
      </p>

      <p className={styles["footer__reservation"]}>
        Il gioco è vietato ai minori di 18 anni e può causare disturbi da gioco d’azzardo. Gioca con
        moderazione
      </p>
    </div>
  );
};

export default Footer;
