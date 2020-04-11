import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function HP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Health</Tooltip>}>
            <i class="ra ra-glass-heart"></i>
        </OverlayTrigger>
    );
}

export function MP() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Mana</Tooltip>}>
            <i class="ra ra-fluffy-swirl"></i>
        </OverlayTrigger>
    );
}

export function DMG() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Demage</Tooltip>}>
            <i class="ra ra-crossed-axes"></i>
        </OverlayTrigger>
    );
}

export function DF() {
    return (
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Defense</Tooltip>}>
            <i class="ra ra-broken-shield"></i>
        </OverlayTrigger>
    );
}
