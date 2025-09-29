'use client'

import styles from './search-bar.module.scss'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    const router = useRouter()

    const handleSubmit = event => {
        event.preventDefault()
        const search = event.target.search.value
        if (search) router.push(`/blog/?search=${search}`)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input className="p-3" name="search" type="search" placeholder="Search articles..." required />
        </form>
    )
}

export default SearchBar
