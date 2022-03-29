import React from 'react'
import {
  BrowserRouter as Browser,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from '../Layouts/Dashboard';
import Home from '../Pages/Home';
import {items,item} from '../Assets/data'
import { Cars } from '../Pages/Cars';
import { CarsAdd } from '../Pages/CarsAdd';

//console.log(items);
//console.log(item);

export const RoutesPage = () => {
  return (
    <Browser>
      <Routes>
          <Route path="/" element={
            <Dashboard  title="Dashboard" subtitle="Dashboard"  item={<Home items={items} item={item}/>}>
            </Dashboard>
          } />

          <Route path="/cars" element={
            <Dashboard title="Cars" subtitle="List cars" item={<Cars item={item}/>}>
            </Dashboard>
          } />

          <Route path="/cars/add" element={
            <Dashboard title="Cars" subtitle="List cars" item={<CarsAdd item={item}/>}>
            </Dashboard>
          } />

          <Route path="/cars/add:id" element={
            <Dashboard title="Dashboard" subtitle="Dashboard"  item={<CarsAdd item={item}/>}>
            </Dashboard>
          } />

          <Route path="home" element={<Home />} />

      </Routes>
    </Browser>
  )
}
