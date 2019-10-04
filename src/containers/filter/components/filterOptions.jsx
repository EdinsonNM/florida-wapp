import React from 'react';
import {Divider} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import FilterOptionsCheckbox from './FilterOptionsCheckbox';

export default function FilterOptions({
    locations,
    variety,
    dataprocess,
    certifications,
    bases,
    handleChangeFilter,
    filter
}) {
    return (
        <Grid
            container
            className="pr-20 pl-20 text-white"
            style={{overflow: 'auto'}}
        >
            <Grid item xs={12}>
                <FilterOptionsCheckbox
                    title="Origen"
                    keyName="id"
                    label="nombre"
                    data={bases}
                    filterId="base"
                    handleChangeFilter={handleChangeFilter}
                    selected={filter.base}
                />
                <Divider />
                <FilterOptionsCheckbox
                    title="Certificaciones"
                    keyName="id"
                    label="alias"
                    data={certifications}
                    filterId="certificacion"
                    handleChangeFilter={handleChangeFilter}
                    selected={filter.certificacion}
                />
                <Divider />
                <FilterOptionsCheckbox
                    title="Localidades"
                    keyName="id"
                    label="nombre"
                    data={locations}
                    filterId="localidad"
                    handleChangeFilter={handleChangeFilter}
                    selected={filter.localidad}
                />
                <Divider />
                <FilterOptionsCheckbox
                    title="Variedades"
                    keyName="id"
                    label="nombre"
                    data={variety}
                    filterId="variedad"
                    handleChangeFilter={handleChangeFilter}
                    selected={filter.variedad}
                />
                <Divider />
                <FilterOptionsCheckbox
                    title="Procesos"
                    keyName="id"
                    label="nombre"
                    data={dataprocess}
                    filterId="proceso"
                    handleChangeFilter={handleChangeFilter}
                    selected={filter.proceso}
                />
            </Grid>
        </Grid>
    );
}
