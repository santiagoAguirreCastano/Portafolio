import { Main } from '../../Layouts/Main/Main'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import { ItemLine } from '../../components/ItemLine/ItemLine'
export const EnglishLevel = () => {
    return (
        <Main>

            <div className=" w-[30rem] max-sm:w-[20rem]  my-10 p-6 bg-white shadow-xl rounded-lg">
                <ItemTitles content="Mi Nivel de Inglés" styles="text-2xl font-bold text-center text-gray-800 mb-6" />

                <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-700">Nivel Actual</h3>
                    <p className="text-lg text-gray-600">Intermedio (B1)</p>
                </div>


                <div>
                    <ItemLine content="Comprensión de Lectura" content2="85%" style="bg-green-500 h-2.5 rounded-full w-[85%]" />


                    <ItemLine content="Comprensión Auditiva" content2="60%" style="bg-red-500 h-2.5 rounded-full w-[60%]" />


                    <ItemLine content="Escritura" content2="65%" style="bg-blue-500 h-2.5 rounded-full w-[65%]" />

                    <ItemLine content="Comunicacion Verbal" content2="55%" style="bg-yellow-500 h-2.5 rounded-full w-[55%]" />

                </div>
            </div>




        </Main>


    )
}


