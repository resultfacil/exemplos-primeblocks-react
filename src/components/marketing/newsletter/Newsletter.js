import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import BlockViewer from '../../blockviewer/BlockViewer';

const Newsletter = () => {

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-wrap align-items-center">
        <div className="w-full lg:w-6 lg:pr-6">
            <div className="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span className="text-blue-500">free stuff!</span></div>
            <div className="text-600 text-xl line-height-3 lg:mb-0 mb-4" style={{ maxWidth: '450px' }}>Join our community to get weekly updates and unique gifts every friday.</div>
        </div>

        <div className="w-full lg:w-6">
            <div className="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                <InputText placeholder="Enter your email" className="p-3 mr-3 border-400 mb-3 md:mb-0" />
                <Button label="Subscribe" className="py-3 font-bold" />
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
    <div className="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style={{ maxWidth: '350px' }}>
        🔥&nbsp;3,907 businesses already subscribed</div>
    <div className="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
    <p className="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
    </p>

    <div className="flex align-items-center justify-content-center">
        <InputText placeholder="Enter your email" className="p-3 border-noround border-round-left" style={{ minWidth: '250px' }} />
        <Button icon="pi pi-chevron-right" className="border-noround border-round-right p-3 w-auto" />
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="py-6 px-3 md:px-6shadow-2 text-center" style={{ background: 'linear-gradient(180deg, #6372C3 0%, #3F51B5 100%)', borderRadius: '1rem' }}>
        <div className="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
        <span className="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
        <div className="mt-5 mb-3 relative sm:w-20rem mx-auto">
            <InputText className="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style={{ borderRadius: '35px', paddingRight: '6rem' }} value="Your email" />
            <Button type="button" className="absolute" label="Join" style={{ borderRadius: '35px', top: '.5rem', right: '.5rem' }} />
        </div>
        <span className="text-indigo-200">We ensure to protect your privacy. <a tabIndex="0" className="cursor-pointer text-white">Privacy Policy</a></span>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Newsletter</div>
            <BlockViewer header="Simple 2 Column" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="flex flex-wrap align-items-center">
                        <div className="w-full lg:w-6 lg:pr-6">
                            <div className="text-900 font-bold text-2xl mb-3">Get our weekly updates and <span className="text-blue-500">free stuff!</span></div>
                            <div className="text-600 text-xl line-height-3 lg:mb-0 mb-4" style={{ maxWidth: '450px' }}>Join our community to get weekly updates and unique gifts every friday.</div>
                        </div>

                        <div className="w-full lg:w-6">
                            <div className="flex flex-column md:flex-row align-items-start md:align-items-center lg:justify-content-end">
                                <InputText placeholder="Enter your email" className="p-3 mr-3 border-400 mb-3 md:mb-0" />
                                <Button label="Subscribe" className="py-3 font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple Centered" code={block2}>
                <div className="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
                    <div className="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3" style={{ maxWidth: '350px' }}>
                        🔥&nbsp;3,907 businesses already subscribed</div>
                    <div className="text-2xl text-900 font-bold mb-3">Subscribe to our newsletter today</div>
                    <p className="text-600 line-height-3 mb-6">Join our community to receieve the latest updates and special promotions.
                    </p>

                    <div className="flex align-items-center justify-content-center">
                        <InputText placeholder="Enter your email" className="p-3 border-noround border-round-left" style={{ minWidth: '250px' }} />
                        <Button icon="pi pi-chevron-right" className="border-noround border-round-right p-3 w-auto" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Gradient Background" code={block3}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="py-6 px-3 md:px-6shadow-2 text-center" style={{ background: 'linear-gradient(180deg, #6372C3 0%, #3F51B5 100%)', borderRadius: '1rem' }}>
                        <div className="text-white font-bold text-2xl mb-3">Stay in touch with us</div>
                        <span className="block text-indigo-100 font-medium text-xl">Subscribe for updates to ensure that you don’t miss any important news from us.</span>
                        <div className="mt-5 mb-3 relative sm:w-20rem mx-auto">
                            <InputText className="appearance-none bg-indigo-600 border-1 border-indigo-400 py-3 pl-3 w-full p-component text-indigo-100 outline-none" style={{ borderRadius: '35px', paddingRight: '6rem' }} value="Your email" />
                            <Button type="button" className="absolute" label="Join" style={{ borderRadius: '35px', top: '.5rem', right: '.5rem' }} />
                        </div>
                        <span className="text-indigo-200">We ensure to protect your privacy. <a tabIndex="0" className="cursor-pointer text-white">Privacy Policy</a></span>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Newsletter;
