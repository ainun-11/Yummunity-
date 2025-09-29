import Link from 'next/link'

const Direction = ({ current }) => {
    return (
        <ul className="list-inline">
            <li className="list-inline-item">
                <Link className="text-default" href="/">
                    Home&nbsp;
                </Link>
                / &nbsp;
            </li>
            <li className="list-inline-item text-primary">{current}</li>
        </ul>
    )
}

export default Direction
