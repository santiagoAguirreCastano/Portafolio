import { ItemCard } from '../../components/ItemCard/ItemCard'
import { ItemText } from '../../components/ItemText/ItemText'
export const Card = ({image,content1,content2}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 transition-transform transform hover:scale-105 w-[12rem] ">
              <img src={image}  className=" h-40 object-cover rounded-xl" />
              
              <ItemCard content={content1} styles="text-lg font-semibold mt-4 text-black"/>
              <ItemText content={content2} styles="text-gray-600 text-sm mt-2"/>
    </div>
  )
    
  
}
