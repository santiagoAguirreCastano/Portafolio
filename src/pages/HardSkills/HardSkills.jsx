import { Main } from '../../Layouts/Main/Main'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import { ItemHardSkills } from '../../components/ItemHardSkills/ItemHardSkills'
export const HardSkills = () => {
  return (
    <Main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <ItemTitles content="Habilidades Tencicas" styles="text-4xl font-bold text-gray-800 mb-30  "/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 w-full max-w-5xl">

      <ItemHardSkills content="JavaScript" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white " />
      
      <ItemHardSkills content="TypeScript" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white" />

      <ItemHardSkills content="React" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white" />

      <ItemHardSkills content="Java" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white" />

      <ItemHardSkills content="C#" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white" />

      <ItemHardSkills content="Git Hub" styles="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold transform hover:scale-105 transition duration-300 text-white" />


        
      </div>
    </Main>
  )
}
