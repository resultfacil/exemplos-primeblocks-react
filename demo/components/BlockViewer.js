import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { AppCodeHighlight } from './AppCodeHighlight';

const BlockViewer = (props) => {

    const [blockView, setBlockView] = useState('PREVIEW')

    const copyCode = async (event) => {
       await navigator.clipboard.writeText(props.code);

        event.preventDefault();
    }



    return (
        <div className="block-section">
            <div className="block-header">
                <span className="block-title">
                    <span>{props.header}</span>
                    {props.free && <span className="badge-free">Free</span>}
                    {props.new && <span className="badge-new">New</span>}
                </span>
                <div className="block-actions">
                    <a tabIndex={0} className={classNames({ 'block-action-active': blockView === 'PREVIEW' })} onClick={() => setBlockView('PREVIEW')}><span>Preview</span></a>
                    <a className={classNames({ 'block-action-active': blockView === 'CODE'})} onClick={() => setBlockView('CODE')}  >
                        <span>Code</span>
                    </a>
                    <a tabIndex={"0"}  className={"block-action-copy"} onClick={copyCode}>
                        <i className="pi pi-copy"></i>
                    </a>
                </div>
            </div>
            <div className="block-content">
                {blockView === 'PREVIEW' &&
                    <div className={props.containerClassName} style={props.previewStyle}>
                        {props.children}
                    </div>}

                {blockView === 'CODE' &&
                    <AppCodeHighlight>
                        {props.code}
                    </AppCodeHighlight>
                }
            </div>
        </div>
    )
}

export default BlockViewer;
