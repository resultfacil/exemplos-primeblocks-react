import React, { useState } from 'react';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Button } from 'primereact/button';

const Team = () => {

    const [visibleMember, setVisibleMember] = useState(null);

    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center font-bold text-900 text-5xl mb-3">The Team</div>
    <div className="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div className="grid">
        <div className="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-1.png" alt="avatar-f-1" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Annette Black</div>
            <div className="text-blue-600 text-xl mb-3">Software Developer</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div className="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Leslie Alexander</div>
            <div className="text-blue-600 text-xl mb-3">Software Tester</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div className="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Ralph Edward</div>
            <div className="text-blue-600 text-xl mb-3">UI/UX Designer</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div className="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-2.png" alt="avatar-m2" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Robert Fox</div>
            <div className="text-blue-600 text-xl mb-3">Software Developer</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div className="col-12 md:col-4 text-center mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-m-3.png" alt="avatar-m-3" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Albert Flores</div>
            <div className="text-blue-600 text-xl mb-3">Team Leader</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
        <div className="col-12 md:col-4 text-center mb-0 md:mb-5">
            <img src="assets/images/blocks/avatars/circle-big/avatar-f-3.png" alt="avatar-f-3" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-3">Esther Howard Black</div>
            <div className="text-blue-600 text-xl mb-3">Project Manager</div>
            <div className="inline-flex align-items-center">
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-twitter text-xl"></i>
                </a>
                <a className="mr-3 text-600 cursor-pointer">
                    <i className="pi pi-github text-xl"></i>
                </a>
                <a className="text-600 cursor-pointer">
                    <i className="pi pi-facebook text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center font-bold text-900 text-5xl mb-3">The Team</div>
    <div className="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div className="grid text-center">
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Savannah Nguyen</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Jenny Wilson</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Albert Flores</div>
            <div className="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Ralph Edwards</div>
            <div className="text-blue-600 mb-5">Team Leader</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Eleanor Pena Black</div>
            <div className="text-blue-600 mb-5">Marketing Specialist</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Annette Black</div>
            <div className="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-5.png" alt="avatar-f-5" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Arlene McCoy</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" alt="avatar-m-3" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">James Wilson</div>
            <div className="text-blue-600 mb-5">Product Manager</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-6.png" alt="avatar-f-6" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Darlene Robertson</div>
            <div className="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-7.png" alt="avatar-f-7" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Kristin Watson</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-4.png" alt="avatar-m-4" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Floyd Miles</div>
            <div className="text-blue-600 mb-5">Software Tester</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-8.png" alt="avatar-f-8" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Jane Olivia</div>
            <div className="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" alt="avatar-m-5" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Robert Fox</div>
            <div className="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-6.png" alt="avatar-m-6" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Devon Lane</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-7.png" alt="avatar-m-7" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Jacob Davies</div>
            <div className="text-blue-600 mb-5">Accountant</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-9.png" alt="avatar-f-9" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Leslie Alexander</div>
            <div className="text-blue-600 mb-5">Financial Analyst</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-8.png" alt="avatar-m-8" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Guy Hawkins</div>
            <div className="text-blue-600 mb-5">Marketing Manager</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-10.png" alt="avatar-f-10" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Jane Cooper</div>
            <div className="text-blue-600 mb-5">UI/UX Designer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-9.png" alt="avatar-m-9" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Michael Young</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-11.png" alt="avatar-f-11" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Dianne Russell</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-10.png" alt="avatar-m-10" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Oliver Daniels</div>
            <div className="text-blue-600 mb-5">Marketing Specialist</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-11.png" alt="avatar-m-11" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Josh Alison</div>
            <div className="text-blue-600 mb-5">Software Developer</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-m-12.png" alt="avatar-m-12" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Juan Alberto</div>
            <div className="text-blue-600 mb-5">Financial Planner</div>
        </div>
        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
            <img src="assets/images/blocks/avatars/circle/avatar-f-12.png" alt="avatar-f-12" className="mb-3" />
            <div className="text-xl text-900 font-medium mb-2">Julia Karen</div>
            <div className="text-blue-600 mb-0 md:mb-5">UI/UX Designer</div>
        </div>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="font-bold text-900 text-5xl mb-3 text-center">Meet the People</div>
    <div className="text-xl line-height-3 text-600 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    <div className="flex justify-content-center flex-column lg:flex-row">
        <div className="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-f-1.jpg" alt="avatar-f-1" className="mb-3 w-full" />
            <div className="flex justify-content-between align-items-center">
                <div className="pr-3">
                    <div className="text-xl text-900 font-medium mb-2">Claire Davies</div>
                    <div className="text-blue-600">Software Developer</div>
                </div>
                <div className="flex flex-nowrap">
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                </div>
            </div>
        </div>
        <div className="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-m-1.jpg" alt="avatar-m-1" className="mb-3 w-full" />
            <div className="flex justify-content-between align-items-center">
                <div className="pr-3">
                    <div className="text-xl text-900 font-medium mb-2">Alber Flores</div>
                    <div className="text-blue-600">Team Leader</div>
                </div>
                <div className="flex flex-nowrap">
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                </div>
            </div>
        </div>
        <div className="shadow-2 p-4 surface-card">
            <img src="assets/images/blocks/avatars/square/avatar-f-2.jpg" alt="avatar-f-2" className="mb-3 w-full" />
            <div className="flex justify-content-between align-items-center">
                <div className="pr-3">
                    <div className="text-xl text-900 font-medium mb-2">Eleanor Pena</div>
                    <div className="text-blue-600">Product Manager</div>
                </div>
                <div className="flex flex-nowrap">
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="grid">
        <div className="col-12 lg:col-4 pr-0 lg:pr-4">
            <div className="text-900 text-5xl font-bold mb-3">Meet our team</div>
            <p className="text-700 text-lg line-height-3">Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl vel pretium lectus quam id leo in.
                Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.</p>
        </div>
        <div className="col-12 lg:col-8">
            <div className="grid">
                <div className="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-1.png" className="mb-4 w-full" />
                    <div className="font-medium text-xl mb-1 text-900">Jacob Jones</div>
                    <span className="text-600 font-medium">UI/UX Designer</span>
                    <p className="line-height-3 mt-3 mb-3">Vulputate ut pharetra sit amet. Netus et malesuada fames ac turpis egestas.
                        Elit eget gravida cum sociis natoque penatibus. Urna id volutpat lacus laoreet non curabitur. In ante metus dictum at.</p>
                    <div className="mb-2">
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div className="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-2.png" className="mb-4 w-full" />
                    <div className="font-medium text-xl mb-1 text-900">Theresa Webb</div>
                    <span className="text-600 font-medium">Project Manager</span>
                    <p className="line-height-3 mt-3 mb-3">Risus feugiat in ante metus dictum. Et egestas quis ipsum suspendisse ultrices.
                        Risus pretium quam vulputate dignissim suspendisse. Justo nec ultrices dui sapien.</p>
                    <div className="mb-2">
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div className="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-3.png" className="mb-4 w-full" />
                    <div className="font-medium text-xl mb-1 text-900">Esther Howard</div>
                    <span className="text-600 font-medium">Software Developer</span>
                    <p className="line-height-3 mt-3 mb-3">Donec et odio pellentesque diam volutpat commodo sed egestas.
                        Blandit massa enim nec dui nunc mattis enim ut tellus. Suspendisse faucibus interdum posuere lorem ipsum.</p>
                    <div className="mb-2">
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
                <div className="col-12 lg:col-6 p-3">
                    <img src="assets/images/blocks/team/team-4.png" className="mb-4 w-full" />
                    <div className="font-medium text-xl mb-1 text-900">Darlene Robertson</div>
                    <span className="text-600 font-medium">UI/UX Designer</span>
                    <p className="line-height-3 mt-3 mb-3">Pretium aenean pharetra magna ac placerat vestibulum.
                        Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim..</p>
                    <div className="mb-2">
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-center font-bold text-900 text-5xl mb-3">Who Are We?</div>
    <div className="text-center text-xl line-height-3 text-600 mb-6">Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.</div>
    <div className="grid">
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(0)} onMouseLeave={() => setVisibleMember(null)}>
                <img src="assets/images/blocks/team/team-5.png" className="w-full block" />
                {visibleMember === 0 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="flex flex-column p-5 h-full">
                        <span className="block font-medium text-white text-xl mb-3">Jeff Davies</span>
                        <span className="font-medium text-400">Software Developer</span>
                        <div className="mt-auto">
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(1)} onMouseLeave={() => setVisibleMember(null)}>
                <img src="assets/images/blocks/team/team-6.png" className="w-full block" />
                {visibleMember === 1 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="flex flex-column p-5 h-full">
                        <span className="block font-medium text-white text-xl mb-3">Kristin Watson</span>
                        <span className="font-medium text-400">UI/UX Designer</span>
                        <div className="mt-auto">
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(2)} onMouseLeave={() => setVisibleMember(null)}>
                <img src="assets/images/blocks/team/team-7.png" className="w-full block" />
                {visibleMember === 2 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="flex flex-column p-5 h-full">
                        <span className="block font-medium text-white text-xl mb-3">Jenna Williams</span>
                        <span className="font-medium text-400">Marketing Specialist</span>
                        <div className="mt-auto">
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3 p-3">
            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(3)} onMouseLeave={() => setVisibleMember(null)}>
                <img src="assets/images/blocks/team/team-8.png" className="w-full block" />
                {visibleMember === 3 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} >
                    <div className="flex flex-column p-5 h-full">
                        <span className="block font-medium text-white text-xl mb-3">Joe Clifford</span>
                        <span className="font-medium text-400">Customer Relations</span>
                        <div className="mt-auto">
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Team Sections</div>
            <BlockViewer header="Grid with Larger Images" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center font-bold text-900 text-5xl mb-3">The Team</div>
                    <div className="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="grid">
                        <div className="col-12 md:col-4 text-center mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-f-1.png" alt="avatar-f-1" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Annette Black</div>
                            <div className="text-blue-600 text-xl mb-3">Software Developer</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 text-center mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" alt="avatar-f-2" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Leslie Alexander</div>
                            <div className="text-blue-600 text-xl mb-3">Software Tester</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 text-center mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-m-1.png" alt="avatar-m-1" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Ralph Edward</div>
                            <div className="text-blue-600 text-xl mb-3">UI/UX Designer</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 text-center mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-m-2.png" alt="avatar-m2" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Robert Fox</div>
                            <div className="text-blue-600 text-xl mb-3">Software Developer</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 text-center mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-m-3.png" alt="avatar-m-3" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Albert Flores</div>
                            <div className="text-blue-600 text-xl mb-3">Team Leader</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 text-center mb-0 md:mb-5">
                            <img src="assets/images/blocks/avatars/circle-big/avatar-f-3.png" alt="avatar-f-3" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-3">Esther Howard Black</div>
                            <div className="text-blue-600 text-xl mb-3">Project Manager</div>
                            <div className="inline-flex align-items-center">
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-twitter text-xl"></i>
                                </a>
                                <a className="mr-3 text-600 cursor-pointer">
                                    <i className="pi pi-github text-xl"></i>
                                </a>
                                <a className="text-600 cursor-pointer">
                                    <i className="pi pi-facebook text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Grid with Smaller Images" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center font-bold text-900 text-5xl mb-3">The Team</div>
                    <div className="text-center text-xl line-height-3 text-600 mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    <div className="grid text-center">
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Savannah Nguyen</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" alt="avatar-f-2" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Jenny Wilson</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" alt="avatar-m-1" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Albert Flores</div>
                            <div className="text-blue-600 mb-5">Software Tester</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" alt="avatar-m-2" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Ralph Edwards</div>
                            <div className="text-blue-600 mb-5">Team Leader</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" alt="avatar-f-3" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Eleanor Pena Black</div>
                            <div className="text-blue-600 mb-5">Marketing Specialist</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" alt="avatar-f-4" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Annette Black</div>
                            <div className="text-blue-600 mb-5">UI/UX Designer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-5.png" alt="avatar-f-5" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Arlene McCoy</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" alt="avatar-m-3" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">James Wilson</div>
                            <div className="text-blue-600 mb-5">Product Manager</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-6.png" alt="avatar-f-6" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Darlene Robertson</div>
                            <div className="text-blue-600 mb-5">Software Tester</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-7.png" alt="avatar-f-7" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Kristin Watson</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-4.png" alt="avatar-m-4" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Floyd Miles</div>
                            <div className="text-blue-600 mb-5">Software Tester</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-8.png" alt="avatar-f-8" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Jane Olivia</div>
                            <div className="text-blue-600 mb-5">UI/UX Designer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" alt="avatar-m-5" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Robert Fox</div>
                            <div className="text-blue-600 mb-5">UI/UX Designer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-6.png" alt="avatar-m-6" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Devon Lane</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-7.png" alt="avatar-m-7" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Jacob Davies</div>
                            <div className="text-blue-600 mb-5">Accountant</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-9.png" alt="avatar-f-9" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Leslie Alexander</div>
                            <div className="text-blue-600 mb-5">Financial Analyst</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-8.png" alt="avatar-m-8" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Guy Hawkins</div>
                            <div className="text-blue-600 mb-5">Marketing Manager</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-10.png" alt="avatar-f-10" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Jane Cooper</div>
                            <div className="text-blue-600 mb-5">UI/UX Designer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-9.png" alt="avatar-m-9" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Michael Young</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-11.png" alt="avatar-f-11" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Dianne Russell</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-10.png" alt="avatar-m-10" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Oliver Daniels</div>
                            <div className="text-blue-600 mb-5">Marketing Specialist</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-11.png" alt="avatar-m-11" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Josh Alison</div>
                            <div className="text-blue-600 mb-5">Software Developer</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-m-12.png" alt="avatar-m-12" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Juan Alberto</div>
                            <div className="text-blue-600 mb-5">Financial Planner</div>
                        </div>
                        <div className="col-12 md:col-4 lg:col-3 xl:col-2">
                            <img src="assets/images/blocks/avatars/circle/avatar-f-12.png" alt="avatar-f-12" className="mb-3" />
                            <div className="text-xl text-900 font-medium mb-2">Julia Karen</div>
                            <div className="text-blue-600 mb-0 md:mb-5">UI/UX Designer</div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Cards" code={block3}>
                <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
                    <div className="font-bold text-900 text-5xl mb-3 text-center">Meet the People</div>
                    <div className="text-xl line-height-3 text-600 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    <div className="flex justify-content-center flex-column lg:flex-row">
                        <div className="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
                            <img src="assets/images/blocks/avatars/square/avatar-f-1.jpg" alt="avatar-f-1" className="mb-3 w-full" />
                            <div className="flex justify-content-between align-items-center">
                                <div className="pr-3">
                                    <div className="text-xl text-900 font-medium mb-2">Claire Davies</div>
                                    <div className="text-blue-600">Software Developer</div>
                                </div>
                                <div className="flex flex-nowrap">
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card">
                            <img src="assets/images/blocks/avatars/square/avatar-m-1.jpg" alt="avatar-m-1" className="mb-3 w-full" />
                            <div className="flex justify-content-between align-items-center">
                                <div className="pr-3">
                                    <div className="text-xl text-900 font-medium mb-2">Alber Flores</div>
                                    <div className="text-blue-600">Team Leader</div>
                                </div>
                                <div className="flex flex-nowrap">
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                                </div>
                            </div>
                        </div>
                        <div className="shadow-2 p-4 surface-card">
                            <img src="assets/images/blocks/avatars/square/avatar-f-2.jpg" alt="avatar-f-2" className="mb-3 w-full" />
                            <div className="flex justify-content-between align-items-center">
                                <div className="pr-3">
                                    <div className="text-xl text-900 font-medium mb-2">Eleanor Pena</div>
                                    <div className="text-blue-600">Product Manager</div>
                                </div>
                                <div className="flex flex-nowrap">
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain mr-2" icon="pi pi-twitter" />
                                    <Button className="p-button-rounded p-button-text p-button-outlined p-button-plain" icon="pi pi-github" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>


            <BlockViewer header="With Bio" code={block4}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="grid">
                        <div className="col-12 lg:col-4 pr-0 lg:pr-4">
                            <div className="text-900 text-5xl font-bold mb-3">Meet our team</div>
                            <p className="text-700 text-lg line-height-3">Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl vel pretium lectus quam id leo in.
                                Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.</p>
                        </div>
                        <div className="col-12 lg:col-8">
                            <div className="grid">
                                <div className="col-12 lg:col-6 p-3">
                                    <img src="assets/images/blocks/team/team-1.png" className="mb-4 w-full" />
                                    <div className="font-medium text-xl mb-1 text-900">Jacob Jones</div>
                                    <span className="text-600 font-medium">UI/UX Designer</span>
                                    <p className="line-height-3 mt-3 mb-3">Vulputate ut pharetra sit amet. Netus et malesuada fames ac turpis egestas.
                                        Elit eget gravida cum sociis natoque penatibus. Urna id volutpat lacus laoreet non curabitur. In ante metus dictum at.</p>
                                    <div className="mb-2">
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                    </div>
                                </div>
                                <div className="col-12 lg:col-6 p-3">
                                    <img src="assets/images/blocks/team/team-2.png" className="mb-4 w-full" />
                                    <div className="font-medium text-xl mb-1 text-900">Theresa Webb</div>
                                    <span className="text-600 font-medium">Project Manager</span>
                                    <p className="line-height-3 mt-3 mb-3">Risus feugiat in ante metus dictum. Et egestas quis ipsum suspendisse ultrices.
                                        Risus pretium quam vulputate dignissim suspendisse. Justo nec ultrices dui sapien.</p>
                                    <div className="mb-2">
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                    </div>
                                </div>
                                <div className="col-12 lg:col-6 p-3">
                                    <img src="assets/images/blocks/team/team-3.png" className="mb-4 w-full" />
                                    <div className="font-medium text-xl mb-1 text-900">Esther Howard</div>
                                    <span className="text-600 font-medium">Software Developer</span>
                                    <p className="line-height-3 mt-3 mb-3">Donec et odio pellentesque diam volutpat commodo sed egestas.
                                        Blandit massa enim nec dui nunc mattis enim ut tellus. Suspendisse faucibus interdum posuere lorem ipsum.</p>
                                    <div className="mb-2">
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                    </div>
                                </div>
                                <div className="col-12 lg:col-6 p-3">
                                    <img src="assets/images/blocks/team/team-4.png" className="mb-4 w-full" />
                                    <div className="font-medium text-xl mb-1 text-900">Darlene Robertson</div>
                                    <span className="text-600 font-medium">UI/UX Designer</span>
                                    <p className="line-height-3 mt-3 mb-3">Pretium aenean pharetra magna ac placerat vestibulum.
                                        Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim..</p>
                                    <div className="mb-2">
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                        <a tabIndex="0" className="cursor-pointer"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Hover Overlay" code={block5}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-center font-bold text-900 text-5xl mb-3">Who Are We?</div>
                    <div className="text-center text-xl line-height-3 text-600 mb-6">Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.</div>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(0)} onMouseLeave={() => setVisibleMember(null)}>
                                <img src="assets/images/blocks/team/team-5.png" className="w-full block" />
                                {visibleMember === 0 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                    <div className="flex flex-column p-5 h-full">
                                        <span className="block font-medium text-white text-xl mb-3">Jeff Davies</span>
                                        <span className="font-medium text-400">Software Developer</span>
                                        <div className="mt-auto">
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(1)} onMouseLeave={() => setVisibleMember(null)}>
                                <img src="assets/images/blocks/team/team-6.png" className="w-full block" />
                                {visibleMember === 1 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                    <div className="flex flex-column p-5 h-full">
                                        <span className="block font-medium text-white text-xl mb-3">Kristin Watson</span>
                                        <span className="font-medium text-400">UI/UX Designer</span>
                                        <div className="mt-auto">
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(2)} onMouseLeave={() => setVisibleMember(null)}>
                                <img src="assets/images/blocks/team/team-7.png" className="w-full block" />
                                {visibleMember === 2 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                    <div className="flex flex-column p-5 h-full">
                                        <span className="block font-medium text-white text-xl mb-3">Jenna Williams</span>
                                        <span className="font-medium text-400">Marketing Specialist</span>
                                        <div className="mt-auto">
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div className="relative overflow-hidden" onMouseEnter={() => setVisibleMember(3)} onMouseLeave={() => setVisibleMember(null)}>
                                <img src="assets/images/blocks/team/team-8.png" className="w-full block" />
                                {visibleMember === 3 && <div className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} >
                                    <div className="flex flex-column p-5 h-full">
                                        <span className="block font-medium text-white text-xl mb-3">Joe Clifford</span>
                                        <span className="font-medium text-400">Customer Relations</span>
                                        <div className="mt-auto">
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-twitter text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-github text-600 text-xl mr-3"></i></a>
                                            <a tabIndex="0" className="cursor-pointer text-white"><i className="pi pi-facebook text-600 text-xl"></i></a>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default Team;
