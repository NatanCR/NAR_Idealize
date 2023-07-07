import ImageGrid from "./ModelGrid"
import image3 from '../assets/painel-top.jpg';
import image5 from '../assets/jardim-suspenso-esquerda.jpg';
import image15 from '../assets/vasos-transformacao.jpg';
import './serviceGrid.css';

function ServicesGrid(){
    return (
        <div className="full-width-container">
            <div class="container text-center">
                <h1>Serviços</h1>
                <div className="row justify-content-center">
                    <div class="col-md">
                    <ImageGrid img={image3} title="Parede Instagramável" text="Transformamos sua parede."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid img={image5} title="Jardim suspenso" text="Deixamos o ambiente do seu evento mais verde e sustentável."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid img={image15} title="Vasos decorativos" text="Montamos os vasos ideais que transformam seu evento."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid