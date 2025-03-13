import { useEffect } from "react";
import useStore from "../context/useStore";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";
import { Pagination } from 'antd';

const Home = () => {
  const { products, user, deleteProduct, editProduct, notifications, fetchProducts, currentPage, setCurrentPage } =
    useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Home page yuklandi. Products:", products); 

  return (
    <div>
      <h1>Mahsulotlar</h1>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLoggedIn={!!user} 
              onDelete={() => deleteProduct(product.id)}
              onEdit={(newName, newPrice) =>
                editProduct(product.id, newName, newPrice)
              }
            />
          ))
        ) : (
          <div className="loader"></div>
        )}
      </div>

      <div className="notifications">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notification ${notif.type}`}>
            {notif.message}
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} onChange={(page) => fetchProducts(page, true)} />
      </div>
    </div>
  );
};

export default Home;
