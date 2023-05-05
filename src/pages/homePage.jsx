import { Portfolio } from "../components/portfolio"
import { TopBar } from "../components/topBar"
import { Footer } from "../components/footer"





export const HomePage = () =>{
    return (
        <>
        <TopBar/>
        <Portfolio/>
        <Footer className="footer" />
        </>
    )
}