import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function DMG() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Demage</Tooltip>}>
            <i className="ra ra-crossed-axes"></i>
        </OverlayTrigger>
    );
}