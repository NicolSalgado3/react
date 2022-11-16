
import './App.css';

function App() {
  return (
    <>
      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container px-5">
            <h1 class="masthead-heading mb-0">HOJAS DE VIDA</h1>
            <h2 class="masthead-subheading mb-0">Universidad de Manizales</h2>
            <h2 class="masthead-subheading mb-0">2022</h2>
          </div>
        </div>
        <div class="bg-circle-1 bg-circle"></div>
        <div class="bg-circle-2 bg-circle"></div>
        <div class="bg-circle-3 bg-circle"></div>
        <div class="bg-circle-4 bg-circle"></div>
      </header>
      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">SERGIO TORO</h2>
                <h3>DESCRIPCION</h3>
                <p align="justify">Soy una persona a la cual le gusta mucho aprender cosas nuevas y arriesgarse aunque siempre precavido a prosibles tropiezos, siento que soy un poco puntual y alegre ante todo. </p>
                <h3>ESTUDIOS</h3>
                <ul><li align="justify"><b>Bachiller Academico</b>- IE Mariscal Sucre</li>
                  <li align="justify"><b>Tecnico Profesional en Configuracion de Sistemas Comerciales Web</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Tecnologo en Sistemas de Información Comerciales para Internet</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Estudiante de Ingenieria de Sistemas y Telecomucicaciones</b> - Universidad de Manizales</li></ul>
                <h3>INTERESES</h3>
                <p align="justify">Mis intereses van de la mano de la musica y el desarrollo de software ya que es algo que me intriga y me gusta demasiado, porque puedes plasmar tus pensamientos tanto en la musica en una hoja y en el desarrollo en un codigo.
                  La musica es uno de mis intereses y pasatiempos que mas hago por el motivo de que me puedo desahogar sin pensar en el que diran y esto es lo que me hace feliz. Y el desarrollo porque es lo que estoy estudiando y es lo que muy prontamente me dara de comer y con que subsistir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/aliss.jfif" alt="..." /></div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">ALISSON RINCON</h2>
                <h3>DESCRIPCION</h3>
                <p align="justify">Estudie un bachiller tecnico en diseño de paginas web en la Universidad de Manizales, soy una persona innovadora, imaginativa, me gusta buscar la manera más eficaz y eficente de hacer las cosas, soy auto didacta me gusta investigar y aprender.</p>
                <h3>ESTUDIOS</h3>
                <ul>
                  <li align="justify"><b>Bachiller Academico</b> Institucion educativo Liceo Leon de Greiff</li>
                  <li align="justify"><b>Tecnico Profesional en Configuracion de Sistemas Comerciales Web</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Tecnologo en Sistemas de Información Comerciales para Internet</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Estudiante de Ingenieria de Sistemas y Telecomucicaciones</b> - Universidad de Manizales</li>
                </ul>
                <h3>INTERESES</h3>
                <p align="justify">En mi tiempo libre me gusta ver series, escuchar música, disfrutar de paseos con mi gato y pintar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5"><img class="img-fluid rounded-circle" src="assets/img/nicol.jpeg" alt="..." /></div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">NICOL SALGADO</h2>
                <h3>DESCRIPCION</h3>
                <p align="justify">Me considero que soy proactiva ante cualquier dificultad, la administración y gestión de proyectos mediante marcos de trabajo y el desarrollo de proyectos en diferentes campos de las tecnologías, siempre apasionada por aprender nuevas tecnologías y nuevos conocimientos.</p>
                <h3>ESTUDIOS</h3>
                <ul>
                  <li align="justify"><b>Bachiller Academico</b> - Escuela Nacional Auxiliares de Enfermeria</li>
                  <li align="justify"><b>Tecnico Profesional en Configuracion de Sistemas Comerciales Web</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Tecnologo en Sistemas de Información Comerciales para Internet</b> - Universidad de Manizales</li>
                  <li align="justify"><b>Estudiante de Ingenieria de Sistemas y Telecomucicaciones</b> - Universidad de Manizales</li>
                </ul>
                <h3>INTERESES</h3>
                <p align="justify">Ademas de estudiar disfruto la mayor parte de mi tiempo al aire libre, me gusta la nacion por que me puedo sentir en paz y relajada. Cuando me obligan a entrar en casa, sigo una serie de películas y programas de televisión de género de romance y comedia, paso una gran parte de mi tiempo libre explorando los últimos avances tecnológicos en el mundo del desarrollo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-black">
        <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
      </footer>
    </>
  );
}

export default App;
