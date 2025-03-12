import { ItemTitles } from "../../components/ItemTitles/ItemTitles"
import { ItemText } from "../../components/ItemText/ItemText"
export const CardSocialSkills = ({content,content2}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <ItemTitles content={content} styles="text-xl font-semibold text-gray-800"/>
          <ItemText content={content2} styles="text-gray-600 mt-2"/>
    </div>
  )
}
