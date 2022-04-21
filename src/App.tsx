import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from "antd";
import Carduri from "./layout/Carduri";
import Header from "./layout/Header";
import './App.css';
import 'antd/dist/antd.css'
import {Footer} from "antd/es/layout/layout";
import {FormMy} from "./layout/FormMy";

function App() {
  return (
<Layout>
  <Header/>

  <Carduri/>
  {/*<FormMy/>*/}

  <Footer>Chieaev Leonid CR-192 :),Lab4</Footer>
</Layout>
  );
}

export default App;
