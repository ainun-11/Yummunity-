'use client'

import Banner from '@/app/components/banner/banner.component'
import PostCard from '@/app/components/post-card/post-card.component'
import PostCardSm from '@/app/components/post-card-sm/post-card-sm.component'
import RecentPosts from '@/app/components/recent-posts/recent-posts.component'
import Categories from '@/app/components/categories/post-categories.component'
import WidgetsBar from '@/app/components/widgets-bar/widgets-bar.component'
import Section from '@/app/components/section/section.component'
import Container from '@/app/components/container/container.component'
import SectionTitle from '@/app/components/section/section-title.component'
import { useQuery } from '@tanstack/react-query'

const fetchLatestPost = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/latest`, { cache: 'no-store' }).then(res => res.json())

const fetchEditorsPickPost = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/editorsPick`, { cache: 'no-store' }).then(res => res.json())

const fetchMostViewedPosts = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/mostViewed`, { cache: 'no-store' }).then(res => res.json())

const Home = () => {
    const latestPost = useQuery({
        queryKey: ['latestPost'],
        queryFn: () => fetchLatestPost()
    })

    const editorsPickPost = useQuery({
        queryKey: ['editorsPick'],
        queryFn: () => fetchEditorsPickPost()
    })

    const mostViewedPosts = useQuery({
        queryKey: ['mostViewedPosts'],
        queryFn: () => fetchMostViewedPosts()
    })

    return (
        <>
            <Banner>
                <h1 className="mb-6">
                    What do you want <br /> to read today?
                </h1>
                <ul className="widget-list-inline mb-4">
                    <Categories />
                </ul>
            </Banner>

            <Section>
                <Container>
                    <div className="columns is-desktop is-multiline">
                        <div className="column is-4-widescreen is-6-desktop mb-5">
                            <SectionTitle>Editor's Pick</SectionTitle>

                            {editorsPickPost.data && <PostCard post={editorsPickPost.data} />}
                        </div>
                        <div className="column is-4-widescreen is-6-desktop mb-5">
                            <SectionTitle>Most Viewed</SectionTitle>

                            {mostViewedPosts.data && mostViewedPosts.data.map(post => <PostCardSm key={post.slug} post={post} />)}
                        </div>

                        <div className="column is-4-widescreen mb-5">
                            <SectionTitle>Latest</SectionTitle>

                            {latestPost.data && <PostCard post={latestPost.data} />}
                        </div>
                        <div className="column is-12">
                            <div className="border-bottom border-default"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section sectionType="sm" id="recent-posts">
                <Container>
                    <div className="columns is-desktop is-justify-content-center">
                        <div className="column is-8-desktop mb-5">
                            <SectionTitle>Recent Posts</SectionTitle>

                            <RecentPosts />
                        </div>

                        <WidgetsBar />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Home
