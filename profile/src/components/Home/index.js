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
      <><Slides></Slides>
       <div className="toast-buttons">
      {
        BUTTON_PROPS.map(e => 
         <Button 
            key={e.id}
            className={`${position === 'Select Position' ? `${e.className} btn-disable` : `${e.className}`}`}
            label={e.label}
            handleClick={() => showToast(e.type)}
          />    )
      }
    </div><Toast 
      toastList={list}
      position={position}
      autoDelete={true}
      autoDeleteTime={autoDeleteTime}
    />
      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>

      <Carousel>
     </Carousel> </div>
     <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">

                    <span className="sr-only">Workflow</span>
                    <img
                      alt="Workflow"
                      className="h-8 w-auto sm:h-10"
                      style={{ 'height': '40px' }}
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />

                    <div className="-mr-2 flex items-center md:hidden">
                      <span className="sr-only">Open main menu</span>

                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>


            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    style={{ 'height': '40px' }}
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="" />
                </div>
                <div className="-mr-2">
                  <span className="sr-only">Close main menu</span>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>




            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>{' '}
                  <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            style={{ 'height': '40px' }}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="" />
        </div>
      </div></>
    );
}
