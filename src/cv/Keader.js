import React, { Component } from 'react';
import './../style/Keader.css';
class Keader extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            <img src="https://d1u5p3l4wpay3k.cloudfront.net/hon_gamepedia/e/e7/Adkarna_Assassin.jpg?version=17e41b2a3f98a40b9944d44a8f904736" width="25px">
                            </img>
                        </a>
                    </div>
                <ul className="nav navbar-nav">
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Galeri</a></li>
                        <li><a href="#">Tentang</a></li>
                        <li><a href="#">Kontak</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}
export default Keader;

