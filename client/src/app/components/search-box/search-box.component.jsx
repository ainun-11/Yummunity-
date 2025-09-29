'use client'

import styles from './search-box.module.scss'
import Button from '@/app/components/button/button.component'
import Widget from '@/app/components/widget/widget.component'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
    const router = useRouter()

    const handleSubmit = event => {
        event.preventDefault()
        const search = event.target.search.value
        if (search) router.push(`/blog/?search=${search}`)
    }

    return (
        <Widget widgetTitle="Search">
            <form onSubmit={handleSubmit} className={styles.widgetSearch}>
                <input className="mb-3 p-3" id="search-query" name="search" type="search" placeholder="Type here..." required />
                <i className="ti-search"></i>
                <Button btnType="blockPrimary">Search</Button>
            </form>
        </Widget>
    )
}

export default SearchBox
