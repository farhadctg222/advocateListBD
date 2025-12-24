'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';




const Nav = () => {


    const links = [
        {
            name:'Home',
            path:"/"
        },
        {
            name:'Service',
            path:"/service"
        },
        {
            name:'Blog',
            path:"/blog"
        },
        {
            name:'Stuff',
            path:"/stuff"
        },
        {
            name:'Contact',
            path:"/contact"
        },
        {
            name:'Login',
            path:"/login"
        }
    ]
    
  const pathname = usePathname();
    return (
        <div className="">
            {
                links.map((links,index)=>{
                    return(
                        <Link href={links.path}
                         key={index}
                          className={`${links.path===pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-blue transition-all ml-5`}>{links.name}
                          </Link>
                    )
                    
                })
            }

            
        </div>
    );
};

export default Nav;