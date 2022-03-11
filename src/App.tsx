import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from "antd";
import Carduri from "./layout/Carduri";
import Header from "./layout/Header";
import './App.css';
import 'antd/dist/antd.css'
import {Footer} from "antd/es/layout/layout";

function App() {
  return (
<Layout>
  <Header/>
  <Carduri/>
  <Footer>Chieaev Leonid CR-192 :)</Footer>
</Layout>
  );
}

export default App;
