import React from 'react';
import Map from './components/Map';
import {useStoreActions} from 'easy-peasy';
export default React.memo(function MapMain({partners = []}) {
    const {handleToggleUserResume} = useStoreActions(actions => actions.Main);
    const getMarkers = () => {
        return partners
            .filter(partner => partner.coordenada.length)
            .map((partner, index) => {
                let coordenada = partner.coordenada[0];
                return {
                    key: partner.id,
                    position: {
                        lat: coordenada.latitud,
                        lng: coordenada.longitud
                    },
                    onClick: () => {
                        handleToggleUserResume(partner);
                    }
                };
            });
    };
    let markers = getMarkers();
    return (
        <div>
            <Map markers={markers} />
        </div>
    );
});
