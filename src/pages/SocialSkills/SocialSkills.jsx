import { CardSocialSkills } from "../../Layouts/CardSocialSkills/CardSocialSkills";
export const SocialSkills = () => {
  return (
    <div className="h-[100vh] bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Habilidades Sociales</h1>
      
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-5xl">
        
        
      <CardSocialSkills content="Trabajo en Equipo" content2="Capacidad para colaborar y comunicarse eficazmente"/>

      <CardSocialSkills content="Liderazgo" content2="Habilidad para entender y conectar con los demás."/>


      <CardSocialSkills content="Empatía" content2="Capacidad para colaborar y comunicarse eficazmente"/>

      <CardSocialSkills content="Adaptabilidad" content2="Capacidad para ajustarse a cambios y nuevos entornos"/>


      <CardSocialSkills content="Comunicación" content2="Expresión clara y efectiva en diferentes contextos."/>

      <CardSocialSkills content="Solidaridad" content2="Capacidad de apoyar y ayudar a los demás de manera desinteresada, fomentando la cooperación y el bienestar común."/>

        
      

       
    
      </div>
    </div>
  );
}
