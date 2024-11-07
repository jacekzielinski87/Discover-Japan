import City from "/public/Cityy.jpg";
import Place from "/public/Placee.jpg";
import Folklore from "/public/Folkloree.jpg";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <div className={styles.AppLayout}>
            <button>Cities</button>
            <img src={City} alt="City" />
            <button>Places</button>
            <img src={Place} alt="Place" /> 
            <button>Folklore</button>
            <img src={Folklore} alt="Folklore" />
        </div>
    );  
}

export default AppLayout;  
