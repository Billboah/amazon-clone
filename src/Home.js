import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          key="1"
          title="
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray. B08N5N6RSS"
          price={1399.99}
          rating={5}
          image="https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFhbjllaUJ4cEwuX0FDX1NMMTUwMF8uanBn.jpg"
        />
        <Product
          id="2"
          key="2"
          title="Dell XPS 15 7590 Laptop 15.6 inch, FHD InfinityEdge, 9th Gen Intel Core i7-9750H, NVIDIA GeForce GTX 1650 GDDR5, 512GB SSD, 8GB RAM."
          price={1699.99}
          rating={5}
          image="https://www.ubuy.com.gh/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFXZ0wzSWJOSUwuX0FDX1NMMTUwMF8uanBn.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          key="3"
          title="Apple iPhone SE (3rd Generation) 128GB Midnight (T-Mobile) MMX83LL/A  "
          price={499.99}
          rating={4}
          image="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled5357.png"
        />
        <Product
          id="4"
          key="4"
          title="
          Yaoota!
          DesubClassic Men Shirt-nice Men's Multi Colored Shirt price "
          price={59.96}
          rating={4}
          image="https://images.yaoota.com/Kahbrh0446_-8v28fWj73akELJU=/trim/yaootaweb-production-ng/media/crawledproductimages/256b2b915668c334545370c72fb549e15ae43daf.jpg"
        />
        <Product
          id="5"
          key="5"
          title="
          Konga
          Women's Heels | Buy Online at Affordable Prices | Konga Online Shopping"
          price={45.96}
          rating={3}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/J/165009_1574954784.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          key="6"
          title="
          Mint
          Samsung Q8C Curved QLED TV: Redefining the modern television | Mint"
          price={2599.99}
          rating={5}
          image="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/06/17/Photos/Processed/tv-kCwC--621x414@LiveMint.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
