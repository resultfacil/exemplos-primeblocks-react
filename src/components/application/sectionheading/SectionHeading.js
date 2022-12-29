import React from 'react';
import BlockViewer from '../../blockviewer/BlockViewer';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { TabMenu } from 'primereact/tabmenu';

const SectionHeading = () => {

    const items = [
        { label: 'Overview', icon: 'pi pi-home' },
        { label: 'Members', icon: 'pi pi-users' },
        { label: 'Sales', icon: 'pi pi-shopping-cart' },
        { label: 'Profile', icon: 'pi pi-user' },
        { label: 'Settings', icon: 'pi pi-cog' }
    ];

    const block1 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div className="flex align-items-center">
            <i className="pi pi-inbox text-2xl mr-3 text-500"></i>
            <span className="text-3xl font-medium text-900">Messages</span>
        </div>
        <div className="mt-3 md:mt-0">
            <Button label="Settings" className="p-button-outlined mr-3" icon="pi pi-cog" />
            <Button label="Compose" icon="pi pi-plus" />
        </div>
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
        <div className="mb-3 lg:mb-0">
            <div className="text-3xl font-medium text-900 mb-3">Messages</div>
            <div className="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        </div>
        <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search"></i>
            <InputText placeholder="Search" className="w-full md:w-auto" />
        </span>
    </div>
</div>
    `;

    const block3 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="text-3xl font-medium text-900 mb-4">Application</div>
    <TabMenu model={items} activeItem={items[0]} />
</div>
    `;

    const block4 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="flex lg:align-items-center flex-column lg:flex-row">
        <div className="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
        <TabMenu model={items} activeItem={items[0]} className="flex-grow-1" />
    </div>
</div>
    `;

    const block5 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border">
        <span className="block text-3xl font-medium text-900 mb-4">Messages</span>
    </div>
</div>
    `;

    const block6 = `
<div className="surface-section px-4 py-5 md:px-6 lg:px-8">
    <div className="border-bottom-1 surface-border">
        <div className="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span className="text-base font-normal ml-3 text-600">79 Unread</span></div>
    </div>
</div>
    `;


    return (
        <>
            <div className="block-category-title">Section Heading</div>
            <BlockViewer header="Icon And Actions" code={block1}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                        <div className="flex align-items-center">
                            <i className="pi pi-inbox text-2xl mr-3 text-500"></i>
                            <span className="text-3xl font-medium text-900">Messages</span>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <Button label="Settings" className="p-button-outlined mr-3" icon="pi pi-cog" />
                            <Button label="Compose" icon="pi pi-plus" />
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Subtitle and Search" code={block2}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex md:align-items-center md:justify-content-between flex-column md:flex-row pb-4 border-bottom-1 surface-border">
                        <div className="mb-3 lg:mb-0">
                            <div className="text-3xl font-medium text-900 mb-3">Messages</div>
                            <div className="text-500 mr-0 md:mr-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
                        </div>
                        <span className="p-input-icon-left w-full md:w-auto">
                            <i className="pi pi-search"></i>
                            <InputText placeholder="Search" className="w-full md:w-auto" />
                        </span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Tabs" code={block3}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="text-3xl font-medium text-900 mb-4">Application</div>
                    <TabMenu model={items} activeItem={items[0]} />
                </div>
            </BlockViewer>

            <BlockViewer header="Inline Tabs" code={block4}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="flex lg:align-items-center flex-column lg:flex-row">
                        <div className="text-3xl font-medium text-900 mr-0 lg:mr-4 mb-4 lg:mb-0">Application</div>
                        <TabMenu model={items} activeItem={items[0]} className="flex-grow-1" />
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Simple" code={block5}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="border-bottom-1 surface-border">
                        <span className="block text-3xl font-medium text-900 mb-4">Messages</span>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="With Label" code={block6}>
                <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                    <div className="border-bottom-1 surface-border">
                        <div className="text-3xl font-medium text-900 mb-4 flex align-items-center">Messages <span className="text-base font-normal ml-3 text-600">79 Unread</span></div>
                    </div>
                </div>
            </BlockViewer>
        </>
    )
}

export default SectionHeading;
