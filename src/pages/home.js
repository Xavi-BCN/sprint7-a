import '../Styles/App.css'
import fondo from '../assets/financial.jpg'

const Home = () => {

  return (
    <>
      <div className="container-wellcome">
        <h1>Benvinguts al generador de pressupostos</h1>
        <img className='my-5' src={fondo} alt={"Company Logo"}/>
        <h3>Aqui va el proposit</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eius
          aliquid consequuntur quo tenetur porro laudantium molestias
          reprehenderit dolorum magnam? Voluptates perferendis quas incidunt
          soluta, repellat dicta sit labore nostrum! Pariatur sit laboriosam,
          sed aspernatur provident ullam cumque culpa, ex qui distinctio commodi
          eum! Inventore non sint nobis nihil ab similique repellat eveniet,
          provident placeat itaque deleniti distinctio odit voluptas
          exercitationem alias , maiores cupiditate tempora consequuntur
          recusandae corporis quia eum minima. Repudiandae dignissimos, veniam
          iusto necessitatibus fugiat fuga reiciendis.
        </p>
      </div>
    </>
  );
};

export default Home;
