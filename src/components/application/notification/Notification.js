import React, { useRef } from 'react';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const Notification = () => {

    const toast1 = useRef(null);
    const toast2 = useRef(null);
    const toast3 = useRef(null);
    const toast4 = useRef(null);
    const toast5 = useRef(null);
    const toast6 = useRef(null);
    const toast7 = useRef(null);

    const clearAll = () => {
        if (toast1.current) {
            toast1.current.clear()
        }
        if (toast2.current) {
            toast2.current.clear()
        }
        if (toast3.current) {
            toast3.current.clear()
        }
        if (toast4.current) {
            toast4.current.clear()
        }
        if (toast5.current) {
            toast5.current.clear()
        }
        if (toast6.current) {
            toast6.current.clear()
        }
        if (toast7.current) {
            toast7.current.clear()
        }
    }

    const notify1 = () => {
        clearAll();
        toast1.current.show({
            sticky: true, closable: false, className: 'surface-0', contentClassName: 'p-0', content: (
                <div className="flex surface-overlay border-1 surface-border">
                    <div className="flex flex-column p-3">
                        <div className="flex align-items-center">
                            <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style={{ width: '32px', height: '32px' }}>
                                <i className="pi pi-info text-lg"></i>
                            </span>
                            <span className="font-medium text-2xl text-900">Message Title</span>
                        </div>
                        <p className="my-3 p-0 line-height-3 text-700">Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.</p>
                    </div>
                    <div className="flex flex-column border-left-1 surface-border">
                        <div className="flex-auto flex align-items-center justify-content-center px-3">
                            <Button label="Update" className="p-button-text font-medium" onClick={() => toast1.current.clear()} />
                        </div>
                        <div className="flex-auto border-top-1 surface-border flex align-items-center justify-content-center px-3">
                            <Button label="Later" className="p-button-text font-medium" onClick={() => toast1.current.clear()} />
                        </div>
                    </div>
                </div>
            )
        });

    }

    const notify2 = () => {
        clearAll()
        toast2.current.show({
            closable: false, className: 'surface-900', contentClassName: 'p-0', life: 3000, content: (
                <div className="flex flex-column bg-gray-900">
                    <div className="p-3">
                        <div className="flex align-items-center">
                            <span className="flex align-items-center justify-content-center bg-blue-400 text-blue-900 mr-3 border-circle" style={{ width: '32px', height: '32px' }}>
                                <i className="pi pi-info text-lg"></i>
                            </span>
                            <span className="font-medium text-2xl text-white">Message Title</span>
                        </div>
                        <p className="my-3 line-height-3 text-gray-300">Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.</p>
                    </div>
                    <div style={{ height: '6px' }} className="bg-gray-700">
                        <div className="h-full bg-blue-500 animate-width animation-duration-3000"></div>
                    </div>
                </div >
            )
        })
    }

    const notify3 = () => {
        clearAll()
        toast3.current.show({
            severity: 'custom-3', className: 'surface-overlay', contentClassName: 'p-3', life: 3000, content: (
                <div className="flex align-items-start flex-1">
                    <i className="pi pi-envelope text-blue-500 text-2xl mr-3"></i>
                    <div>
                        <span className="text-xl font-medium text-900">Custom Icon</span>
                        <p className="text-700 mt-3">Sagittis eu volutpat odio facilisis mauris sit amet.</p>
                    </div>
                </div>
            )
        })
    }

    const notify4 = () => {
        clearAll()
        toast4.current.show({
            severity: 'custom-4', className: 'surface-overlay', contentClassName: 'p-3', life: 3000, content: (
                <div className="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                    <span className="text-xl font-medium text-900">You received 1 new message.</span>
                    <a className="cursor-pointer font-medium text-blue-500">Reply</a>
                </div>
            )
        })
    }

    const notify5 = () => {
        clearAll()
        toast5.current.show({
            severity: 'custom-5', className: 'surface-overlay', contentClassName: 'p-4', life: 3000, content: (
                <div className="flex align-items-start flex-1 align-self-center mr-3">
                    <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" style={{width:'56px', height:'56px'}} />
                    <div className="ml-3">
                        <span className="text-xl font-medium text-900">Arlene McCoy</span>
                        <p className="text-600 mt-2 mb-3">Tristique nulla aliquet enim tortor at auctor 😅... Urna nunc id.</p>
                        <Button className="p-button-sm mr-2" label="Reply" onClick={() => toast5.current.clear()} />
                        <Button className="p-button-sm p-button-text" label="Hide" onClick={() => toast5.current.clear()} />
                    </div>
                </div>
            )
        })
    }

    const notify6 = () => {
        clearAll()
        toast6.current.show({
            severity: 'custom-6', className: 'bg-cyan-500', contentClassName: 'p-3', life: 3000, content: (
                <div className="flex align-items-start flex-1">
                    <i className="pi pi-envelope text-cyan-900 text-2xl mr-3"></i>
                    <div>
                        <span className="text-xl font-medium text-cyan-900">Custom Icon</span>
                        <p className="text-cyan-800 mt-3">Sagittis eu volutpat odio facilisis mauris sit amet.</p>
                    </div>
                </div>
            )
        })
    }

    const notify7 = () => {
        clearAll()
        toast7.current.show({
            sevetiy: 'custom-7', className: 'bg-orange-300', contentClassName: 'p-3', life: 3000, content: (
                <div className="flex align-items-center justify-content-between flex-1 align-self-center mr-3">
                    <span className="text-xl font-medium text-orange-900">You received 1 new message.</span>
                    <a className="cursor-pointer font-medium text-orange-700">Reply</a>
                </div>
            )
        })
    }

    const block1 = `
<Button label="Display" onClick={() => notify1()} />
<Toast style={{ width: '30rem' }} life={3000} ref={toast1} key="block1" closeable={false} />
    `;

    const block2 = `
<Button label="Display" onClick={() => notify2()} />
<Toast style={{ width: '30rem' }} ref={toast2} key="block2" />
    `;

    const block3 = `
<Button label="Display" onClick={() => notify3()} />
<Toast key="block3" style={{ width: '30rem' }} ref={toast3} preventOpenDuplicates />
    `;

    const block4 = `
<Button label="Display" onClick={() => notify4()} />
<Toast key="block4" style={{ width: '30rem' }} ref={toast4} preventOpenDuplicates />
    `;

    const block5 = `
<Button label="Display" onClick={() => notify5()} />
<Toast key="block5" style={{ width: '30rem' }} ref={toast5} preventOpenDuplicates />
    `;

    const block6 = `
<Button label="Display" onClick={() => notify6()} />
<Toast key="block6" style={{ width: '30rem' }} ref={toast6} preventOpenDuplicates />
    `;

    const block7 = `
<Button label="Display" onClick={() => notify7()} />
<Toast key="block7" style={{ width: '30rem' }} ref={toast7} preventOpenDuplicates />
    `;

    return (
        <>
            <div className="block-category-title">Notification</div>
            <BlockViewer header="Message Actions" code={block1} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify1()} />
                <Toast style={{ width: '30rem' }} life={3000} ref={toast1} key="block1" closeable={false} />
            </BlockViewer >

            <BlockViewer header="Dark with Timeout" code={block2} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify2()} />
                <Toast style={{ width: '30rem' }} ref={toast2} key="block2" />
            </BlockViewer>

            <BlockViewer header="Custom Icon" code={block3} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify3()} />
                <Toast key="block3" style={{ width: '30rem' }} ref={toast3} preventOpenDuplicates />
            </BlockViewer>

            <BlockViewer header="Condensed" code={block4} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify4()} />
                <Toast key="block4" style={{ width: '30rem' }} ref={toast4} preventOpenDuplicates />
            </BlockViewer>

            <BlockViewer header="With Profile" code={block5} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify5()} />
                <Toast key="block5" style={{ width: '30rem' }} ref={toast5} preventOpenDuplicates />
            </BlockViewer>

            <BlockViewer header="Colored Custom Icon" code={block6} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify6()} />
                <Toast key="block6" style={{ width: '30rem' }} ref={toast6} preventOpenDuplicates />
            </BlockViewer>

            <BlockViewer header="Colored Condensed" code={block7} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => notify7()} />
                <Toast key="block7" style={{ width: '30rem' }} ref={toast7} preventOpenDuplicates />
            </BlockViewer>
        </>
    )
}

export default Notification;
