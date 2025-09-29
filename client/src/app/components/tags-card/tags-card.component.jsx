import Widget from '@/app/components/widget/widget.component'
import PostCategories from '@/app/components/categories/post-categories.component'

const TagsCard = () => {
    return (
        <Widget widgetTitle="Categories">
            <ul className="widget-list-inline widget-card">
                <PostCategories />
            </ul>
        </Widget>
    )
}

export default TagsCard
