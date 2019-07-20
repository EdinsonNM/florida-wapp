import React from 'react';
import Partner from './partner';
import {Grid} from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import {FixedSizeList as List} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

function Partners({partners = []}) {
    const Row = ({index, style}) => {
        const partner = partners[index];
        return (
            <div style={style}>
                <Partner {...partner} item={partner} />
            </div>
        );
    };
    return (
        <div
            className="pl-10 pr-10"
            style={{flexGrow: 1, height: '100%', overflow: 'auto'}}
        >
            <AutoSizer>
                {({height, width}) => (
                    <List
                        height={height}
                        itemCount={partners.length}
                        itemSize={120}
                        width={width}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </div>
    );
}
export default React.memo(Partners);
