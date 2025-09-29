'use client'

import { redirect, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import PostCardLg from '@/app/components/post-card-lg/post-card-lg.component'
import Pagination from '@/app/components/pagination/pagination.component'
import Section from '@/app/components/section/section.component'
import Container from '@/app/components/container/container.component'
import Loader from '@/app/components/loader/loader.component'

const fetchPosts = (search, page = 1) => fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/?search=${search}&page=${page}`, { cache: 'no-store' }).then(res => res.json())

const SearchBlog = () => {
    const searchParams = useSearchParams()

    // Make decodeURIComponent safe when the param is missing
    const rawSearch = searchParams.get('search') || ''
    const search = decodeURIComponent(rawSearch).trim()

    if (!search) redirect('/')

    const [page, setPage] = useState(1)
    const postsPageHandler = page => setPage(page)

    const { status, data } = useQuery({
        queryKey: ['posts', { search }, search, page],
        queryFn: () => fetchPosts(search, page),
        keepPreviousData: true
    })

    return (
        <Section id="posts">
            <Container>
                <div className="columns is-multiline is-desktop is-justify-content-center">
                    <div className="column is-10-desktop mb-3">
                        <h1 className="h2 mb-4">
                            Search results for&nbsp;
                            <mark>{search}</mark>
                        </h1>
                    </div>

                    {data ? (
                        !data.result.length ? (
                            <div className="column is-10-widescreen has-text-centered">
                                <img className="mb-5" src="/images/no-search-found.svg" alt="No results" />
                                <h3>No results found.</h3>
                            </div>
                        ) : (
                            <div className="column is-10-desktop">
                                <>
                                    {data.result.map(post => (
                                        <PostCardLg post={post} key={post.slug} />
                                    ))}

                                    <Pagination elemId="posts" data={data.result} count={data.count} page={page} pageHandler={postsPageHandler} />
                                </>
                            </div>
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
            </Container>
        </Section>
    )
}

export default SearchBlog
