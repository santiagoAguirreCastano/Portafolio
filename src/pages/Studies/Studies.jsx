import { Card } from '../../Layouts/Card/Card'
import { Main } from '../../Layouts/Main/Main'
import { ItemTitles } from '../../components/ItemTitles/ItemTitles'
import image1 from '../../assets/images/diploma.jpg'
import image2 from '../../assets/images/diploma2.avif'

export const Studies = () => {
  return (
    <Main>

      <div className="text-center mb-8">
        <ItemTitles content="Certificados de Estudios" styles="text-2xl font-bold text-gray-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-2">
        <Card image={image1} content1="BACHILLER" content2="Bachiller Hecho en el Marcelino Champagnat" />

        <Card image={image2} content1="TECNICO EN PROGRAMACION DE SOFTWARE" content2="Tecnico Hecho en el Marcelino Champagnat" />


      </div>
    </Main>
  )
}


