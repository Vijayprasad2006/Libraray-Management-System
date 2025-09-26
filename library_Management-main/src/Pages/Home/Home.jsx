import Categories from "../../Components/Categories";
import Booksdata from "../../Components/Booksdata";
import hero_image from '../../assets/hero_images.png';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div>
            <section 
                id="hero_Section" 
                className="bg-bgBanner flex md:flex-row flex-col md:justify-center justify-start items-start md:items-center w-full p-5 gap-10"
            >
                <div className="w-1/2">
                    <h2 className="md:text-5xl text-4xl font-semibold font-Poppins mb-4">
                        The Ultimate Library Management Tool
                    </h2>

                    {/* ✅ Issue Book button */}
                    <a
                        href="http://127.0.0.1:5500/plibrary-main/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Issue Book
                    </a>
                </div>

                <img src={hero_image} alt="hero_image" className='w-96 h-auto' />
            </section>

            <Categories />
            <Booksdata />
            <Footer />
        </div>
    );
};

export default Home;
