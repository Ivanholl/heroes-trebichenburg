import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function MP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Mana</Tooltip>}>
            <i className="ra ra-fluffy-swirl"></i>
        </OverlayTrigger>
    );
}