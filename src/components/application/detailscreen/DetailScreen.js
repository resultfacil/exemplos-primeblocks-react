import React, { useRef } from 'react';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import { TabMenu } from 'primereact/tabmenu';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const DetailScreen = () => {

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    const items = [
        { label: 'Overview', icon: 'pi pi-home' },
        { label: 'Members', icon: 'pi pi-users' },
        { label: 'Jobs', icon: 'pi pi-search' },
        { label: 'Profile', icon: 'pi pi-user' },
        { label: 'Settings', icon: 'pi pi-cog' }
    ];

    const block1 = `
<div className="surface-ground">
    <div className="surface-overlay py-3 px-6 border-bottom-1 surface-border flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
        <img src="assets/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6" />
        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
            <a ref={btnRef1} className="p-ripple cursor-pointer block lg:hidden text-700">
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
            </a>
        </StyleClass>
        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i className="pi pi-home mr-2"></i>
                        <span>Home</span>
                        <Ripple />
                    </a>
                </li>
                <li className="lg:relative">
                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <a ref={btnRef2} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span>Customers</span>
                            <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                            <Ripple />
                        </a>
                    </StyleClass>
                    <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                        <li>
                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-user-plus mr-2"></i>
                                <span className="font-medium">Add New</span>
                                <Ripple />
                            </a>
                        </li>
                        <li className="relative">
                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick={true}>
                                <a ref={btnRef3} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                    <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                <li>
                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-shopping-cart mr-2"></i>
                                        <span className="font-medium">Purchases</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">Messages</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-calendar mr-2"></i>
                        <span>Calendar</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-chart-line mr-2"></i>
                        <span>Stats</span>
                        <Ripple />
                    </a>
                </li>
            </ul>
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
                        <div className="block lg:hidden">
                            <div className="text-900 font-medium">Josephine Lillard</div>
                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                        <Ripple />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="surface-section px-6 pt-5">
        <div className="text-3xl font-medium text-900 mb-4">Application</div>
        <TabMenu model={items} activeItem={items[0]} />
    </div >
    <div className="surface-section px-6 py-5">
        <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
            <div className="flex align-items-start flex-column md:flex-row">
                <img src="assets/images/blocks/avatars/circle/avatar-f-1@2x.png" className="mr-5 mb-3 lg:mb-0" alt="avatar-f-1@2x" style={{ width: '90px', height: '90px' }} />
                <div>
                    <span className="text-900 font-medium text-3xl">Kathryn Murphy</span>
                    <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                    <div className="flex align-items-center flex-wrap text-sm">
                        <div className="mr-5 mt-3">
                            <span className="font-medium text-500">FOLLOWERS</span>
                            <div className="text-700 mt-2">333</div>
                        </div>
                        <div className="mr-5 mt-3">
                            <span className="font-medium text-500">PROJECTS</span>
                            <div className="text-700 mt-2">26</div>
                        </div>
                        <div className="mr-5 mt-3">
                            <span className="font-medium text-500">COLLECTIONS</span>
                            <div className="text-700 mt-2">17</div>
                        </div>
                        <div className="mt-3">
                            <span className="font-medium text-500">SHOTS</span>
                            <div className="text-700 mt-2">130</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 lg:mt-0">
                <Button icon="pi pi-bookmark" className="p-button-rounded mr-2" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-success mr-2" />
                <Button icon="pi pi-list" className="p-button-rounded p-button-help" />
            </div>
        </div>
    </div>
    <div className="px-6 py-5">
        <div className="surface-card p-4 shadow-2 border-round">
            <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
            <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
            <ul className="list-none p-0 m-0 border-top-1 border-300">
                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                    <div className="text-500 w-full md:w-2 font-medium">Name</div>
                    <div className="text-900 w-full md:w-10">Elliot Alderson</div>
                </li>
                <li className="flex align-items-center py-3 px-2 flex-wrap">
                    <div className="text-500 w-full md:w-2 font-medium">Bio</div>
                    <div className="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                </li>
                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                    <div className="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
                    <div className="text-900 w-full md:w-10">$150,000</div>
                </li>
                <li className="flex align-items-center py-3 px-2 flex-wrap">
                    <div className="text-500 w-full md:w-2 font-medium">Skills</div>
                    <div className="text-900 w-full md:w-10">
                        <Tag className="mr-2" value="Algorithms" rounded />
                        <Tag className="mr-2" severity="success" value="Javascript" rounded />
                        <Tag className="mr-2" severity="danger" value="Python" rounded />
                        <Tag severity="warning" value="SQL" rounded />
                    </div>
                </li >
                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                    <div className="text-500 w-full md:w-2 font-medium">Repositories</div>
                    <div className="text-900 w-full md:w-10">
                        <div className="grid mt-0 mr-0">
                            <div className="col-12 md:col-6">
                                <div className="p-3 border-1 surface-border border-round surface-card">
                                    <div className="text-900 mb-2">
                                        <i className="pi pi-github mr-2"></i>
                                        <span className="font-medium">PrimeFaces</span>
                                    </div>
                                    <div className="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="p-3 border-1 surface-border border-round surface-card">
                                    <div className="text-900 mb-2">
                                        <i className="pi pi-github mr-2"></i>
                                        <span className="font-medium">PrimeNG</span>
                                    </div>
                                    <div className="text-700">The Most Complete Angular UI Component Library</div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="p-3 border-1 surface-border border-round surface-card">
                                    <div className="text-900 mb-2">
                                        <i className="pi pi-github mr-2"></i>
                                        <span className="font-medium">PrimeReact</span>
                                    </div>
                                    <div className="text-700">Advanced UI Components for ReactJS</div>
                                </div>
                            </div>
                            <div className="col-12 md:col-6">
                                <div className="p-3 border-1 surface-border border-round surface-card">
                                    <div className="text-900 mb-2">
                                        <i className="pi pi-github mr-2"></i>
                                        <span className="font-medium">PrimeVue</span>
                                    </div>
                                    <div className="text-700">The Most Powerful Vue UI Component Library</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </li>
            </ul >
        </div >
    </div >
    <div className="py-5 px-6">
        <div className="font-medium text-3xl text-900 mb-3">Application Flow</div>
        <ul className="list-none p-0 m-0 flex flex-column md:flex-row">
            <li className="relative mr-0 md:mr-8 flex-auto">
                <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i className="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div className="text-900 font-medium mb-1">Applied</div>
                        <span className="text-600 text-sm hidden md:block">Tempus iaculis urna id volutpat</span>
                    </div>
                </div>
                <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
            </li>
            <li className="relative mr-0 md:mr-8 flex-auto">
                <div className="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i className="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div className="text-blue-600 font-medium mb-1">Interview</div>
                        <span className="text-600 text-sm hidden md:block">Nisi vitae suscipit tellus</span>
                    </div>
                </div>
                <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
            </li>
            <li className="relative flex-auto">
                <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                    <i className="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                    <div>
                        <div className="text-900 font-medium mb-1">Confirmation</div>
                        <span className="text-600 text-sm hidden md:block">Sit amet est placerat in egestas erat</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div className="surface-section py-6 px-6 border-top-1 surface-border">
        <div className="flex flex flex-column lg:flex-row lg:align-items-center justify-content-between">
            <div className="flex align-items-center">
                <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
            </div>
            <div className="flex flex-column lg:flex-row lg:align-items-center lg:my-0 my-4">
                <a className="text-700 cursor-pointer mb-2 lg:mb-0">Brand Policy</a>
                <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Privacy Policy</a>
                <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Terms of Service</a>
            </div>
            <div className="flex align-items-center lg:justify-content-between">
                <a className="cursor-pointer text-500">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="cursor-pointer text-500 ml-2">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
                <a className="cursor-pointer text-500 ml-2">
                    <i className="pi pi-github text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <BlockViewer header="Detail" code={block1}>
                <div className="surface-ground">
                    <div className="surface-overlay py-3 px-6 border-bottom-1 surface-border flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
                        <img src="assets/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6" />
                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <a ref={btnRef1} className="p-ripple cursor-pointer block lg:hidden text-700">
                                <i className="pi pi-bars text-4xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                                        <i className="pi pi-home mr-2"></i>
                                        <span>Home</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="lg:relative">
                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                        <a ref={btnRef2} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                            <i className="pi pi-users mr-2"></i>
                                            <span>Customers</span>
                                            <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                                        <li>
                                            <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-user-plus mr-2"></i>
                                                <span className="font-medium">Add New</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="relative">
                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick={true}>
                                                <a ref={btnRef3} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                    <i className="pi pi-search mr-2"></i>
                                                    <span className="font-medium">Search</span>
                                                    <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                                <li>
                                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-shopping-cart mr-2"></i>
                                                        <span className="font-medium">Purchases</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li className="relative">
                                                    <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span>Calendar</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span>Stats</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">Inbox</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                                        <span className="block lg:hidden font-medium">Notifications</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} />
                                        <div className="block lg:hidden">
                                            <div className="text-900 font-medium">Josephine Lillard</div>
                                            <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="surface-section px-6 pt-5">
                        <div className="text-3xl font-medium text-900 mb-4">Application</div>
                        <TabMenu model={items} activeItem={items[0]} />
                    </div >
                    <div className="surface-section px-6 py-5">
                        <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                            <div className="flex align-items-start flex-column md:flex-row">
                                <img src="assets/images/blocks/avatars/circle/avatar-f-1@2x.png" className="mr-5 mb-3 lg:mb-0" alt="avatar-f-1@2x" style={{ width: '90px', height: '90px' }} />
                                <div>
                                    <span className="text-900 font-medium text-3xl">Kathryn Murphy</span>
                                    <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                                    <div className="flex align-items-center flex-wrap text-sm">
                                        <div className="mr-5 mt-3">
                                            <span className="font-medium text-500">FOLLOWERS</span>
                                            <div className="text-700 mt-2">333</div>
                                        </div>
                                        <div className="mr-5 mt-3">
                                            <span className="font-medium text-500">PROJECTS</span>
                                            <div className="text-700 mt-2">26</div>
                                        </div>
                                        <div className="mr-5 mt-3">
                                            <span className="font-medium text-500">COLLECTIONS</span>
                                            <div className="text-700 mt-2">17</div>
                                        </div>
                                        <div className="mt-3">
                                            <span className="font-medium text-500">SHOTS</span>
                                            <div className="text-700 mt-2">130</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 lg:mt-0">
                                <Button icon="pi pi-bookmark" className="p-button-rounded mr-2" />
                                <Button icon="pi pi-heart" className="p-button-rounded p-button-success mr-2" />
                                <Button icon="pi pi-list" className="p-button-rounded p-button-help" />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-5">
                        <div className="surface-card p-4 shadow-2 border-round">
                            <div className="font-medium text-3xl text-900 mb-3">Applicant Profile</div>
                            <div className="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
                            <ul className="list-none p-0 m-0 border-top-1 border-300">
                                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                    <div className="text-500 w-full md:w-2 font-medium">Name</div>
                                    <div className="text-900 w-full md:w-10">Elliot Alderson</div>
                                </li>
                                <li className="flex align-items-center py-3 px-2 flex-wrap">
                                    <div className="text-500 w-full md:w-2 font-medium">Bio</div>
                                    <div className="text-900 w-full md:w-10 line-height-3">Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.</div>
                                </li>
                                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                    <div className="text-500 w-full md:w-2 font-medium">Salary Expectation</div>
                                    <div className="text-900 w-full md:w-10">$150,000</div>
                                </li>
                                <li className="flex align-items-center py-3 px-2 flex-wrap">
                                    <div className="text-500 w-full md:w-2 font-medium">Skills</div>
                                    <div className="text-900 w-full md:w-10">
                                        <Tag className="mr-2" value="Algorithms" rounded />
                                        <Tag className="mr-2" severity="success" value="Javascript" rounded />
                                        <Tag className="mr-2" severity="danger" value="Python" rounded />
                                        <Tag severity="warning" value="SQL" rounded />
                                    </div>
                                </li >
                                <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                    <div className="text-500 w-full md:w-2 font-medium">Repositories</div>
                                    <div className="text-900 w-full md:w-10">
                                        <div className="grid mt-0 mr-0">
                                            <div className="col-12 md:col-6">
                                                <div className="p-3 border-1 surface-border border-round surface-card">
                                                    <div className="text-900 mb-2">
                                                        <i className="pi pi-github mr-2"></i>
                                                        <span className="font-medium">PrimeFaces</span>
                                                    </div>
                                                    <div className="text-700">Ultimate UI Component Suite for JavaServer Faces</div>
                                                </div>
                                            </div>
                                            <div className="col-12 md:col-6">
                                                <div className="p-3 border-1 surface-border border-round surface-card">
                                                    <div className="text-900 mb-2">
                                                        <i className="pi pi-github mr-2"></i>
                                                        <span className="font-medium">PrimeNG</span>
                                                    </div>
                                                    <div className="text-700">The Most Complete Angular UI Component Library</div>
                                                </div>
                                            </div>
                                            <div className="col-12 md:col-6">
                                                <div className="p-3 border-1 surface-border border-round surface-card">
                                                    <div className="text-900 mb-2">
                                                        <i className="pi pi-github mr-2"></i>
                                                        <span className="font-medium">PrimeReact</span>
                                                    </div>
                                                    <div className="text-700">Advanced UI Components for ReactJS</div>
                                                </div>
                                            </div>
                                            <div className="col-12 md:col-6">
                                                <div className="p-3 border-1 surface-border border-round surface-card">
                                                    <div className="text-900 mb-2">
                                                        <i className="pi pi-github mr-2"></i>
                                                        <span className="font-medium">PrimeVue</span>
                                                    </div>
                                                    <div className="text-700">The Most Powerful Vue UI Component Library</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            </ul >
                        </div >
                    </div >
                    <div className="py-5 px-6">
                        <div className="font-medium text-3xl text-900 mb-3">Application Flow</div>
                        <ul className="list-none p-0 m-0 flex flex-column md:flex-row">
                            <li className="relative mr-0 md:mr-8 flex-auto">
                                <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                    <i className="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                    <div>
                                        <div className="text-900 font-medium mb-1">Applied</div>
                                        <span className="text-600 text-sm hidden md:block">Tempus iaculis urna id volutpat</span>
                                    </div>
                                </div>
                                <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
                            </li>
                            <li className="relative mr-0 md:mr-8 flex-auto">
                                <div className="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                    <i className="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                    <div>
                                        <div className="text-blue-600 font-medium mb-1">Interview</div>
                                        <span className="text-600 text-sm hidden md:block">Nisi vitae suscipit tellus</span>
                                    </div>
                                </div>
                                <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
                            </li>
                            <li className="relative flex-auto">
                                <div className="border-1 surface-border surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                    <i className="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                    <div>
                                        <div className="text-900 font-medium mb-1">Confirmation</div>
                                        <span className="text-600 text-sm hidden md:block">Sit amet est placerat in egestas erat</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="surface-section py-6 px-6 border-top-1 surface-border">
                        <div className="flex flex flex-column lg:flex-row lg:align-items-center justify-content-between">
                            <div className="flex align-items-center">
                                <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" className="mr-0 lg:mr-6" />
                            </div>
                            <div className="flex flex-column lg:flex-row lg:align-items-center lg:my-0 my-4">
                                <a className="text-700 cursor-pointer mb-2 lg:mb-0">Brand Policy</a>
                                <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Privacy Policy</a>
                                <a className="text-700 cursor-pointer mb-2 lg:mb-0 ml-0 lg:ml-4">Terms of Service</a>
                            </div>
                            <div className="flex align-items-center lg:justify-content-between">
                                <a className="cursor-pointer text-500">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="cursor-pointer text-500 ml-2">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                                <a className="cursor-pointer text-500 ml-2">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default DetailScreen;
