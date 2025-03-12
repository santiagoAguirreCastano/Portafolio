import { Main } from "../../Layouts/Main/Main"
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import Image from '../../assets/images/yo.jpg'
import { ItemText } from "../../components/ItemText/ItemText"
export const Home = () => {
    return (



        <Main>

            
            <div className=" bg-gray-100 flex flex-col justify-center items-center py-8">
                <div className="flex flex-col items-center mb-8">
                    

                    <img src={Image} alt="" className="w-50  h-60 rounded-full border-4 border-teal-600 shadow-lg mb-4" />
                    <ItemTitles content="¡Hola! Soy Santiago Aguirre Castaño"styles="text-4xl font-bold text-gray-800" />

                    <ItemText styles="text-lg text-center text-gray-600 mt-2"content='Desarrollador web | Apasionado por la tecnología'/>
                </div>

                <div className="bg-teal-600 text-white p-8 rounded-lg shadow-xl max-w-3xl w-full mx-4">

                    <h2 className="text-3xl font-semibold mb-4 text-amb">Bienvenido a mi portafolio</h2>
                    <ItemText styles    ="text-lg"content='Soy un profesional con experiencia en lenguajes como JavaScript, Java, C# . Me apasiona crear soluciones innovadoras para resolver problemas. Aquí podrás ver algunos de los proyectos que he realizado y cómo he contribuido al éxito de mis clientes. Si te gustaría trabajar conmigo, ¡no dudes en contactarme!'/>


                </div>

               
            </div>


        </Main>



    )
}

