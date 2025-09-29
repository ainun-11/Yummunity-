import Button from '@/app/components/button/button.component'
import WidgetCard from '@/app/components/widget/widget.component'
import Link from 'next/link'

const AboutCard = () => {
    return (
        <WidgetCard className="widget widget-about" widgetTitle="Hello, I'm Atika!">
            <img className="img-fluid" src="/images/me/profile.jpg" alt="Profile" />
            <p>As a developer with strong problem-solving abilities and teamwork skills, I am looking for opportunities to create innovative and practical products.</p>
            <ul className="social-icons mb-3">
                <li className="list-inline-item">
                    <a href="#">
                        <i className="ti-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                        <i className="ti-twitter-alt"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                        <i className="ti-linkedin"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                        <i className="ti-github"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                        <i className="ti-youtube"></i>
                    </a>
                </li>
            </ul>
            <Link href="https://github.com/ainun-11" target="_blank">
                <Button btnType="primary">About Me</Button>
            </Link>
        </WidgetCard>
    )
}

export default AboutCard
