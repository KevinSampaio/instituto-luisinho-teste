import './styles.css';
import fotoInstituto1 from './assets/placeholder.svg';
import fotoInstituto2 from './assets/placeholder.svg';
import logo from './assets/logo.svg';
import judokas from './assets/judokas.svg';
import { Container } from '@mui/material';

export default function SecondarySection() {
    return (
        <div className="container_section">
            <div className="leftSection">
                <div className="text_institute">
                    <div className="title">
                        <h1>CALMA CALABRESO</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique quam volutpat ligula viverra auctor. Aliquam ultrices nulla eros, quis rutrum urna fringilla sed. Nulla sodales tellus sed est condimentum, id finibus eros tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent a diam vitae ipsum tristique sodales vitae a urna. Aliquam justo purus, lobortis lobortis risus sed, tincidunt porttitor magna.</p>
                    <p>Phasellu massa ipsum, feugiat non neque nec, accumsan porta dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut ex rhoncus ipsum efficitur suscipit ut eu metus. Morbi sagittis, tellus ut finibus semper, arcu quam commodo lectus, nec sodales ligula felis quis libero. Maecenas porttitor, felis et viverra lobortis, leo eros fringilla est, nec mattis dolor nunc quis nibh.</p>
                </div>
                <div className="images">
                    <img src={fotoInstituto1} alt="" />
                    <img src={fotoInstituto2} alt="" />
                </div>
            </div>
            <div className="hero">
                <img src={logo} alt="" />
                <img src={judokas} alt="" />
            </div>
        </div>
    )
}

