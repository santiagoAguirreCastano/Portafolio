import { ItemTitles } from '../ItemTitles/ItemTitles'
import { ItemParagraph } from '../ItemParagraph/ItemParagraph'
export const ItemLine = ({ style, content, content2 }) => {
    return (
        <div className="space-y-6">
            <div>
            <ItemTitles styles="text-md font-medium text-gray-700" content={content} />
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={style}></div>
                </div>
            <ItemParagraph styles="text-xs text-gray-500" content={content2} />

            </div>
        </div>

    )
}

