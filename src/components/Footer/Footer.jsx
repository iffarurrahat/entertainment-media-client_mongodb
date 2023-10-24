import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className='bg-[#0a0d14] py-6 md:py-12'>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1  md:grid-cols-5 gap-6 md:gap-10 lg:gap-28 px-4 md:px-3 lg:px-2">
                    <div className='col-span-2'>
                        <h3 className='text-2xl font-bold'>Movie Categories</h3>
                        <div className='flex justify-between'>
                            <div>
                                <ul className='list-none mt-2 space-y-3'>
                                    <li><Link to='/'>Action</Link></li>
                                    <li><Link to='/'>Adventure</Link></li>
                                    <li><Link to='/'>Animation</Link></li>
                                    <li><Link to='/'>Comedy</Link></li>
                                    <li><Link to='/'>Crime</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-none space-y-3 pt-3 md:pr-20'>
                                    <li><Link to='/'>Drama</Link></li>
                                    <li><Link to='/'>Fantasy</Link></li>
                                    <li><Link to='/'>Horror</Link></li>
                                    <li><Link to='/'>Mystery</Link></li>
                                    <li><Link to='/'>Romance</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <h3 className='text-2xl font-bold'>TV Series</h3>
                        <div className='flex justify-between'>
                            <div>
                                <ul className='list-none mt-2 space-y-3'>
                                    <li><Link to='/'>Valentine Day</Link></li>
                                    <li><Link to='/'>Underrated Comedies</Link></li>
                                    <li><Link to='/'>Scary TV Series</Link></li>
                                    <li><Link to='/'>Best 2020 Documentaries</Link></li>
                                    <li><Link to='/'>Classic Shows</Link></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-none space-y-3 pt-2'>
                                    <li><Link to='/'>Big TV Premieres</Link></li>
                                    <li><Link to='/'>Reality TV Shows</Link></li>
                                    <li><Link to='/'>Original Shows</Link></li>
                                    <li><Link to='/'>Surprise of the Year Shows</Link></li>
                                    <li><Link to='/'>Top 10 TV Shows</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='text-2xl font-bold'>Support</h3>
                            <ul className='list-none space-y-3 pt-2'>
                                <li><Link to='/'>My Account</Link></li>
                                <li><Link to='/'>FAQ</Link></li>
                                <li><Link to='/'>Watch on TV</Link></li>
                                <li><Link to='/'>Help Center</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#06090f]'>
                <div className='max-w-screen-xl mx-auto flex justify-between py-5 px-1'>
                    <p>Copyright © 2023, xyz. All Rights Reserved</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

