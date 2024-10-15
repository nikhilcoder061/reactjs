import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

function Website() {

    return (
        <>
            <Header />
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />

        </>
    )
}

export default Website;
// export { Website };