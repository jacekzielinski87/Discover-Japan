import styles from "./Homepage.module.css";


function Homepage() {
    return (
        <main className={styles.homepage}>
        <section>
            <h1>Odkryj Japonię.
                <br/>
            Dowiedz się wielu ciekawych informacji <br/>
            o najważniejszych miejscach w tym kraju.
            </h1>
            <h2>Odkryj kulturę, wierzenia oraz folklor kraju kwitnącej wiśni.</h2>
            <button>Zacznij odkrywać 🔴 </button>
        </section>
        </main>
    )
}

export default Homepage
