import Link from 'next/link'
import Button from '@/app/components/button/button.component'

const AdCard = () => {
    return (
        <div className="promotion">
            <img src="/images/promotion.jpg" className="img-fluid w-100" />
            <div className="promotion-content">
                <h5 className="has-text-white mb-3">Build Amazing Websites</h5>
                <p className="has-text-white mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printers and texts, as well as newspapers and magazines in columns and rows as necessary, are used for the current state of technology and diverse applications.</p>
                <Button btnType="primary">Get Started</Button>
            </div>
        </div>
    )
}

export default AdCard
