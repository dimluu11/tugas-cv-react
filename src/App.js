import React, { Component } from 'react';
import Keader from './cv/Keader';
import Kooter from './cv/Kooter';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Keader />
      <header className="App-header">
        <h1 className="App-title">Curriculum Vitae</h1>
      </header>
      <p className="App-intro">
        <h1>Dimas Luthfi Jati Kusuma</h1>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Biodata</a>
            </div>
            <div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                  <li><a href="#section1">Pengalaman</a></li>
                  <li><a href="#section2">Pendidikan</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div id="section1" class="container-fluid">
          <h1>Biodata</h1>
          <p>Nama: Dimas Luthfi Jati Kusuma</p>
          <p>Tempat dan Tanggal Lahir: Jakarta, 26 Desember 1992</p>
          <p>Alamat: Jl.Peta Selatan No.7, Kalideres, Jakarta Barat</p>
          <p>Jenis Kelamin: Laki-Laki</p>
          <p>Golongan Darah: A</p>
        </div>
        <div id="section2" class="container-fluid">
          <h1>Pengalaman</h1>
          <p>JUNIOR WEB DESIGNER - CYBERSE.CO.ID
              Membuat design web sederhana dan design web dinamis di Cyberse.co.id</p>
          <p>FRONT OFFICE SUPPORT - TELKOMSEL INDONESIA
              Membuat daily report dari data pelanggan, menggunakan aplikasi CRM untuk validasi data pelanggan dan membuat tiket/laporan apabila ada complain yang tidak bisa ditangani oleh pihak grapari.</p>
          <p>SUBBAGIAN TATA RUANG DAN PERTANAHAN INTERN - CENTRAL JAKARTA MAYOR OFFICE
            Membuat batas wilayah yang boleh dibangun berdasarkan GSB di AutoCAD.</p>
        </div>
        <div id="section3" class="container-fluid">
          <h1>Section 3</h1>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
          <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <Kooter/>
        </p>
    </div>
    );
  }
}

export default App;