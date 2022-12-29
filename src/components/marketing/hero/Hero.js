import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import BlockViewer from '../../blockviewer/BlockViewer';

const Hero = () => {

    const block1 = `
<div className="grid grid-nogutter surface-section text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Create the screens your</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    `;

    const block2 = `
<div className="relative p-8 overflow-hidden">
    <img src="assets/images/blocks/hero/hero-2.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

    <div className="text-center my-6 relative">
        <div className="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div className="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Button label="Learn More" type="button"></Button>

        <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div className="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" className="text-white mr-3">
                <i className="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" className="text-white mr-3">
                <i className="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-white">
                <i className="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="relative p-8 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: 'url("assets/images/blocks/hero/hero-3.jpg")' }}>
    <div className="text-center my-6 relative">
        <div className="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
        <div className="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
        <p className="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style={{ maxWidth: '500px' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="flex align-items-center justify-content-center flex-wrap">
            <InputText className="bg-transparent border-white p-3 mr-3 mt-3" style={{ borderRadius: '40px' }} size={30} placeholder="Enter your email" />
            <Button label="Notify Me" className="p-3 mt-3" style={{ borderRadius: '40px' }}></Button>
        </div>
    </div>
</div>
    `;


    const block4 = `
<div className="p-6 text-center" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
    <div className="surface-900 text-0 p-2 mx-auto mb-4" style={{ maxWidth: '250px', borderRadius: '40px' }}>🔥 Get started in no time</div>
    <div className="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
    <div className="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
    <Button label="Get Started" className="p-button-outlined p-3 font-bold"></Button>

    <img src="assets/images/blocks/hero/ultima.png" alt="ultima" className="block mx-auto mt-6 w-full md:w-auto border-round-top sm:w-full md:w-8 lg:w-7 xl:w-6" style={{ marginBottom: '-3rem' }} />
</div>
    `;

    const block5 = `
<div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-12 lg:w-6 p-4">
            <h1 className="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span className="text-yellow-500 underline">for free</span></h1>
            <p className="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
            <ul className="list-none p-0 m-0">
                <li className="mb-3 flex align-items-center"><i className="pi pi-compass text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-map text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                <li className="mb-3 flex align-items-center"><i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
            </ul>
            <Button label="Claim Your Account" className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium" />
        </div>
        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
            <img src="assets/images/blocks/hero/hero-illustration.svg" alt="Image" className="w-full lg:w-auto" />
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap">
        <div className="w-full xl:w-6 p-3 pr-5">
            <span className="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
            <div className="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
            <p className="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
            <div className="relative w-full xl:w-30rem">
                <InputText placeholder="Enter your email" className="py-3 pl-3 w-full" style={{ borderRadius: '30px', paddingRight: '8rem' }} />
                <button className="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style={{ borderRadius: '30px', top: '0', right: '0' }}>Join Now</button>
            </div>
        </div>
        <div className="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style={{ borderRadius: '30px' }}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: '0' }}>
                <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/Prz3phy2bHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    </div>
</div>
    `;


    return (
        <>
            <div className="block-category-title">Hero</div>
            <BlockViewer header="Right Aligned Image" code={block1} free>
                <div className="grid grid-nogutter surface-section text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <Button label="Learn More" type="button" className="mr-3 p-button-raised"></Button>
                            <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img src="assets/images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Light Image Background" code={block2}>
                <div className="relative p-8 overflow-hidden">
                    <img src="assets/images/blocks/hero/hero-2.jpg" alt="hero-2" className="absolute top-0 left-0 w-auto h-full block md:w-full" />

                    <div className="text-center my-6 relative">
                        <div className="text-6xl text-white font-bold mb-1">The Platform For</div>
                        <div className="text-6xl text-primary font-bold mb-4">Today's Generation</div>
                        <p className="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style={{ maxWidth: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button"></Button>

                        <p className="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
                        <div className="flex justify-content-center align-items-center">
                            <a href="https://www.apple.com" className="text-white mr-3">
                                <i className="pi pi-apple text-2xl"></i>
                            </a>
                            <a href="https://play.google.com" className="text-white mr-3">
                                <i className="pi pi-android text-2xl"></i>
                            </a>
                            <a href="https://www.facebook.com" className="text-white">
                                <i className="pi pi-facebook text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Dark Image Background" code={block3}>
                <div className="relative p-8 overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: 'url("assets/images/blocks/hero/hero-3.jpg")' }}>
                    <div className="text-center my-6 relative">
                        <div className="text-6xl font-bold mb-1 text-white">Bring Out The Best</div>
                        <div className="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
                        <p className="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style={{ maxWidth: '500px' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <div className="flex align-items-center justify-content-center flex-wrap">
                            <InputText className="bg-transparent border-white p-3 mr-3 mt-3" style={{ borderRadius: '40px' }} size={30} placeholder="Enter your email" />
                            <Button label="Notify Me" className="p-3 mt-3" style={{ borderRadius: '40px' }}></Button>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Centered Product Image" code={block4}>
                <div className="p-6 text-center" style={{ background: 'radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}>
                    <div className="surface-900 text-0 p-2 mx-auto mb-4" style={{ maxWidth: '250px', borderRadius: '40px' }}>🔥 Get started in no time</div>
                    <div className="text-6xl text-900 font-bold mb-1">Highly Customizable</div>
                    <div className="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
                    <Button label="Get Started" className="p-button-outlined p-3 font-bold"></Button>

                    <img src="assets/images/blocks/hero/ultima.png" alt="ultima" className="block mx-auto mt-6 w-full md:w-auto border-round-top sm:w-full md:w-8 lg:w-7 xl:w-6" style={{ marginBottom: '-3rem' }} />
                </div>
            </BlockViewer>

            <BlockViewer header="Dark with Illustration" code={block5}>
                <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-12 lg:w-6 p-4">
                            <h1 className="text-6xl font-bold text-white mt-0 mb-3">Social CRM that helps you grow faster <span className="text-yellow-500 underline">for free</span></h1>
                            <p className="text-3xl text-gray-400 mt-0 mb-5">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
                            <ul className="list-none p-0 m-0">
                                <li className="mb-3 flex align-items-center"><i className="pi pi-compass text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Senectus et netus et malesuada fames.</span></li>
                                <li className="mb-3 flex align-items-center"><i className="pi pi-map text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Orci a scelerisque purus semper eget.</span></li>
                                <li className="mb-3 flex align-items-center"><i className="pi pi-calendar text-yellow-500 text-xl mr-2"></i><span className="text-gray-400 line-height-3">Aenean sed adipiscing diam donec adipiscing tristique.</span></li>
                            </ul>
                            <Button label="Claim Your Account" className="block mt-7 mb-7 lg:mb-0 p-button-rounded p-button-success p-button-lg font-medium" />
                        </div>
                        <div className="w-12 lg:w-6 text-center lg:text-right overflow-hidden">
                            <img src="assets/images/blocks/hero/hero-illustration.svg" alt="Image" className="w-full lg:w-auto" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Form and Video Aligned Image" code={block6}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-6 p-3 pr-5">
                            <span className="text-indigo-600 font-bold mb-4 block">SUPERCHARGE YOUR PRODUCT</span>
                            <div className="font-bold text-900 text-6xl mb-4">Take Control of Your Marketing Strategy</div>
                            <p className="mt-0 mb-5 text-700 line-height-3 text-xl">Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.</p>
                            <div className="relative w-full xl:w-30rem">
                                <InputText placeholder="Enter your email" className="py-3 pl-3 w-full" style={{ borderRadius: '30px', paddingRight: '8rem' }} />
                                <button className="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer" style={{ borderRadius: '30px', top: '0', right: '0' }}>Join Now</button>
                            </div>
                        </div>
                        <div className="w-full xl:w-6 p-3 flex align-items-center justify-content-center bg-indigo-50 p-4 lg:p-8 mt-5 xl:mt-0" style={{ borderRadius: '30px' }}>
                            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: '0' }}>
                                <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/Prz3phy2bHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Hero;
