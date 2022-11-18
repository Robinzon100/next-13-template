import Link from 'next/link';





const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link href="/" >
                <h1>Leanhire</h1>
            </Link>
            <div className="navigation_links">
            </div>
        </nav>
    );
};


export default Navigation;