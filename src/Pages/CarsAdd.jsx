import React from 'react'
import {item} from '../Assets/data'
import { Link } from "react-router-dom";

export const CarsAdd = (props) => {

  return (
    <div>
        <div aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item fw-bold">Cars</li>
                <li class="breadcrumb-item fw-bold">List cars</li>
                <li class="breadcrumb-item">Add new cars</li>
            </ol>
        </div>

        <div>
            <h4 class="fw-bold">Add New Car</h4>

            <div class="bg-white p-3">
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Nama</label>
                    <div class="col-sm-6">
                    <input type="email" class="form-control" id="colFormLabel" placeholder="placeholder"/>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Harga</label>
                    <div class="col-sm-6">
                    <input type="email" class="form-control" id="colFormLabel" placeholder="placeholder"/>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Foto</label>
                    <div class="col-sm-6">
                    <input type="file" class="form-control" id="colFormLabel" placeholder="placeholder"/>
                    <div id="passwordHelpBlock" class="form-text">
                        File size max. 2MB
                    </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Start Rent</label>
                    <div class="col-sm-6">
                    -
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Finish Rent</label>
                    <div class="col-sm-6">
                    -
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Created at</label>
                    <div class="col-sm-6">
                    -
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Updated at</label>
                    <div class="col-sm-6">
                    -
                    </div>
                </div>

            </div>
            
            <div>
            <Link to="/cars" class="btn btn-outline-primary">Cancel</Link>
            <button type="button" class="btn btn-primary">Save</button>
            </div>



        </div>

    </div>
  )
}
