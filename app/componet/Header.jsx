
import Link from 'next/link';
import './Header.css'

const Header = () => {
    return (
        <div>
           <div>
        
           </div>
           <nav>
            <ul>
                <Link href="/" style={{textDecoration:'none',}}><li>ITP</li></Link>
               <Link href="/" style={{textDecoration:'none'}}> <li>Lawyer</li></Link>
            </ul>
           </nav>
           <div>
            <input type="button" value="search" />
           </div>
          
        </div>
    );
};

export default Header;