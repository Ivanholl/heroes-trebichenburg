import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function HP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Health</Tooltip>}>
            <i className="ra ra-glass-heart"></i>
        </OverlayTrigger>
    );
}

export function MP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Mana</Tooltip>}>
            <i className="ra ra-fluffy-swirl"></i>
        </OverlayTrigger>
    );
}

export function DMG() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Demage</Tooltip>}>
            <i className="ra ra-crossed-axes"></i>
        </OverlayTrigger>
    );
}

export function DF() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Defense</Tooltip>}>
            <i className="ra ra-broken-shield"></i>
        </OverlayTrigger>
    );
}
