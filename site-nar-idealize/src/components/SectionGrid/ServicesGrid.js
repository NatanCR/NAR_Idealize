import ImageGrid from "./ModelGrid"
import image3Normal from '../assets/painel-close.jpg';
import image5Normal from '../assets/jardim-suspenso-esquerdo.jpg';
import image15Normal from '../assets/vaso-pequeno-luzes-grid.jpg';
import image3Hover from '../assets/painel-verde-OR.jpg';
import image5Hover from '../assets/jardim-pendurado.jpg';
import image15Hover from '../assets/vaso-suspenso2.jpg';
import './serviceGrid.css';

function ServicesGrid(){
    return (
        <div className="full-width-container">
            <div class="container text-center">
                <h1>Serviços</h1>
                <div className="row justify-content-center">
                    <div class="col-md">
                    <ImageGrid imgNormal={image3Normal} imgHover={image3Hover} title="Parede Verde Natural" text="É importante medir cuidadosamente a área verde disponível para definir o projeto paisagístico ideal."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid imgNormal={image5Normal} imgHover={image5Hover} title="Jardim Suspenso" text="É preciso selecionar as espécies de plantas que valorizem o espaço e de sentido a proposta do projeto."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid imgNormal={image15Normal} imgHover={image15Hover} title="Vasos Decorativos" text="É importante desenhar todos os elementos de forma detalhada, para que o projeto possa ser concretizado com sucesso."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid