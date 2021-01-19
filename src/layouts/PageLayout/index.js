import Footer from "components/common/Footer";
import Header from "components/common/Header";

const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
};

export default PageLayout;
