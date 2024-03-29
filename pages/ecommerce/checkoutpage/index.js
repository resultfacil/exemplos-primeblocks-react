import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { Badge } from "primereact/badge";
import BlockViewer from "../../../demo/components/BlockViewer";

const CheckoutPage = () => {
    const [value1, setValue1] = useState("");
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const quantities = [1, 1, 1];

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);

    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];

    const block1 = `
<div className="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
    <span className="text-0">Sign Up for 15% off your first order</span>
    <a tabIndex="0" className="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0">
        <img src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png" className="mr-2" alt="Flag" />
        <span className="text-0">EUR</span>
    </a>
</div>
<div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
    <StyleClass nodeRef={btnRef1} selector="#nav-2" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef1} className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div id="nav-2" className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0">
        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary
        py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto">
                        <span>Women</span>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                    <div className="grid flex-wrap">
                        <div className="col-12 md:col-6 xl:col-3">
                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef3} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Clothing</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="hidden lg:block">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                </li>
                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">Clothing</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Dresses</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Jeans</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Pants</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Skirts</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Sweaters</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Blouses</li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3">
                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef4} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Shoes</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="hidden lg:block">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                </li>
                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">Shoes</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Athletic</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Boots</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Sneakers</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Flats</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Outdoor</li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3">
                            <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" leaveToClassName="hidden">
                                <a ref={btnRef5} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Accessories</a>
                            </StyleClass>

                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="hidden lg:block">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                </li>
                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">Accessories</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Handbags</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Gloves</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Belts</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Hats</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Earmuffs</li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6 xl:col-3">
                            <StyleClass nodeRef={btnRef6} selector="@next" enterClassName="hidden" leaveToClassName="hidden" >
                                <a ref={btnRef6} className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none">Beauty</a>
                            </StyleClass>
                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                <li className="hidden lg:block">
                                    <img src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png" alt="Image" height="160" style={{ borderRadius: '12px' }} />
                                </li>
                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">Beauty</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Anklets</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Bracelets</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Earrings</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Necklaces</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Rings</li>
                                <li className="mb-3 cursor-pointer hover:text-900">Wedding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef7} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                        <span>Men</span>
                        <Ripple />
                    </a>
                </StyleClass>

                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
            <li className="flex flex-column lg:flex-row">
                <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <a ref={btnRef8} className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
                        <span>Kids</span>
                    </a>
                </StyleClass>
                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                </div>
            </li>
        </ul>
    </div>

    <div className="flex align-items-center justify-content-center py-3">
        <img src="/demo/images/blocks/logos/peak-700.svg" alt="Image" height="40" />
    </div>
    <div className="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
        <ul className="list-none p-0 m-0 flex w-full" style={{ minHeight: '30px' }}>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                    <i className="pi pi-search text-xl"></i>
                    <span className="hidden">Search</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i className="pi pi-heart text-xl"></i>
                    <span className="hidden">Favorites</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                    <i className="pi pi-user text-xl"></i>
                    <span className="hidden">Sign In</span>
                    <Ripple />
                </a>
            </li>
            <li className="flex flex-auto lg:flex-initial justify-content-center">
                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 text-700 hover:text-primary">
                    <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                    <span className="hidden">Cart</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div >
<div className="flex w-full lg:w-auto border-y-1 surface-border surface-overlay lg:hidden py-3 lg:py-0">
    <ul className="list-none p-0 m-0 flex w-full" style={{ minHeight: '30px' }}>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                <i className="pi pi-search text-xl"></i>
                <span className="hidden">Search</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                <i className="pi pi-heart text-xl"></i>
                <span className="hidden">Favorites</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                <i className="pi pi-user text-xl"></i>
                <span className="hidden">Sign In</span>
                <Ripple />
            </a>
        </li>
        <li className="flex flex-auto lg:flex-initial justify-content-center">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 text-700 hover:text-primary">
                <i className="pi pi-shopping-cart text-xl p-overlay-badge"><Badge /></i>
                <span className="hidden">Cart</span>
                <Ripple />
            </a>
        </li>
    </ul>
</div>

<div className="surface-section">
    <div className="grid grid-nogutter">
        <div className="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
            <ul className="flex list-none flex-wrap p-0 mb-6">
                <li className="flex align-items-center text-primary mr-2">Cart <i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Information<i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Shipping<i className="pi pi-chevron-right text-500 text-xs ml-2"></i></li>
                <li className="flex align-items-center text-500 mr-2">Payment</li>
            </ul>
            <div className="grid formgrid">
                <div className="col-12 field mb-6">
                    <span className="text-900 text-2xl block font-medium mb-5">Contact Information</span>
                    <input id="email" placeholder="Email" type="text" className="p-inputtext w-full mb-4" />
                    <div className="flex align-items-center">
                        <Checkbox id="checkbox1" checked={checked1} onChange={(e) => setChecked1(e.checked)} label="Email me with news and offers" className="text-900" />
                        <label htmlFor="checkbox1" className="ml-2 text-900">Email me with news and offers</label>
                    </div>
                </div>
                <div className="col-12 field mb-4">
                    <span className="text-900 text-2xl block font-medium mb-5">Shipping</span>
                    <Dropdown options={cities} value={selectedCity} onChange={(e) => setSelectedCity(e.value)} placeholder="Country / Region" optionLabel="name" showClear className="w-full"></Dropdown>
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="name" placeholder="Name" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="lastname" placeholder="Last Name" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 field mb-4">
                    <input id="address" placeholder="Address" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 field mb-4">
                    <input id="address2" placeholder="Apartment, suite, etc" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="pc" placeholder="Postal Code" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <input id="city" placeholder="City" type="text" className="p-inputtext w-full" />
                </div>
                <div className="col-12 lg:col-6 field mb-4">
                    <div className="flex align-items-center">
                        <Checkbox id="checkbox2" checked={checked2} onChange={(e) => setChecked2(e.checked)} className="text-900" />
                        <label htmlFor="checkbox2" className="ml-2 text-900">Save for next purchase</label>
                    </div>
                </div>
                <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                    <Button className="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4" label="Return to Cart" />
                    <Button className="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2" label="Continue to Shipping" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
            <div className="border-bottom-1 pb-3 surface-border">
                <span className="text-900 font-medium text-xl">Your Cart</span>
            </div>
            <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png" className="w-8rem h-8rem flex-shrink-0" alt="checkoutform-1-2" />
                <div className="flex-auto mt-3 md:mt-0 md:ml-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <span className="text-900 font-medium">Product Name</span>
                        <span className="text-900 font-bold">$123.00</span>
                    </div>
                    <div className="text-600 text-sm mb-3">Black | Large</div>
                    <div className="flex flex-auto justify-content-between align-items-center">
                        <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-2rem text-center py-2 px-1 border-transparent" value={quantities[0]}
                            className="border-1 surface-border border-round" decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                        <Button icon="pi pi-trash" className="p-button-text p-button-rounded" />
                    </div>
                </div>
            </div>
            <div className="py-2 mt-3 border-bottom-1 surface-border">
                <div className="p-inputgroup mb-3">
                    <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="Promo code" className="w-full" />
                    <Button label="Apply" disabled={!value1.length} />
                </div>
            </div >
            <div className="py-2 mt-3">
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-medium">Subtotal</span>
                    <span className="text-900">$123.00</span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-medium">Shipping</span>
                    <span className="text-primary font-bold">Free</span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                    <span className="text-900 font-bold">Total</span>
                    <span className="text-900 font-medium text-xl">$123.00</span>
                </div>
            </div>
            <div className="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                <img src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png" className="mr-2" alt="Country Flag" />
                <span className="text-black-alpha-90 font-medium">No additional duties or taxes.</span>
            </div>
        </div>
    </div>
</div>

<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mr-3 -ml-3">
        <div className="col-12 lg:col-4 p-3">
            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">COMPANY</span>
            <ul className="list-none p-0">
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Factories</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Careers</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Environmental Initiatives</a>
                </li>
            </ul>
        </div>

        <div className="col-12 lg:col-4 p-3">
            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">ABOUT PEAK</span>
            <span className="text-500 mt-3">Urna molestie at elementum eu facilisis. Libero justo laoreet sit amet cursus. Ornare quam viverra orci sagittis eu volutpat odio. Id porta nibh venenatis cras sed felis eget velit. In hac habitasse platea dictumst quisque.</span>
        </div>

        <div className="col-12 lg:col-4 p-3">
            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">ACCOUNT</span>
            <ul className="list-none p-0">
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Manage Account</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Saved Items</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">My Cart</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Wishlist</a>
                </li>
                <li className="mt-3">
                    <a tabIndex="0" className="cursor-pointer text-500 hover:text-900">Orders & Returns</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div className="surface-100 px-4 py-4 md:px-6 lg:px-8 flex flex-column justify-content-between align-items-center">
    <span className="text-600">© 2022, Peak. Powered by PrimeBlocks.</span>
    <div className="col-fixed flex align-items-center mt-4">
        <i className="pi pi-twitter p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-facebook p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-youtube p-1 text-xl text-900 cursor-pointer mr-3"></i>
        <i className="pi pi-google p-1 text-xl text-900 cursor-pointer mr-3"></i>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Checkout Pages</div>
            <BlockViewer header="With Multi-Step" code={block1}>
                <div className="surface-900 px-4 lg:px-8 py-3 lg:py-2 flex flex-column lg:flex-row w-full justify-content-between align-items-center">
                    <span className="text-0">
                        Sign Up for 15% off your first order
                    </span>
                    <a
                        tabIndex="0"
                        className="cursor-pointer h-full inline-flex align-items-center mt-3 lg:mt-0 lg:py-0"
                    >
                        <img
                            src="/demo/images/blocks/ecommerce/storefront/storefront-1-19.png"
                            className="mr-2"
                            alt="Flag"
                        />
                        <span className="text-0">EUR</span>
                    </a>
                </div>
                <div className="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border">
                    <StyleClass
                        nodeRef={btnRef1}
                        selector="#nav-2"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <a
                            ref={btnRef1}
                            className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3"
                        >
                            <i className="pi pi-bars text-4xl"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <div
                        id="nav-2"
                        className="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
                    >
                        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
                            <li className="flex flex-column lg:flex-row">
                                <StyleClass
                                    nodeRef={btnRef2}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef2}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-primary
                        py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base lg:font-base w-full lg:w-auto"
                                    >
                                        <span>Women</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 pl-8 pr-6 lg:px-6 py-0 lg:py-6">
                                    <div className="grid flex-wrap">
                                        <div className="col-12 md:col-6 xl:col-3">
                                            <StyleClass
                                                nodeRef={btnRef3}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef3}
                                                    className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                >
                                                    Clothing
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="hidden lg:block">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-1.png"
                                                        alt="Image"
                                                        height="160"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                    />
                                                </li>
                                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                    Clothing
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Dresses
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Jeans
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Pants
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Skirts
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Sweaters
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Blouses
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 md:col-6 xl:col-3">
                                            <StyleClass
                                                nodeRef={btnRef4}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef4}
                                                    className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                >
                                                    Shoes
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="hidden lg:block">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-2.png"
                                                        alt="Image"
                                                        height="160"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                    />
                                                </li>
                                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                    Shoes
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Athletic
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Boots
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Sneakers
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Flats
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Outdoor
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 md:col-6 xl:col-3">
                                            <StyleClass
                                                nodeRef={btnRef5}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef5}
                                                    className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                >
                                                    Accessories
                                                </a>
                                            </StyleClass>

                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="hidden lg:block">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-3.png"
                                                        alt="Image"
                                                        height="160"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                    />
                                                </li>
                                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                    Accessories
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Handbags
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Gloves
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Belts
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Hats
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Earmuffs
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 md:col-6 xl:col-3">
                                            <StyleClass
                                                nodeRef={btnRef6}
                                                selector="@next"
                                                enterClassName="hidden"
                                                leaveToClassName="hidden"
                                            >
                                                <a
                                                    ref={btnRef6}
                                                    className="font-medium text-lg cursor-pointer text-700 block lg:hidden mb-3 select-none"
                                                >
                                                    Beauty
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-0 pr-0 lg:pl-0 pl-5 m-0 text-700 hidden lg:block">
                                                <li className="hidden lg:block">
                                                    <img
                                                        src="/demo/images/blocks/ecommerce/storenavigation/storenavigation-2-4.png"
                                                        alt="Image"
                                                        height="160"
                                                        style={{
                                                            borderRadius:
                                                                "12px",
                                                        }}
                                                    />
                                                </li>
                                                <li className="font-bold my-5 text-xl text-900 hidden lg:block">
                                                    Beauty
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Anklets
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Bracelets
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Earrings
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Necklaces
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Rings
                                                </li>
                                                <li className="mb-3 cursor-pointer hover:text-900">
                                                    Wedding
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-column lg:flex-row">
                                <StyleClass
                                    nodeRef={btnRef7}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef7}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
                        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                    >
                                        <span>Men</span>
                                        <Ripple />
                                    </a>
                                </StyleClass>

                                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                            <li className="flex flex-column lg:flex-row">
                                <StyleClass
                                    nodeRef={btnRef8}
                                    selector="@next"
                                    enterClassName="hidden"
                                    leaveToClassName="hidden"
                                    hideOnOutsideClick
                                >
                                    <a
                                        ref={btnRef8}
                                        className="p-ripple font-medium inline-flex align-items-center cursor-pointer border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent
                        hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                                    >
                                        <span>Kids</span>
                                    </a>
                                </StyleClass>
                                <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
                                    <div className="border-2 border-dashed surface-border border-round h-full"></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex align-items-center justify-content-center py-3">
                        <img
                            src="/demo/images/blocks/logos/peak-700.svg"
                            alt="Image"
                            height="40"
                        />
                    </div>
                    <div className="lg:flex w-full lg:w-auto hidden py-3 lg:py-0">
                        <ul
                            className="list-none p-0 m-0 flex w-full"
                            style={{ minHeight: "30px" }}
                        >
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                                    <i className="pi pi-search text-xl"></i>
                                    <span className="hidden">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                    <i className="pi pi-heart text-xl"></i>
                                    <span className="hidden">Favorites</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                    <i className="pi pi-user text-xl"></i>
                                    <span className="hidden">Sign In</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="flex flex-auto lg:flex-initial justify-content-center">
                                <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-3 text-700 hover:text-primary">
                                    <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                        <Badge />
                                    </i>
                                    <span className="hidden">Cart</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full lg:w-auto border-y-1 surface-border surface-overlay lg:hidden py-3 lg:py-0">
                    <ul
                        className="list-none p-0 m-0 flex w-full"
                        style={{ minHeight: "30px" }}
                    >
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pr-3 text-700 hover:text-primary">
                                <i className="pi pi-search text-xl"></i>
                                <span className="hidden">Search</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                <i className="pi pi-heart text-xl"></i>
                                <span className="hidden">Favorites</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:px-3 text-700 hover:text-primary">
                                <i className="pi pi-user text-xl"></i>
                                <span className="hidden">Sign In</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="flex flex-auto lg:flex-initial justify-content-center">
                            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer lg:pl-3 pr-1 text-700 hover:text-primary">
                                <i className="pi pi-shopping-cart text-xl p-overlay-badge">
                                    <Badge />
                                </i>
                                <span className="hidden">Cart</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="surface-section">
                    <div className="grid grid-nogutter">
                        <div className="col-12 lg:col-6 h-full px-4 py-8 md:px-6 lg:px-8">
                            <ul className="flex list-none flex-wrap p-0 mb-6">
                                <li className="flex align-items-center text-primary mr-2">
                                    Cart{" "}
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Information
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Shipping
                                    <i className="pi pi-chevron-right text-500 text-xs ml-2"></i>
                                </li>
                                <li className="flex align-items-center text-500 mr-2">
                                    Payment
                                </li>
                            </ul>
                            <div className="grid formgrid">
                                <div className="col-12 field mb-6">
                                    <span className="text-900 text-2xl block font-medium mb-5">
                                        Contact Information
                                    </span>
                                    <input
                                        id="email"
                                        placeholder="Email"
                                        type="text"
                                        className="p-inputtext w-full mb-4"
                                    />
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            id="checkbox1"
                                            checked={checked1}
                                            onChange={(e) =>
                                                setChecked1(e.checked)
                                            }
                                            label="Email me with news and offers"
                                            className="text-900"
                                        />
                                        <label
                                            htmlFor="checkbox1"
                                            className="ml-2 text-900"
                                        >
                                            Email me with news and offers
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 field mb-4">
                                    <span className="text-900 text-2xl block font-medium mb-5">
                                        Shipping
                                    </span>
                                    <Dropdown
                                        options={cities}
                                        value={selectedCity}
                                        onChange={(e) =>
                                            setSelectedCity(e.value)
                                        }
                                        placeholder="Country / Region"
                                        optionLabel="name"
                                        showClear
                                        className="w-full"
                                    ></Dropdown>
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="name"
                                        placeholder="Name"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="lastname"
                                        placeholder="Last Name"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 field mb-4">
                                    <input
                                        id="address"
                                        placeholder="Address"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 field mb-4">
                                    <input
                                        id="address2"
                                        placeholder="Apartment, suite, etc"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="pc"
                                        placeholder="Postal Code"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <input
                                        id="city"
                                        placeholder="City"
                                        type="text"
                                        className="p-inputtext w-full"
                                    />
                                </div>
                                <div className="col-12 lg:col-6 field mb-4">
                                    <div className="flex align-items-center">
                                        <Checkbox
                                            id="checkbox2"
                                            checked={checked2}
                                            onChange={(e) =>
                                                setChecked2(e.checked)
                                            }
                                            className="text-900"
                                        />
                                        <label
                                            htmlFor="checkbox2"
                                            className="ml-2 text-900"
                                        >
                                            Save for next purchase
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 flex flex-column lg:flex-row justify-content-center align-items-center lg:justify-content-end mt-6">
                                    <Button
                                        className="p-button-text mt-3 lg:mt-0 w-full lg:w-auto lg:px-6 flex-order-2 lg:flex-order-1 lg:mr-4"
                                        label="Return to Cart"
                                    />
                                    <Button
                                        className="p-button-primary w-full lg:w-auto lg:px-6 flex-order-1 lg:flex-order-2"
                                        label="Continue to Shipping"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50">
                            <div className="border-bottom-1 pb-3 surface-border">
                                <span className="text-900 font-medium text-xl">
                                    Your Cart
                                </span>
                            </div>
                            <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-2 mt-3 border-bottom-1 surface-border">
                                <img
                                    src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-2.png"
                                    className="w-8rem h-8rem flex-shrink-0"
                                    alt="checkoutform-1-2"
                                />
                                <div className="flex-auto mt-3 md:mt-0 md:ml-3">
                                    <div className="flex align-items-center justify-content-between mb-3">
                                        <span className="text-900 font-medium">
                                            Product Name
                                        </span>
                                        <span className="text-900 font-bold">
                                            $123.00
                                        </span>
                                    </div>
                                    <div className="text-600 text-sm mb-3">
                                        Black | Large
                                    </div>
                                    <div className="flex flex-auto justify-content-between align-items-center">
                                        <InputNumber
                                            showButtons
                                            buttonLayout="horizontal"
                                            min="0"
                                            inputClassName="w-2rem text-center py-2 px-1 border-transparent"
                                            value={quantities[0]}
                                            className="border-1 surface-border border-round"
                                            decrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                            incrementButtonClassName="p-button-text text-600 hover:text-primary py-1 px-1"
                                            incrementButtonIcon="pi pi-plus"
                                            decrementButtonIcon="pi pi-minus"
                                        />
                                        <Button
                                            icon="pi pi-trash"
                                            className="p-button-text p-button-rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 mt-3 border-bottom-1 surface-border">
                                <div className="p-inputgroup mb-3">
                                    <InputText
                                        value={value1}
                                        onChange={(e) =>
                                            setValue1(e.target.value)
                                        }
                                        placeholder="Promo code"
                                        className="w-full"
                                    />
                                    <Button
                                        label="Apply"
                                        disabled={!value1.length}
                                    />
                                </div>
                            </div>
                            <div className="py-2 mt-3">
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-medium">
                                        Subtotal
                                    </span>
                                    <span className="text-900">$123.00</span>
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-medium">
                                        Shipping
                                    </span>
                                    <span className="text-primary font-bold">
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <span className="text-900 font-bold">
                                        Total
                                    </span>
                                    <span className="text-900 font-medium text-xl">
                                        $123.00
                                    </span>
                                </div>
                            </div>
                            <div className="py-2 mt-3 bg-yellow-100 flex align-items-center justify-content-center">
                                <img
                                    src="/demo/images/blocks/ecommerce/checkoutform/checkoutform-1-3.png"
                                    className="mr-2"
                                    alt="Country Flag"
                                />
                                <span className="text-black-alpha-90 font-medium">
                                    No additional duties or taxes.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid -mr-3 -ml-3">
                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">
                                COMPANY
                            </span>
                            <ul className="list-none p-0">
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Factories
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Environmental Initiatives
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">
                                ABOUT PEAK
                            </span>
                            <span className="text-500 mt-3">
                                Urna molestie at elementum eu facilisis. Libero
                                justo laoreet sit amet cursus. Ornare quam
                                viverra orci sagittis eu volutpat odio. Id porta
                                nibh venenatis cras sed felis eget velit. In hac
                                habitasse platea dictumst quisque.
                            </span>
                        </div>

                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4">
                                ACCOUNT
                            </span>
                            <ul className="list-none p-0">
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Manage Account
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Saved Items
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        My Cart
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Wishlist
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a
                                        tabIndex="0"
                                        className="cursor-pointer text-500 hover:text-900"
                                    >
                                        Orders & Returns
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="surface-100 px-4 py-4 md:px-6 lg:px-8 flex flex-column justify-content-between align-items-center">
                    <span className="text-600">
                        © 2022, Peak. Powered by PrimeBlocks.
                    </span>
                    <div className="col-fixed flex align-items-center mt-4">
                        <i className="pi pi-twitter p-1 text-xl text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-facebook p-1 text-xl text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-youtube p-1 text-xl text-900 cursor-pointer mr-3"></i>
                        <i className="pi pi-google p-1 text-xl text-900 cursor-pointer mr-3"></i>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default CheckoutPage;
