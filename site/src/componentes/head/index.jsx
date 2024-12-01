import React, { useEffect } from "react";
import "./styles.css";
import Logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {

        // const navigate = useNavigate()
        // const home = () => {navigate("Home")}

    useEffect(() => {
        const header = document.querySelector(".header");
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
                if (window.scrollY > 0) {
                    header.classList.add("scrolled");
                    header.classList.remove("top");
                } else {
                    header.classList.remove("scrolled");
                    header.classList.add("top");
                }
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const navigateHome = useNavigate();
    function home(){
        navigateHome("/")
    }

    const navigateHistoria = useNavigate();
    function historia(){
        navigateHistoria("/historia-judo")
    }

    const navigateSejaParceiro = useNavigate();
    function sejaparceiro(){
        navigateSejaParceiro("/seja-parceiro")
    }

    return (
        <header className="header top">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="nav-menu">
                <a onClick={home}>O Instituto</a>
                <a onClick={historia}>História</a>
                <a onClick={sejaparceiro}>Fale Conosco</a>
            </nav>
        </header>
    );

}