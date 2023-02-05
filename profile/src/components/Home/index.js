import React , {useEffect , useState } from 'react';
import {getListings , getListingReview} from '../../middleware/http';
import Toast from '../Toast';
import Button from '../button';
import {BUTTON_PROPS , TOAST_PROPERTIES} from '../toastProperties';
import Carousel from '../Carousal';
import Slides from '../Slides';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
export default function Home (){
  const [list ,setList] = useState([]); 
  const [position,setPostion] = useState('bottom-right');
  const [autoDeleteTime ,setAutoDeleteTime] = useState(3000);

  const selectPosition = (e) => {
setPostion(e.target.value);
setList([]);
  }
  const showToast = type =>{
    const toastProperties = TOAST_PROPERTIES.find((toast)=> toast.title.toLowerCase() === type);
    setList([...list,toastProperties]);
  }
  useEffect(()=>{
    
    async function fetchData() {
      const listings = await getListings();
      const reviews = await getListingReview();
      console.log(listings + reviews);
    }
    fetchData();
  });
  
    return(
      <>
      <div className="md:grid md:grid-cols-4 md:gap-2">
        <div className="card md:col-span-2">
        <div className="card relative bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Data Analytics and Web Technologies</span>{' '}
                        <span className="block text-indigo-600 xl:inline">Full Stack WebDeveloper</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                       My name is Pradeep Rawat and have over a decade of experience developing web tools and web commercial applications.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                          >
                            Know More
                          </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                          >
                            Work Experience
                          </button>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            
            </div>
        </div>
        <div class="card mt-5 md:col-span-2 md:mt-0"> <Slides></Slides></div>
      </div>
 
     </>
    );
}
