import classes from '../layout/Layout.module.css';
import MainNavigation from "../layout/MainNavigation";

function Layout(props){
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;