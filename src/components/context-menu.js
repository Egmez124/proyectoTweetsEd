import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';
export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={props.removeTweet}>
                <TrashOutline/><span>Eliminar</span>
            </div>
        </div>
    )
}