import { ItemTitles } from "../../components/ItemTitles/ItemTitles"
import { ItemText } from "../../components/ItemText/ItemText"
export const CardSocialSkills = ({content,content2}) => {
  return (
    <div className="h-[15rem]p-0 md: bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <ItemTitles content={content} styles="sm:text-[0.9rem] md:text-xl font-semibold text-gray-800"/>
          <ItemText content={content2} styles="text-gray-600 mt-2"/>
    </div>
  )
}
