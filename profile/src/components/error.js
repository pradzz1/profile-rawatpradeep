import React from 'react';

const error = () => {
return (<section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
<img className="absolute top-0 right-0 md:-mr-96 md:-mt-112" src="zospace-assets/lines/circle.svg" alt=""/>
<img className="absolute top-0 right-0 h-40 lg:h-80 lg:mr-64 lg:mt-24" src="zospace-assets/images/five-stars.svg" alt=""/>
<img className="hidden lg:block absolute top-0 left-0 h-64 -ml-10" src="zospace-assets/images/blue-double-circle.svg" alt=""/>
<img className="absolute bottom-0 left-0 h-80" src="zospace-assets/lines/half-double-circle.svg" alt=""/>
<div className="relative container px-4 mx-auto">
  <div className="max-w-3xl mx-auto">
    <div className="max-w-xl">
      <a className="inline-block text-white text-xl font-bold" href="#">
        <img className="h-7" src="zospace-assets/logos/zospace-logo.svg" alt="" width="auto"/>
      </a>
      <h2 className="mt-12 mb-14 text-5xl font-bold font-heading text-white">Sorry, we can&apos;t find that page or something has gone wrong...</h2>
      <p className="mb-20 text-xl text-gray-200">Go back or try here:</p>
      <a className="inline-block px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200" href="/profile-rawatpradeep">Start again</a>
    </div>
  </div>
</div>
</section>);
}
export default error;