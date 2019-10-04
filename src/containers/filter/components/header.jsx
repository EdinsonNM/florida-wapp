import React from 'react';
import {AntTabs, AntTab} from '../../../components/AntTab';
import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    IconButton,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import SearchAppBar from '../../../components/SearchAppBar';
import {Map, FilterList, List, Home} from '@material-ui/icons';

export default React.memo(function Header({tab, onChangeTab}) {
    const theme = useTheme();
    const showIcon = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="relative" elevation={0}>
            <Toolbar variant="dense">
                <Typography>LA FLORIDA</Typography>
                <div style={{flexGrow: 1}} />
                <AntTabs value={tab} onChange={onChangeTab}>
                    <AntTab
                        label={!showIcon ? 'Resultados' : ''}
                        icon={showIcon && <Home />}
                    />
                    <AntTab
                        label={!showIcon ? 'Filtro' : ''}
                        icon={showIcon && <FilterList />}
                    />
                    {showIcon && <AntTab label="" icon={<Map />} />}
                </AntTabs>
            </Toolbar>
        </AppBar>
    );
});
