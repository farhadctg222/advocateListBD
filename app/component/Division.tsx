
import Link from 'next/link';
import { Suspense } from "react";
import './Division.css'
import DataMainPageShow from './DataMainPageShow';
import Loading from './loading'



const Division = () => {



    return (
        <div style={{ marginTop: '100px' }}>
            <div className="listLawyer">
                <Link href=""> <title>Dhaka ITP Lawyer </title></Link>

                <Link href=""> <title>Chattogram ITP Lawyer </title></Link>
                <Link href="https://burjal.netlify.app"><title>Hotel Room </title></Link>

                <Link href=""><title>Sylhet ITP Lawyer </title></Link>

                <Link href=""> <title>Bogra ITP Lawyer </title></Link>

                <h3 className="lawItps">Division Wise ITP & Lawyer</h3>
                <div className="button">




                    <Link href="/dhaka">  <button>Dhaka</button></Link>
                    <Link href="/chattogram">
                        <button className="activeBtn">
                            Chattogram
                        </button>
                    </Link>


                    <Link href="/rajshahi"><button>Rajshahi</button></Link>
                    <Link href="/sylhet"><button>Sylhet</button></Link>
                    <Link href="/rangpur"><button>Rangpur</button> </Link>
                    <Link href="/khulna"><button>Khulna</button></Link>
                    <Link href="/barisal"><button>Barisal</button></Link>
                    <Link href="/mymensingh"><button>Mymensingh</button></Link>

                </div>

            </div> <br />
            <Link href="https://lawyerbangladesh.netlify.app">  <title>Specialist Lawyer & ITP in Bangladesh</title></Link>
            <div className="listLawyer">
                <h3 className="lawItps">Division Wise Specialist Law Farm</h3>
                <div className="button">




                    <Link href="/div-dhaka">  <button>Dhaka</button></Link>
                   <Link href="/div-chattogram">
                        <button className="activeBtn">
                            Chattogram
                        </button>
                    </Link>
                    <Link href="/div-rajshahi"><button>Rajshahi</button></Link>
                    <Link href="/div-sylhet"><button>Sylhet</button></Link>
                    <Link href="/div-rangpur"><button>Rangpur</button> </Link>
                    <Link href="/div-khulna"><button>Khulna</button></Link>
                    <Link href="/div-barisal"><button>Barisal</button></Link>
                    <Link href="/div-mymensingh"><button>Mymensingh</button></Link>

                </div>
            </div><br />
            <h4 className='Recently'>Recently Added Lawyer and ITP to Our Website</h4>
            <div>
                <Suspense fallback={<Loading />}>

                    <DataMainPageShow>
                    </DataMainPageShow>
                </Suspense>

            </div>
           

            <div className="ProfileCard" style={{ border: '1px solid black', margin: '3px', textAlign: 'center', backgroundColor: '#f0f0f0' }} >
                <h2 className='lawItps'>AdvocateListBD.com একটি নিরপেক্ষ আইনজীবী ডিরেক্টরি ওয়েবসাইট।
এখানে আইনজীবীদের প্রোফাইল, শিক্ষাগত যোগ্যতা, চেম্বারের ঠিকানা ও যোগাযোগের তথ্য প্রকাশ করা হয়।

এই প্ল্যাটফর্মের উদ্দেশ্য হলো—সাধারণ মানুষ যেন সহজে প্রয়োজনীয় তথ্য খুঁজে পেতে পারেন। <br />

⚠️ AdvocateListBD কোনো আইনজীবীর প্রতিনিধি নয় এবং কোনো অ্যাপয়েন্টমেন্ট বা আইনি সেবা সরাসরি প্রদান করে না।</h2>

            </div>


        </div>
    );
};

export default Division;






