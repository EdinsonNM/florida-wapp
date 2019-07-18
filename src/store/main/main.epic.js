import { switchMap, map, catchError, delay, flatMap, tap } from 'rxjs/operators';
import {of} from 'rxjs'
import { Effects } from '../store.lib';
import PartnerApi from '../../api/partner.api'
import store from '../store'
import LocationApi from '../../api/location.api';
import VarietyApi from '../../api/variety.api';
import ProcessApi from '../../api/process.api';

export const loadPartnersEpic = Effects((subject) => {
    return subject.pipe(
        switchMap(({ payload }) => {
            return PartnerApi.getAll(payload).pipe(
                map(response => response.data),
                map(response => store.dispatch.Main.loadPartnersDone(response)),
                catchError(() => of([]))
            )
        })
    );
});

export const loadLocationsEpic = Effects((subject) => {
    return subject.pipe(
        switchMap(({ payload }) => {
            return LocationApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadLocationsDone(response)),
                catchError(() => of([]))
            )
        })
    );
});

export const loadVarietyEpic = Effects((subject) => {
    return subject.pipe(
        switchMap(({ payload }) => {
            return VarietyApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadVarietyDone(response)),
                catchError(() => of([]))
            )
        })
    );
});

export const loadProcessEpic = Effects((subject) => {
    return subject.pipe(
        switchMap(({ payload }) => {
            return ProcessApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadProcessDone(response)),
                catchError(() => of([]))
            )
        })
    );
});