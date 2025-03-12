import { Main } from '../../Layouts/Main/Main'
import { ItemTitles } from "../../components/ItemTitles/ItemTitles"
import { Card } from '../../Layouts/Card/Card'
import Image from  "../../assets/images/traductor.png"
import Image2 from  "../../assets/images/60seconds.png"
import Image3 from  "../../assets/images/libreria.jpg"
export const ProfessionalExperience = () => {
  return (
    <Main>
      <div className="text-center mb-8">
        <ItemTitles content="Experiencia Profesional" styles="text-2xl font-bold text-gray-800"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <a href="https://github.com/santiagoAguirreCastano/traductor.git"><Card content1="TRADUCTOR" content2="Proyecto para Traducir Palabras" image={Image}/></a>
        <a href="https://github.com/JuegoPalabras/JuegoPalabrasRandom.git"><Card content1="JUEGO " content2="Jugar 60 Segundos por Jugador " image={Image2}/></a>
        
        <a href="https://github.com/Sena-Library/Sena-Library.git"><Card content1="LIBRERIA" content2="Venta y Manejo de inventario de una libreria" image={Image3}/></a>


    

      </div>
    </Main>
  )
}
