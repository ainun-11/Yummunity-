import Banner from '@/app/components/banner/banner.component'
import Direction from '@/app/components/direction/direction.component'
import Section from '@/app/components/section/section.component'
import Container from '@/app/components/container/container.component'
import Button from '@/app/components/button/button.component'

const About = () => {
    return (
        <>
            <Banner>
                <h1 className="my-4">About Us</h1>
                <Direction current="About Us" />
            </Banner>

            <Section sectionType="sm">
                <Container>
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-5-widescreen is-6-desktop mb-4">
                            <div className="image-wrapper">
                                <img className="img-fluid w-100" src="/images/about-us-1.jpg" />
                            </div>
                        </div>
                        <div className="column is-5-widescreen is-6-desktop">
                            <div className="pr-4">
                                <h2 className="mb-3">What is my main mission and what do I want to achieve?</h2>
                                <p>
                                    With software, greater knowledge can be created for computer designers, especially creative designers and progressive culture in our own culture. In this way, we can hope that all the difficulties in presenting solutions and the challenges of typesetting will come
                                    to an end, and the required time will include the main achievements of typesetting and provide continuous answers to the existing world of design.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section sectionType="sm">
                <Container>
                    <div className="columns is-align-items-center is-justify-content-center">
                        <div className="column is-5-widescreen is-6-desktop">
                            <div className="pr-4">
                                <h2 className="mb-4">We have a team of the best writers</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printers and texts, as well as newspapers and magazines, in columns and rows as necessary, and for the present conditions of technology, various applications are created with the aim of
                                    improving practical tools. Many books in the past, present, and future demand broad knowledge from society and specialists.
                                </p>
                                <Button type="button" btnType="primary">
                                    Our Writers
                                </Button>
                            </div>
                        </div>
                        <div className="column is-5-widescreen is-6-desktop mb-4">
                            <div className="image-wrapper">
                                <img className="img-fluid w-100" src="images/about-us-2.jpg" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <section className="section-sm author">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6-widescreen is-8-desktop mx-auto has-text-centered">
                            <h2 className="mb-4">Join the Great Team of Writers</h2>
                            <p className="mb-4">Various applications are created with the aim of improving practical tools. Many books in the past, present, and future demand broad knowledge from society and specialists.</p>
                            <Button type="button" btnType="primary">
                                Join
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
