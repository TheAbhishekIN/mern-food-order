import Header from "@/components/Header";
import Hero from "../Hero"
import Footer from "@/components/Footer";

type Props = {
    childern: React.ReactNode;
}

const Layout = ({ childern }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto flex-1 py-10">{childern}</div>
            <Footer />
        </div>
    )
}

export default Layout;