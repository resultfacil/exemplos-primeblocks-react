import React, { useRef } from "react";
import BlockViewer from "../../blockviewer/BlockViewer";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";

const NavBar = () => {
    const rootBtnRef1 = useRef(null);
    const rootBtnRef2 = useRef(null);
    const rootBtnRef3 = useRef(null);
    const rootBtnRef4 = useRef(null);
    const rootBtnRef5 = useRef(null);
    const rootBtnRef6 = useRef(null);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);
    const btnRef10 = useRef(null);

    const block1 = `
<div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" />
    <StyleClass nodeRef={rootBtnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef1} className="p-ripple cursor-pointer block lg:hidden text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>

    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
        <section></section>
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
                <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef1} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150">
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>

                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef2} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                <span>Support</span>
                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-cloud mr-2"></i>
                                    <span className="font-medium">Help Center</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-question-circle mr-2"></i>
                                    <span className="font-medium">Faq</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold" />
            <Button label="Register" className="ml-3 p-button-outlined font-bold" />
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" className="mr-0 lg:mr-5" />
    <StyleClass nodeRef={rootBtnRef2} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef2} className="cursor-pointer block lg:hidden text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
                <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef3} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" >
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                    <div className="grid">
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-list text-2xl"></i>
                                </div>
                                <div>
                                    <span>Features</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-shield text-2xl"></i>
                                </div>
                                <div>
                                    <span>Solutions</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-users text-2xl"></i>
                                </div>
                                <div>
                                    <span>Customers</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-question-circle text-2xl"></i>
                                </div>
                                <div>

                                    <span>Faq</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-file text-2xl"></i>
                                </div>
                                <div>
                                    <span>Case Studies</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                        <div className="col-12 lg:col-6">
                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                    <i className="pi pi-search text-2xl"></i>
                                </div>
                                <div>
                                    <span>Library</span>
                                    <div className="text-600 text-sm mt-1">Subtext of item</div>
                                </div>
                                <Ripple />
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold" />
            <Button label="Register" className="ml-3 font-bold" />
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50" />
    <StyleClass nodeRef={rootBtnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef3} className="p-ripple cursor-pointer block lg:hidden text-white" >
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>

    <div className="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
                <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef4} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150" >
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef5} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                <span>Support</span>
                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-cloud mr-2"></i>
                                    <span className="font-medium">Help Center</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-question-circle mr-2"></i>
                                    <span className="font-medium">Faq</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
            <Button label="Login" icon="pi pi-user" className="p-button font-bold" />
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="50" className="block lg:hidden" />
    <StyleClass nodeRef={rootBtnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef4} className="p-ripple cursor-pointer block lg:hidden text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
            <li className="relative">
                <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef6} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150" >
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef7} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                <span>Support</span>
                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-cloud mr-2"></i>
                                    <span className="font-medium">Help Center</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-question-circle mr-2"></i>
                                    <span className="font-medium">Faq</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="w-4 text-center hidden lg:block">
            <img src="assets/images/blocks/logos/hyper-700.svg" alt="Image" height="50" />
        </div>
        <div className="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
            <Button label="Login" className="font-bold p-button-outlined p-button-rounded" />
            <Button label="Register" className="ml-3 font-bold p-button-rounded" />
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-overlay shadow-2 flex relative lg:static align-items-center lg:align-items-stretch" style={{ minHeight: '5rem' }}>
    <div className="bg-indigo-500 inline-flex justify-content-center align-items-center" style={{ width: '5rem', height: '5rem' }}>
        <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50" />
    </div>
    <StyleClass nodeRef={rootBtnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef5} className="p-ripple cursor-pointer block lg:hidden text-700 mr-6 ml-auto">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-0 pt-3 lg:pt-0 z-1 shadow-2 lg:shadow-none">
        <ul className="list-none p-0 m-0 flex text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef8} className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none m-0 px-5 lg:p-0 py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Features</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Solutions</span>
                            <Ripple />
                        </a>
                    </li>
                    <li>
                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Customers</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef9} className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                <span>Support</span>
                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-cloud mr-2"></i>
                                    <span className="font-medium">Help Center</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="relative">
                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                    <i className="pi pi-question-circle mr-2"></i>
                                    <span className="font-medium">Faq</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold h-full" style={{ borderRadius: '0' }} />
            <Button label="Register" className="ml-3 font-bold h-full" style={{ borderRadius: '0' }} />
        </div>
    </div>
</div>
    `;

    const block6 = `
<div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="50" />
    <StyleClass nodeRef={rootBtnRef6} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={rootBtnRef6} className="p-ripple cursor-pointer block lg:hidden text-gray-400">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none">
        <section></section>
        <ul className="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
            <li>
                <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef10} className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer" >
                        <span>Products</span>
                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                    <div className="flex flex-wrap p-6">
                        <div className="w-full lg:w-6 mb-4 lg:mb-0">
                            <span className="block font-normal text-2xl mb-4 text-white">Products</span>
                            <p className="line-height-3 m-0 text-gray-400">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                        </div>
                        <div className="w-full lg:w-6">
                            <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Shodan</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Bastion</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Amet purus gravida quis blandit.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Hodly</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Peak</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Feugiat pretium nibh ipsum consequat.</p>
                                </div>
                                <div className="px-0 lg:px-3 py-3">
                                    <span className="text-white">Franki</span>
                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">Tristique nulla aliquet enim tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Corporate</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Resources</span>
                    <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                    <span>Pricing</span>
                    <Ripple />
                </a>
            </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
            <Button label="Login" className="p-button-text font-bold" />
            <Button label="Register" className="ml-3 font-bold" />
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Navbar</div>
            <BlockViewer
                header="Centered Menu"
                code={block1}
                previewStyle={{ height: "600px" }}
            >
                <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                    <img
                        src="assets/images/blocks/logos/hyper.svg"
                        alt="Image"
                        height="50"
                    />
                    <StyleClass
                        nodeRef={rootBtnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef1}
                            className="p-ripple cursor-pointer block lg:hidden text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>

                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
                        <section></section>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                            <li className="relative">
                                <StyleClass
                                    nodeRef={btnRef1}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef1}
                                        className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                            <span>Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                            <span>Solutions</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                            <span>Customers</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef2}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef2}
                                                className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                                <span>Support</span>
                                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-cloud mr-2"></i>
                                                    <span className="font-medium">
                                                        Help Center
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-question-circle mr-2"></i>
                                                    <span className="font-medium">
                                                        Faq
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button
                                label="Login"
                                className="p-button-text font-bold"
                            />
                            <Button
                                label="Register"
                                className="ml-3 p-button-outlined font-bold"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Left Aligned MegaMenu"
                code={block2}
                previewStyle={{ height: "600px" }}
            >
                <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                    <img
                        src="assets/images/blocks/logos/hyper.svg"
                        alt="Image"
                        height="50"
                        className="mr-0 lg:mr-5"
                    />
                    <StyleClass
                        nodeRef={rootBtnRef2}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef2}
                            className="cursor-pointer block lg:hidden text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                            <li className="relative">
                                <StyleClass
                                    nodeRef={btnRef3}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="fadein"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef3}
                                        className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
                                    <div className="grid">
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-list text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Features</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-shield text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Solutions</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-users text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Customers</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-question-circle text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Faq</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-file text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Case Studies</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                        <div className="col-12 lg:col-6">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round">
                                                <div className="p-2 border-round bg-blue-600 text-0 mr-3">
                                                    <i className="pi pi-search text-2xl"></i>
                                                </div>
                                                <div>
                                                    <span>Library</span>
                                                    <div className="text-600 text-sm mt-1">
                                                        Subtext of item
                                                    </div>
                                                </div>
                                                <Ripple />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button
                                label="Login"
                                className="p-button-text font-bold"
                            />
                            <Button
                                label="Register"
                                className="ml-3 font-bold"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Colored Right Aligned Menu"
                code={block3}
                previewStyle={{ height: "600px" }}
            >
                <div className="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                    <img
                        src="assets/images/blocks/logos/hyper-light.svg"
                        alt="Image"
                        height="50"
                    />
                    <StyleClass
                        nodeRef={rootBtnRef3}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef3}
                            className="p-ripple cursor-pointer block lg:hidden text-white"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>

                    <div className="align-items-center flex-grow-1 lg:justify-content-end hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 px-6 lg:px-0 z-3 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-white select-none flex-column lg:flex-row cursor-pointer">
                            <li className="relative">
                                <StyleClass
                                    nodeRef={btnRef4}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef4}
                                        className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-indigo-100 font-medium transition-colors transition-duration-150"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem text-900">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                            <span>Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                            <span>Solutions</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                            <span>Customers</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef5}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef5}
                                                className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                                <span>Support</span>
                                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-cloud mr-2"></i>
                                                    <span className="font-medium">
                                                        Help Center
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-question-circle mr-2"></i>
                                                    <span className="font-medium">
                                                        Faq
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-indigo-100 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:ml-5">
                            <Button
                                label="Login"
                                icon="pi pi-user"
                                className="p-button font-bold"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Centered Logo"
                code={block4}
                previewStyle={{ height: "600px" }}
            >
                <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                    <img
                        src="assets/images/blocks/logos/hyper-700.svg"
                        alt="Image"
                        height="50"
                        className="block lg:hidden"
                    />
                    <StyleClass
                        nodeRef={rootBtnRef4}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef4}
                            className="p-ripple cursor-pointer block lg:hidden text-700"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
                            <li className="relative">
                                <StyleClass
                                    nodeRef={btnRef6}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef6}
                                        className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                            <span>Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                            <span>Solutions</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                            <span>Customers</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef7}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef7}
                                                className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                                <span>Support</span>
                                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-cloud mr-2"></i>
                                                    <span className="font-medium">
                                                        Help Center
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-question-circle mr-2"></i>
                                                    <span className="font-medium">
                                                        Faq
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="w-4 text-center hidden lg:block">
                            <img
                                src="assets/images/blocks/logos/hyper-700.svg"
                                alt="Image"
                                height="50"
                            />
                        </div>
                        <div className="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
                            <Button
                                label="Login"
                                className="font-bold p-button-outlined p-button-rounded"
                            />
                            <Button
                                label="Register"
                                className="ml-3 font-bold p-button-rounded"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Full Height Menu"
                code={block5}
                previewStyle={{ height: "600px" }}
            >
                <div
                    className="surface-overlay shadow-2 flex relative lg:static align-items-center lg:align-items-stretch"
                    style={{ minHeight: "5rem" }}
                >
                    <div
                        className="bg-indigo-500 inline-flex justify-content-center align-items-center"
                        style={{ width: "5rem", height: "5rem" }}
                    >
                        <img
                            src="assets/images/blocks/logos/hyper-light.svg"
                            alt="Image"
                            height="50"
                        />
                    </div>
                    <StyleClass
                        nodeRef={rootBtnRef5}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef5}
                            className="p-ripple cursor-pointer block lg:hidden text-700 mr-6 ml-auto"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-0 pt-3 lg:pt-0 z-1 shadow-2 lg:shadow-none">
                        <ul className="list-none p-0 m-0 flex text-900 select-none flex-column lg:flex-row cursor-pointer">
                            <li className="relative">
                                <StyleClass
                                    nodeRef={btnRef8}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef8}
                                        className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <ul className="list-none m-0 px-5 lg:p-0 py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                            <span>Features</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                            <span>Solutions</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                            <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                            <span>Customers</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="relative">
                                        <StyleClass
                                            nodeRef={btnRef9}
                                            selector="@next"
                                            enterClassName="hidden"
                                            enterActiveClassName="scalein"
                                            leaveToClassName="hidden"
                                            leaveActiveClassName="fadeout"
                                            hideOnOutsideClick
                                        >
                                            <a
                                                ref={btnRef9}
                                                className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150"
                                            >
                                                <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                                <span>Support</span>
                                                <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                            <li>
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-cloud mr-2"></i>
                                                    <span className="font-medium">
                                                        Help Center
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li className="relative">
                                                <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150">
                                                    <i className="pi pi-question-circle mr-2"></i>
                                                    <span className="font-medium">
                                                        Faq
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-6 lg:px-5 py-3 lg:py-0 h-full align-items-center hover:surface-50 font-medium transition-colors transition-duration-150">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 px-6 lg:px-0 mt-3 lg:mt-0">
                            <Button
                                label="Login"
                                className="p-button-text font-bold h-full"
                                style={{ borderRadius: "0" }}
                            />
                            <Button
                                label="Register"
                                className="ml-3 font-bold h-full"
                                style={{ borderRadius: "0" }}
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer
                header="Dark Mega Menu"
                code={block6}
                previewStyle={{ height: "600px" }}
            >
                <div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative">
                    <img
                        src="assets/images/blocks/logos/hyper-light.svg"
                        alt="Image"
                        height="50"
                    />
                    <StyleClass
                        nodeRef={rootBtnRef6}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={rootBtnRef6}
                            className="p-ripple cursor-pointer block lg:hidden text-gray-400"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 px-6 lg:px-0 shadow-2 lg:shadow-none">
                        <section></section>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center text-gray-400 select-none flex-column lg:flex-row">
                            <li>
                                <StyleClass
                                    nodeRef={btnRef10}
                                    selector="@next"
                                    enterClassName="hidden"
                                    enterActiveClassName="scalein"
                                    leaveToClassName="hidden"
                                    leaveActiveClassName="fadeout"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef10}
                                        className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer"
                                    >
                                        <span>Products</span>
                                        <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="lg:absolute bg-gray-800 hidden origin-top left-0 top-100 w-full">
                                    <div className="flex flex-wrap p-6">
                                        <div className="w-full lg:w-6 mb-4 lg:mb-0">
                                            <span className="block font-normal text-2xl mb-4 text-white">
                                                Products
                                            </span>
                                            <p className="line-height-3 m-0 text-gray-400">
                                                Nisl rhoncus mattis rhoncus
                                                urna. Sed enim ut sem viverra
                                                aliquet eget sit amet tellus.
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6">
                                            <div className="flex flex-wrap border-bottom-1 border-gray-700 pb-3 mb-3">
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">
                                                        Shodan
                                                    </span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                                                        Porta lorem mollis
                                                        aliquam ut porttitor leo
                                                        a diam.
                                                    </p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">
                                                        Bastion
                                                    </span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                                                        Amet purus gravida quis
                                                        blandit.
                                                    </p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">
                                                        Hodly
                                                    </span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                                                        Aenean vel elit
                                                        scelerisque mauris.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap">
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">
                                                        Peak
                                                    </span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                                                        Feugiat pretium nibh
                                                        ipsum consequat.
                                                    </p>
                                                </div>
                                                <div className="px-0 lg:px-3 py-3">
                                                    <span className="text-white">
                                                        Franki
                                                    </span>
                                                    <p className="text-sm text-gray-400 mt-2 mb-0 line-height-3">
                                                        Tristique nulla aliquet
                                                        enim tortor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                                    <span>Corporate</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                                    <span>Resources</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 cursor-pointer">
                                    <span>Pricing</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none border-gray-800 py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button
                                label="Login"
                                className="p-button-text font-bold"
                            />
                            <Button
                                label="Register"
                                className="ml-3 font-bold"
                            />
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default NavBar;
