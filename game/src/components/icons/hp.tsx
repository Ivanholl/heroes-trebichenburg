import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function HP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Health</Tooltip>}>
            <i className="ra ra-glass-heart"></i>
        </OverlayTrigger>
    );
}