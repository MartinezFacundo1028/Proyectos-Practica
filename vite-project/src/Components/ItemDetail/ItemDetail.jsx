import React, { useEffect } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
      <div id="div-detail" className="mx-auto my-5 p-2" style={{ border: '1px solid #ced4da', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxHeight: '900px', maxWidth: '1300px' }}>
          <div className="row no-gutters">
              <div className="col-md-4">
                  <img src={product.imagen} className="card-img" alt={product.nombre} style={{ objectFit: 'cover', height: '100%' }} />
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title">{product.nombre}</h5>
                      <p className="card-text">
                          <strong>Categoría:</strong> {product.category}
                      </p>
                      <p className="card-text">{product.description}</p>
                      <div className="card-text-container">
                          <p className="card-text">Cantidad de articulos que desea comprar:</p>
                          <div className="card-text">
                              <ItemCount stock={product.stock} />
                          </div>
                      </div>
                      <div className="text-right"> 
                          <button className="btn btn-primary">Añadir al carrito</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ItemDetail;


