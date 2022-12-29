import React, { useState } from 'react';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const DialogBlock = () => {

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const block1 = `
<Button label="Display" onClick={() => setVisible1(true)} />
<Dialog visible={visible1} header={<div className="flex align-items-center">
    <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style={{ width: '32px', height: '32px' }}>
        <i className="pi pi-info text-lg"></i>
    </span>
    <span className="font-medium text-2xl text-900">Modal Title Placeholder</span>
</div>} onHide={() => setVisible1(false)} footer={<div className=" border-top-1 surface-border pt-3">
    <Button icon="pi pi-times" onClick={() => setVisible1(false)} label="Cancel" className="p-button-text" />
    <Button icon="pi pi-check" onClick={() => setVisible1(false)} label="Save" />
</div >} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }}>
    <p className="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
</Dialog>
    `;

    const block2 = `
<Button label="Display" onClick={() => setVisible2(true)} />
<Dialog visible={visible2} onHide={() => setVisible2(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} closable={false} showHeader={false} footer={<div className=" border-top-1 surface-border pt-3 flex">
    <Button icon="pi pi-times" onClick={() => setVisible2(false)} label="Cancel" className="p-button-outlined w-6 mr-2" />
    <Button icon="pi pi-check" onClick={() => setVisible2(false)} label="Save" className="w-6 ml-2" />
</div >}>
    <div className="flex flex-column align-items-center my-4">
        <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style={{ width: '64px', height: '64px' }}>
            <i className="pi pi-check text-5xl"></i>
        </span>
        <div className="font-medium text-2xl text-900">Modal Title Placeholder</div>
    </div>
    <p className="line-height-3 p-0 m-0">
        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
    </p>
</Dialog>
    `;

    const block3 = `
<Button label="Display" onClick={() => setVisible3(true)} />
<Dialog visible={visible3} onHide={() => setVisible3(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} header="Title Placeholder" draggable={false} resizable={false} footer={<div className="border-top-1 surface-border pt-3">
    <Button icon="pi pi-times" onClick={() => setVisible3(false)} label="Cancel" className="p-button-text" />
    <Button icon="pi pi-check" onClick={() => setVisible3(false)} label="Save" />
</div>}>
    <div className="flex flex-wrap border-top-1 surface-border pt-4">
        <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
            <img src="assets/images/blocks/illustration/security.svg" alt="Image" className="w-9" />
        </div>
        <p className="text-700 line-height-3 m-0 p-5 w-full md:w-8">
            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
        </p>
    </div>
</Dialog>
    `;

    return (
        <>
            <div className="block-category-title">Dialog</div>
            <BlockViewer header="Left Aligned Header Icon" code={block1} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => setVisible1(true)} />
                <Dialog visible={visible1} header={<div className="flex align-items-center">
                    <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle" style={{ width: '32px', height: '32px' }}>
                        <i className="pi pi-info text-lg"></i>
                    </span>
                    <span className="font-medium text-2xl text-900">Modal Title Placeholder</span>
                </div>} onHide={() => setVisible1(false)} footer={<div className=" border-top-1 surface-border pt-3">
                    <Button icon="pi pi-times" onClick={() => setVisible1(false)} label="Cancel" className="p-button-text" />
                    <Button icon="pi pi-check" onClick={() => setVisible1(false)} label="Save" />
                </div >} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }}>
                    <p className="line-height-3 p-0 m-0">
                        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
                        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
                    </p>
                </Dialog>
            </BlockViewer>

            <BlockViewer header="Centered Header Icon" code={block2} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center" >
                <Button label="Display" onClick={() => setVisible2(true)} />
                <Dialog visible={visible2} onHide={() => setVisible2(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} closable={false} showHeader={false} footer={<div className=" border-top-1 surface-border pt-3 flex">
                    <Button icon="pi pi-times" onClick={() => setVisible2(false)} label="Cancel" className="p-button-outlined w-6 mr-2" />
                    <Button icon="pi pi-check" onClick={() => setVisible2(false)} label="Save" className="w-6 ml-2" />
                </div >}>
                    <div className="flex flex-column align-items-center my-4">
                        <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style={{ width: '64px', height: '64px' }}>
                            <i className="pi pi-check text-5xl"></i>
                        </span>
                        <div className="font-medium text-2xl text-900">Modal Title Placeholder</div>
                    </div>
                    <p className="line-height-3 p-0 m-0">
                        Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer.
                        Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
                    </p>
                </Dialog>
            </BlockViewer>

            <BlockViewer header="With Illustration" code={block3} containerClassName="surface-section px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
                <Button label="Display" onClick={() => setVisible3(true)} />
                <Dialog visible={visible3} onHide={() => setVisible3(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} header="Title Placeholder" draggable={false} resizable={false} footer={<div className="border-top-1 surface-border pt-3">
                    <Button icon="pi pi-times" onClick={() => setVisible3(false)} label="Cancel" className="p-button-text" />
                    <Button icon="pi pi-check" onClick={() => setVisible3(false)} label="Save" />
                </div>}>
                    <div className="flex flex-wrap border-top-1 surface-border pt-4">
                        <div className="bg-blue-50 flex align-items-center justify-content-center py-3 px-0 w-full md:w-4 border-round">
                            <img src="assets/images/blocks/illustration/security.svg" alt="Image" className="w-9" />
                        </div>
                        <p className="text-700 line-height-3 m-0 p-5 w-full md:w-8">
                            Sagittis eu volutpat odio facilisis mauris sit amet. Sed velit dignissim sodales ut eu sem integer. Sed risus pretium quam vulputate. At tellus at urna condimentum mattis pellentesque.
                        </p>
                    </div>
                </Dialog>
            </BlockViewer>
        </>
    )
}

export default DialogBlock;
