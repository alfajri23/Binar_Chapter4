import React from 'react';
import Img from '../Assets/car.png';
import Modal from '../Assets/modal.png';
import { Link } from "react-router-dom";

export const Cars = (props) => {
    
    function openModal(){
        var modals = document.getElementById('modalDelete');

        // eslint-disable-next-line no-unused-expressions
        modals.style.display = 'block';

    }

    function closeModal() {
        var modals = document.getElementById('modalDelete');
        modals.style.display = 'none';
    }

  return (
    <div>
      <div aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item fw-bold">Cars</li>
              <li className="breadcrumb-item">List cars</li>
          </ol>
      </div>

      <div className="d-flex justify-content-between">
          <h4 className="fw-bold">List Card</h4>
          <Link to="/cars/add" className="btn btn-primary"> 
              <i className="fa-solid fa-plus"></i>
              Add new card
          </Link>
      </div>

      <div className="my-2">
          <button type="button" className="btn btn-md btn-outline-secondary">All</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Small</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Medium</button>
          <button type="button" className="btn btn-md btn-outline-secondary">Large</button>
      </div>

      <div className="d-flex flex-wrap justify-content-between">
          { props.item.map(function(e){  
          return <div key={e.no} className="card my-3" style={{width: `20rem`}}>
              <span className="p-4">
                  <img src={Img} className="card-img-top" alt="..."/>
              </span>
              <div className="card-body">
                  <p className="card-text mb-0">{ e.nama }/{ e.kategori }</p>
                  <h5 className="card-title fw-bold mb-3">{ e.harga  } / hari</h5>
                  <p className="card-text mb-1 fw-light">
                      <i className="fa-solid fa-key"></i>
                      { e.start  } - { e.finish  }
                  </p>
                  <p className="card-text mb-0 fw-light">
                      <i className="fa-solid fa-clock"></i>
                      Updated at { e.update  }
                  </p>

                  <div className="row mt-4">
                      <div className="col-6">
                          <button type="button" onClick={openModal} className="btn btn-outline-danger w-100">
                              <i className="fa-solid fa-trash"></i>
                              Hapus
                          </button>
                      </div>
                      <div className="col-6">
                          <Link to="/cars/add" className="btn btn-success w-100">
                              <i className="fa-solid fa-square-pen"></i>
                              Edit
                          </Link>
                      </div>
                  </div>

              </div>
          </div>
          })}

      </div>


      <div className="modal" id="modalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-body py-5">
                  <div className="d-flex flex-column align-items-center">
                      <img src={Modal} alt=""/>
                      <div className="col-8 text-center">

                          <p className="fw-bold">Menghapus Data Mobil</p>
                          <p className="fw-light">
                              Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
                          </p>
                      </div>
                      <div>
                          <button type="button" onClick={closeModal} className="btn btn-primary">Ya</button>
                          <button type="button" onClick={closeModal} className="btn btn-outline-primary">Tidak</button>
                      </div>

                  </div>
              </div>
            </div>
          </div>
      </div>



  
  
    </div>
  )
}
