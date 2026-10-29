// // import { useState } from "react";

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// //   name: {
// //       type: String,
// //       required: true,
// //     },
// //     price: {
// //       type: Number,
// //       required: true,
// //     },
// //     description: {
// //       type: String,
// //       required: true,
// //     },
// //     category: {
// //       type: String,
// //       //   required: true,
// //     },
// //     image: {
// //       type: String,
// //       //   required: true,
// //     },
// //     variant: {
// //       type: String,
// //       //   required: true,
// //     },
// //     stock: {
// //       type: Number,
// //       //   required: true,
// //       default: 1,
// //       min: 1,
// //       max: 100,
// //     },
// //     rating: {
// //       type: Number,
// //       //   required: true,
// //     },
// //     reviews: [
// //       {
// //         user: {
// //           type: mongoose.Schema.Types.ObjectId,
// //           ref: "User",
// //           //   required: true,
// //         },
// //         comment: {
// //           type: String,
// //           //   required: true,
// //         },
// //         rating: {
// //           type: Number,
// //           //   required: true,
// //         },
// //       },
// //     ],
// //     images: [
// //       {
// //         type: String,
// //         // required: true,
// //       },
// //     ],
// //     brand: {
// //       type: String,
// //       required: true,
// //     }

// export default function AppProduct() {
//   const [productLst, setProductLst] = useState([]);
//   const [product, setProduct] = useState({
//     name: "",
//     price: null,
//     description: "",
//     stock: 0,
//     category: "",
//     variant: "",
//     brand: "",
//     // image:""
//   });

//   const loadProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/product");
//       if (res.data.status !== "success") {
//         return null;
//       }
//       console.log(res.data.data);
//       setProductLst(res.data.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/product",
//         product,
//       );
//       if (res.data.status !== "success") {
//         alert("product not added");
//         return null;
//       }

//       alert("product added successfully");
//       loadProducts();
//       setProduct({
//         name: "",
//         price: null,
//         description: "",
//         stock: 0,
//         category: "",
//         variant: "",
//         brand: "",
//       });
//     } catch (error) {
//       console.log(error.response.data);
//     }
//     console.log(product);
//   };

//   return (
//     <div>
//       <h1>Product Page</h1>
//       <p>Welcome to the product page!</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 name: e.target.value,
//               };
//             })
//           }
//           value={product.name}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 price: e.target.value,
//               };
//             })
//           }
//           value={product.price}
//         />
//         <input
//           type="text"
//           placeholder="description"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 description: e.target.value,
//               };
//             })
//           }
//           value={product.description}
//         />
//         <input
//           type="number"
//           placeholder="stock"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 stock: e.target.value,
//               };
//             })
//           }
//           value={product.stock}
//         />
//         {/* <input type="text" placeholder="category" /> */}
//         <select
//           name="category"
//           id="category"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 category: e.target.value,
//               };
//             })
//           }
//         >
//           <option value="electric">Electric</option>
//           <option value="cloth">Cloth</option>
//           <option value="food">Food</option>
//           <option value="medicin">Food</option>
//         </select>
//         {/* <input type="text" placeholder="variant" /> */}

//         <select
//           name="variant"
//           id="variant"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 variant: e.target.value,
//               };
//             })
//           }
//         >
//           <option value="yellow">Yellow</option>
//           <option value="silver">Silrver</option>
//           <option value="black">Black</option>
//           <option value="green">Green</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Brabd"
//           onChange={(e) =>
//             setProduct((pre) => {
//               return {
//                 ...pre,
//                 brand: e.target.value,
//               };
//             })
//           }
//           value={product.brand}
//         />

//         <button type="submit">Add Product</button>
//       </form>

//       <h1>Product List</h1>
//       <div>
//         {productLst?.length > 0 ? (
//           productLst.map((product) => {
//             return (
//               <li key={product._id}>
//                 <h2>name : {product.name}</h2>
//                 <h2> price : {product.price}</h2>
//                 <h2> description: {product.description}</h2>
//                 <h2>stock : {product.stock}</h2>
//                 <h2>Brand : {product.brand}</h2>
//                 <h2>category : {product.category}</h2>
//                 <h2> variant {product.variant}</h2>
//               </li>
//             );
//           })
//         ) : (
//           <p>Products not found </p>
//         )}
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useState } from "react";
import "./AppProduct.css";

export default function AppProduct() {
  const [productLst, setProductLst] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
    stock: 0,
    category: "",
    variant: "",
    brand: "",
  });

  const loadProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/product");
      if (res.data.status !== "success") {
        return null;
      }
      console.log(res.data.data);
      setProductLst(res.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/product",
        product,
      );
      if (res.data.status !== "success") {
        alert("product not added");
        return null;
      }

      alert("product added successfully");
      loadProducts();
      setProduct({
        name: "",
        price: null,
        description: "",
        stock: 0,
        category: "",
        variant: "",
        brand: "",
      });
    } catch (error) {
      console.log(error.response.data);
    }
    console.log(product);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/product/${id}`);
      if (res.data.status !== "success") {
        alert("product not deleted");
        return null;
      }
      alert("product deleted successfully");
      loadProducts();
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="product-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="brand-section">
            <div className="brand-logo">P</div>
            <div>
              <h2>ProductHub</h2>
              <span>Inventory Workspace</span>
            </div>
          </div>

          <div className="header-badge">
            <span className="online-dot"></span>
            Admin Workspace
          </div>
        </header>

        {/* Page introduction */}
        <section className="page-intro">
          <div>
            <div className="eyebrow">INVENTORY MANAGEMENT</div>
            <h1>Product Management</h1>
            <p>
              Add new products and manage your inventory from one simple
              workspace.
            </p>
          </div>

          <div className="summary-card">
            <div className="summary-icon">▦</div>
            <div>
              <span>Total Products</span>
              <strong>{productLst.length}</strong>
            </div>
          </div>
        </section>

        {/* Main content */}
        <main className="dashboard-grid">
          {/* Add Product Form */}
          <section className="form-panel">
            <div className="panel-heading">
              <div className="panel-icon">+</div>
              <div>
                <h2>Add New Product</h2>
                <p>Enter the product details below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="product-form">
              <div className="field-group">
                <label htmlFor="product-name">
                  Product Name <span>*</span>
                </label>
                <input
                  id="product-name"
                  type="text"
                  placeholder="e.g. Wireless Headphones"
                  onChange={(e) =>
                    setProduct((pre) => {
                      return {
                        ...pre,
                        name: e.target.value,
                      };
                    })
                  }
                  value={product.name}
                />
              </div>

              <div className="form-row">
                <div className="field-group">
                  <label htmlFor="product-price">
                    Price <span>*</span>
                  </label>
                  <div className="input-with-prefix">
                    <span className="input-prefix">₹</span>
                    <input
                      id="product-price"
                      type="number"
                      placeholder="0.00"
                      onChange={(e) =>
                        setProduct((pre) => {
                          return {
                            ...pre,
                            price: e.target.value,
                          };
                        })
                      }
                      value={product.price}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="product-stock">Stock Quantity</label>
                  <input
                    id="product-stock"
                    type="number"
                    placeholder="0"
                    onChange={(e) =>
                      setProduct((pre) => {
                        return {
                          ...pre,
                          stock: e.target.value,
                        };
                      })
                    }
                    value={product.stock}
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="product-description">
                  Description <span>*</span>
                </label>
                <input
                  id="product-description"
                  type="text"
                  placeholder="Briefly describe your product..."
                  onChange={(e) =>
                    setProduct((pre) => {
                      return {
                        ...pre,
                        description: e.target.value,
                      };
                    })
                  }
                  value={product.description}
                />
              </div>

              <div className="form-row">
                <div className="field-group">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={(e) =>
                      setProduct((pre) => {
                        return {
                          ...pre,
                          category: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="electric">Electric</option>
                    <option value="cloth">Cloth</option>
                    <option value="food">Food</option>
                    <option value="medicin">Medicine</option>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="variant">Variant / Color</label>
                  <select
                    name="variant"
                    id="variant"
                    onChange={(e) =>
                      setProduct((pre) => {
                        return {
                          ...pre,
                          variant: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="yellow">Yellow</option>
                    <option value="silver">Silver</option>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="product-brand">
                  Brand <span>*</span>
                </label>
                <input
                  id="product-brand"
                  type="text"
                  placeholder="e.g. Samsung, Nike, Apple"
                  onChange={(e) =>
                    setProduct((pre) => {
                      return {
                        ...pre,
                        brand: e.target.value,
                      };
                    })
                  }
                  value={product.brand}
                />
              </div>

              <div className="form-divider"></div>

              <button type="submit" className="submit-button">
                <span className="button-plus">+</span>
                Add Product
                <span className="button-arrow">→</span>
              </button>

              <p className="form-helper">
                Product information will be saved to your catalog.
              </p>
            </form>
          </section>

          {/* Product List */}
          <section className="list-panel">
            <div className="list-header">
              <div>
                <h2>Product Catalog</h2>
                <p>Overview of your existing products</p>
              </div>
              <span className="product-count">
                {productLst.length} Products
              </span>
            </div>

            <div className="products-grid">
              {productLst?.length > 0 ? (
                productLst.map((product) => {
                  return (
                    <article className="product-card" key={product._id}>
                      <div className="card-top">
                        <div className="product-avatar">
                          <span>▣</span>
                        </div>

                        <button onClick={() => handleDelete(product._id)}>
                          Delete
                        </button>

                        <span className="category-badge">
                          {product.category || "Uncategorized"}
                        </span>
                      </div>

                      <div className="card-content">
                        <span className="product-brand">{product.brand}</span>

                        <h3 className="product-title">{product.name}</h3>

                        <p className="product-description">
                          {product.description}
                        </p>
                      </div>

                      <div className="product-meta">
                        <div className="meta-item">
                          <span>Variant</span>
                          <strong>
                            <span className="variant-dot"></span>
                            {product.variant || "N/A"}
                          </strong>
                        </div>

                        <div className="meta-item">
                          <span>Stock Available</span>
                          <strong>{product.stock} units</strong>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="price-block">
                          <span>Product Price</span>
                          <strong>₹{product.price}</strong>
                        </div>

                        <span className="card-status">
                          <span className="status-dot"></span>
                          Listed
                        </span>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">▧</div>
                  <h3>No products yet</h3>
                  <p>
                    Your inventory is currently empty. Add your first product
                    using the form to start building your catalog.
                  </p>
                  <span className="empty-hint">
                    Your products will appear here
                  </span>
                </div>
              )}
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          <span>ProductHub · Inventory Management</span>
          <span>Product Administration</span>
        </footer>
      </div>
    </div>
  );
}
