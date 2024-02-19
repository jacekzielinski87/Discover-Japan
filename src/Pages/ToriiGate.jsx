import styles from "./ToriiGate.module.css";

function ToriiGate() {
  return (
    <div className={styles.ToriiGate}>
      <div>Image</div>
      <img src="./Toriigate.jpg"></img>
      <div>
        <h1>Brama Torii</h1>
        <p>
          Jest to symbloczina brama o charakterystycznym kształcie, prowadząca
          do świętego obszaru chramów i miejsc świętych shinto (w <i>shitno</i>{" "}
          ptaki są uważane za posłańców <i>kami</i>, czyli bogów i bóstw).
          <br />
          Chramy mogą mieć jedną lub więcej torii.Największa z nich nazwya się
          `pierwszą torii` (ichi-no-torii) i stoi przy wejściu na teren chramu.
          <br />
          Mogą być ustawione w różnych punktach, aby wskazywać poziom świętości
          w zbliżaniu się do głównego pawilonu (honden).
        </p>
        <h2>Opis</h2>
        <p>
          Torii jest powszechnie rozpoznawalnym elementem architektury
          japońskiej.
          <br />
          Najczęściej stosowanymi materiałami budowlanymi są drewno oraz kamień,
          ale nie ma szczególnych ograniczeń w tej kwestii
          <br />
          Jest to konstrukcja, której podstawowy kształt tworzą dwa słupy
          złączone u góry dwiema poprzecznymi belkami.
          <br />
          Pomimo iż, prawie każda torii jest unikalna i ma swoje własne cechy,
          to ogólnie można je podzielić na dwa podstawowe typy.
          <br />
          Pierwszym typem jest <i>shinmei-torii</i>, który charakteryzuje się
          prostymi belkami.Drugim <i>myojin-torii</i> z wtgiętymi końcami belek
          poprzecznych.
          <br />
          <br />
          Torii symbolizuje przejście od <strong>"świata skończonego"</strong> -
          fizycznego świata ziemskiego, którego końcem jest śmierć,
          do <strong>"świata nieskończonego"</strong>, będącego światem{" "}
          <i>kami</i> (bogów).
          <br />
          Torii jest stawiane tam, gdzie może mieszkać <i>kami</i>, a więc nie
          są rzadkością torii stojące w sodzie, na przybrzeżnych skałach lub
          przydomowym ogrodzie - miejscach szczególnych dla <i>shinto</i>.
          Największa brama torii znajduje się w <strong>chramie itsukushima</strong> na wyspie <strong>Miyajima</strong> i osiąga wysokość 16 metrów.

          <h2>Legenda</h2>
          <p>Istnieje wiele teorii na temat pochodzenia bramy, jak i słowa <i>torii</i> (co dosłownie oznacza <strong>ptaki</strong>)<br/>
          Warto zaznaczyć, iż żadna z tych teorii nie uzyskała formalnej akceptacji, więc wszystko zostaje w sferze domysłów oraz podań.<br/>
          Najczęściej za wyjaśnienie służy mit o <i>Ama-no-iwato (<strong>"Brama Niebiańskiej Jaskini Skalnej")</strong></i><br/>
          <strong>Amaterasu</strong>, najważniejsza bogini <i>shinto</i> i przodek rodziny cesarskiej, obraziła się na swego brata <strong>Susanoo</strong> i ukryła się w jaskini.<br/>
          Ponieważ jest boginią słońca świat pogrążył się w całkowitej ciemności.Aby wybawić ją z jaskini, inni bogowie próbowali wielu sposobów.<br/>
          Zorganizowali także głośną imprezę taneczną, ale ponieważ nie przyniosło to skutku, ustawiono na żerdzi przed jaskinią koguta.<br/>
          Zmuszono go następnie do piania, aby <strong>Amaterasu</strong> myślała, że nadchodzi świt bez jej udziału.<br/>
          Pomysł zdał egazmin:bogini wyszła na zewnątrz, jaskinię zamknięto za nią, a śiat odzyskał światło.
          </p>
        </p>
      </div>
    </div>
  );
}

export default ToriiGate;
