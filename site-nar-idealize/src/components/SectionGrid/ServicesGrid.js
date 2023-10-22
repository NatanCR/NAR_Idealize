import ImageGrid from "./ModelGrid"
import image3Normal from '../assets/painel-close.jpg';
import image5Normal from '../assets/jardim-suspenso-esquerdo.jpg';
import image15Normal from '../assets/vaso-pequeno-luzes-grid.jpg';
import image3Hover from '../assets/painel-verde-OR.jpg';
import image5Hover from '../assets/jardim-andorinha.jpg';
import image15Hover from '../assets/vaso-pequeno.jpg';
import './serviceGrid.css';

function ServicesGrid(){
    return (
        <div className="full-width-container">
            <div class="container text-center">
                <h1>Serviços</h1>
                <div className="row justify-content-center">
                    <div class="col-md">
                    <ImageGrid imgNormal={image3Normal} imgHover={image3Hover} title="Parede Verde Natural" text="Priorizamos o verde natural trazendo um efeito impactante para o seu projeto paisagístico."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid imgNormal={image5Normal} imgHover={image5Hover} title="Jardins Pendentes" text="Montamos o jardim que agrega e combina com o propósito do projeto, satisfazendo as expectativas e transformando o ambiente."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid imgNormal={image15Normal} imgHover={image15Hover} title="Vasos" text="Fazemos a decoração com vasos que agregam sentido e valor à ideia que o ambiente está transmitindo."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid