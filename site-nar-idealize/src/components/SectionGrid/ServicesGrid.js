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
                    <ImageGrid img={image3} title="Parede Verde Natural" text="É importante medir cuidadosamente a área verde disponível para definir o projeto paisagístico ideal."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid img={image5} title="Jardim Suspenso" text="É preciso selecionar as espécies de plantas que valorizem o espaço e de sentido a proposta do projeto."/>
                    </div>
                    <div class="col-md">
                    <ImageGrid img={image15} title="Vasos Decorativos" text="É importante desenhar todos os elementos de forma detalhada, para que o projeto possa ser concretizado com sucesso."/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid