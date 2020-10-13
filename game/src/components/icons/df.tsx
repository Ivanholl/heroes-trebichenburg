import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function DF() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Defense</Tooltip>}>
            <i className="ra ra-broken-shield"></i>
        </OverlayTrigger>
    );
}