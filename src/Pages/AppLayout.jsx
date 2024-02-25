import City from "/public/Cityy.jpg";
import Place from "/public/Placee.jpg";
import Folklore from "/public/Folkloree.jpg";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <div className={styles.AppLayout}>
            <button>Cities</button>
            <img src= {City}></img>
            <button>Places</button>
            <img src= {Place}></img>
            <button>Folklore</button>
            <img src= {Folklore}></img>
            <div>
            <p>Discover Japan Today !</p>
            </div>
        </div>
    )
}

export default AppLayout
