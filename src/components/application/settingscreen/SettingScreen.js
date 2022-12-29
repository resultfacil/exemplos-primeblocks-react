import React, { useState, useRef } from 'react';
import { classNames } from 'primereact/utils';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputSwitch } from 'primereact/inputswitch';
import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

const SettingScreen = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [value, setValue] = useState(false);
    const [country, setCountry] = useState(null);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const block1 = `
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar" className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div className="flex h-full">
            <div className="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                <div className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style={{ height: '60px' }}>
                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
                </div>
                <div className="overflow-y-auto mt-3">
                    <ul className="list-none py-3 px-2 m-0">
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(0)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 0 })}>
                                <i className="pi pi-home text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(1)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 1 })}>
                                <i className="pi pi-bookmark text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(2)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 2 })}>
                                <i className="pi pi-users text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(3)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 3 })}>
                                <i className="pi pi-comments text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(4)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 4 })}>
                                <i className="pi pi-calendar text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                        <li className="mb-2">
                            <a onClick={() => setActiveTab(5)}
                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 5 })}>
                                <i className="pi pi-cog text-lg"></i>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto mx-3">
                    <hr className="mb-3 border-top-1 border-bottom-none border-indigo-300" />
                    <a className="p-ripple my-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
            transition-duration-150 transition-colors w-full">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" style={{ width: '24px', height: '24px' }} />
                        <Ripple />
                    </a>
                </div>
            </div>
            <div className="flex flex-column surface-0 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style={{ width: '250px' }}>
                <div className="justify-content-end mb-3 flex lg:hidden">
                    <StyleClass nodeRef={btnRef1} selector="#app-sidebar" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" >
                        <Button ref={btnRef1} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
                    </StyleClass>
                </div>
                <div className="surface-0 flex-auto">
                    <div className={classNames({ 'hidden': activeTab !== 0 })}>
                        <div className="w-full lg:w-auto select-none">
                            <ul className="list-none py-2 px-0 m-0">
                                <li>
                                    <div className="p-3 text-500 font-medium">HOME</div>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2 text-700"></i>
                                        <span className="font-medium text-700">Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                        <span className="font-medium text-700">Bookmarks</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2 text-700"></i>
                                        <span className="font-medium text-700">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-comments mr-2 text-700"></i>
                                        <span className="font-medium text-700">Messages</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                        <span className="font-medium text-700">Calendar</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-user mr-2 text-blue-500"></i>
                                        <span className="font-medium text-blue-500 font-bold">Profile</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-none py-2 px-0 m-0 border-top-1 surface-border">
                                <li>
                                    <div className="p-3 text-500 font-medium">ORGANIZATION</div>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-home mr-2 text-700"></i>
                                        <span className="font-medium text-700">Overview</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                        <span className="font-medium text-700">Security</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users mr-2 text-700"></i>
                                        <span className="font-medium text-700">Domains</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                        <span className="font-medium text-700">Reports</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 1 })}>Bookmarks</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 2 })}>Team</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 3 })}>Messages</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 4 })}>Calendar</div>
                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 5 })}>Settings</div>
                </div>
            </div >
        </div >
    </div >
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
            <div className="flex align-items-center">
                <StyleClass nodeRef={btnRef2} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                    <a ref={btnRef2} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3" >
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                <a ref={btnRef3} className="p-ripple cursor-pointer block lg:hidden text-700" >
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <ul className="list-none p-0 m-0  hidden lg:flex lg:align-items-center select-none lg:flex-row
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span className="block lg:hidden font-medium">Inbox</span>
                        <Ripple />
                    </a>
                </li>
                <li>
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                        <span className="block lg:hidden font-medium">Notifications</span>
                        <Ripple />
                    </a>
                </li>
                <li className="border-top-1 surface-border lg:border-top-none">
                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors w-full">
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
        <div className="p-5 flex flex-column flex-auto">
            <div>
                <div className="text-900 font-medium text-xl mb-3">Profile</div>
                <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
                    Egestas integer eget aliquet nibh praesent tristique magna.</p>
                <div className="surface-card p-4 shadow-2 border-round">
                    <div className="grid formgrid p-fluid">
                        <div className="field mb-4 col-12">
                            <label htmlFor="nickname" className="font-medium">Nickname</label>
                            <InputText id="nickname" type="text" />
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="bio" className="font-medium">Bio</label>
                            <InputTextarea id="bio" type="text" rows={5} autoResize />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="avatar" className="font-medium">Avatar</label>
                            <div className="flex align-items-center">
                                <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mr-4" />
                                <FileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize={1000000} chooseOptions={{ className: 'p-button-plain p-button-outlined' }} chooseLabel="Upload Image" />
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <InputText id="email" type="text" />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="bio" className="font-medium">Country</label>
                            <Dropdown options={countries} value={country} onChange={(e) => setCountry(e.value) } optionLabel="name" filter filterBy="name" showClear placeholder="Select a Country" itemTemplate={(country) => <div className="flex align-items-center">
                                <img src="assets/images/blocks/flag/flag_placeholder.png" alt="flag" className={'mr-2 flag flag-' + country.code.toLowerCase()} style={{ width: '18px' }} />
                                <div>{country.name}</div>
                            </div>} />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="city" className="font-medium">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field mb-4 col-12 md:col-6">
                            <label htmlFor="state" className="font-medium">State</label>
                            <InputText id="state" type="text" />
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12">
                            <label htmlFor="website" className="font-medium">Website</label>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">www</span>
                                <InputText id="website" type="text" />
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="field mb-4 col-12">
                            <label htmlFor="privacy" className="font-medium">Privacy</label>
                            <div className="flex align-items-center">
                                <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
                                <span className="ml-2">Share my data with contacts</span>
                            </div>
                        </div>
                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                        <div className="col-12">
                            <Button label="Save Changes" className="w-auto mt-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Setting</div>
            <BlockViewer header="Settings" code={block1}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div id="app-sidebar" className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
                        <div className="flex h-full">
                            <div className="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                                <div className="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style={{ height: '60px' }}>
                                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="hyper-light" height={30} />
                                </div>
                                <div className="overflow-y-auto mt-3">
                                    <ul className="list-none py-3 px-2 m-0">
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(0)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 0 })}>
                                                <i className="pi pi-home text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(1)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 1 })}>
                                                <i className="pi pi-bookmark text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(2)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 2 })}>
                                                <i className="pi pi-users text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(3)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 3 })}>
                                                <i className="pi pi-comments text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(4)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 4 })}>
                                                <i className="pi pi-calendar text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a onClick={() => setActiveTab(5)}
                                                className={classNames('p-ripple flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors', { 'bg-indigo-700': activeTab === 5 })}>
                                                <i className="pi pi-cog text-lg"></i>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto mx-3">
                                    <hr className="mb-3 border-top-1 border-bottom-none border-indigo-300" />
                                    <a className="p-ripple my-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
                            transition-duration-150 transition-colors w-full">
                                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" style={{ width: '24px', height: '24px' }} />
                                        <Ripple />
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-column surface-0 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style={{ width: '250px' }}>
                                <div className="justify-content-end mb-3 flex lg:hidden">
                                    <StyleClass nodeRef={btnRef1} selector="#app-sidebar" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" >
                                        <Button ref={btnRef1} icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" />
                                    </StyleClass>
                                </div>
                                <div className="surface-0 flex-auto">
                                    <div className={classNames({ 'hidden': activeTab !== 0 })}>
                                        <div className="w-full lg:w-auto select-none">
                                            <ul className="list-none py-2 px-0 m-0">
                                                <li>
                                                    <div className="p-3 text-500 font-medium">HOME</div>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-home mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Bookmarks</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-users mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-comments mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Messages</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Calendar</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-user mr-2 text-blue-500"></i>
                                                        <span className="font-medium text-blue-500 font-bold">Profile</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul className="list-none py-2 px-0 m-0 border-top-1 surface-border">
                                                <li>
                                                    <div className="p-3 text-500 font-medium">ORGANIZATION</div>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-home mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Overview</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-bookmark mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Security</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>3</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-users mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Domains</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                                                        <i className="pi pi-calendar mr-2 text-700"></i>
                                                        <span className="font-medium text-700">Reports</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>2</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 1 })}>Bookmarks</div>
                                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 2 })}>Team</div>
                                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 3 })}>Messages</div>
                                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 4 })}>Calendar</div>
                                    <div className={classNames('p-3 font-medium text-xl text-900', { 'hidden': activeTab !== 5 })}>Settings</div>
                                </div>
                            </div >
                        </div >
                    </div >
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div className="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
                            <div className="flex align-items-center">
                                <StyleClass nodeRef={btnRef2} selector="#app-sidebar" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                                    <a ref={btnRef2} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3" >
                                        <i className="pi pi-bars text-4xl"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search"></i>
                                    <InputText className="border-none" placeholder="Search" />
                                </span>
                            </div>
                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                <a ref={btnRef3} className="p-ripple cursor-pointer block lg:hidden text-700" >
                                    <i className="pi pi-ellipsis-v text-2xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none p-0 m-0  hidden lg:flex lg:align-items-center select-none lg:flex-row
                    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                                <li>
                                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">Inbox</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"><Badge severity="danger" /></i>
                                        <span className="block lg:hidden font-medium">Notifications</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 surface-border lg:border-top-none">
                                    <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                            transition-duration-150 transition-colors w-full">
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
                        <div className="p-5 flex flex-column flex-auto">
                            <div>
                                <div className="text-900 font-medium text-xl mb-3">Profile</div>
                                <p className="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
                                    Egestas integer eget aliquet nibh praesent tristique magna.</p>
                                <div className="surface-card p-4 shadow-2 border-round">
                                    <div className="grid formgrid p-fluid">
                                        <div className="field mb-4 col-12">
                                            <label htmlFor="nickname" className="font-medium">Nickname</label>
                                            <InputText id="nickname" type="text" />
                                        </div>
                                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="bio" className="font-medium">Bio</label>
                                            <InputTextarea id="bio" type="text" rows={5} autoResize />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="avatar" className="font-medium">Avatar</label>
                                            <div className="flex align-items-center">
                                                <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mr-4" />
                                                <FileUpload mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize={1000000} chooseOptions={{ className: 'p-button-plain p-button-outlined' }} chooseLabel="Upload Image" />
                                            </div>
                                        </div>
                                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="email" className="font-medium">Email</label>
                                            <InputText id="email" type="text" />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="bio" className="font-medium">Country</label>
                                            <Dropdown options={countries} value={country} onChange={(e) => setCountry(e.value) } optionLabel="name" filter filterBy="name" showClear placeholder="Select a Country" itemTemplate={(country) => <div className="flex align-items-center">
                                                <img src="assets/images/blocks/flag/flag_placeholder.png" alt="flag" className={'mr-2 flag flag-' + country.code.toLowerCase()} style={{ width: '18px' }} />
                                                <div>{country.name}</div>
                                            </div>} />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="city" className="font-medium">City</label>
                                            <InputText id="city" type="text" />
                                        </div>
                                        <div className="field mb-4 col-12 md:col-6">
                                            <label htmlFor="state" className="font-medium">State</label>
                                            <InputText id="state" type="text" />
                                        </div>
                                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                                        <div className="field mb-4 col-12">
                                            <label htmlFor="website" className="font-medium">Website</label>
                                            <div className="p-inputgroup">
                                                <span className="p-inputgroup-addon">www</span>
                                                <InputText id="website" type="text" />
                                            </div>
                                        </div>
                                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                                        <div className="field mb-4 col-12">
                                            <label htmlFor="privacy" className="font-medium">Privacy</label>
                                            <div className="flex align-items-center">
                                                <InputSwitch checked={value} onChange={(e) => setValue(e.value)} />
                                                <span className="ml-2">Share my data with contacts</span>
                                            </div>
                                        </div>
                                        <div className="surface-100 mb-3 col-12" style={{ height: '2px' }}></div>
                                        <div className="col-12">
                                            <Button label="Save Changes" className="w-auto mt-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default SettingScreen;
