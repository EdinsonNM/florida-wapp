import {
    switchMap,
    map,
    catchError,
    delay,
    flatMap,
    tap,
    debounceTime
} from 'rxjs/operators';
import {of, empty} from 'rxjs';
import {Effects} from '../store.lib';
import PartnerApi from '../../api/partner.api';
import store from '../store';
import LocationApi from '../../api/location.api';
import VarietyApi from '../../api/variety.api';
import ProcessApi from '../../api/process.api';
import CertificationApi from '../../api/certfication.api';
import BaseApi from '../../api/base.api';

export const loadPartnersEpic = Effects(subject => {
    return subject.pipe(
        debounceTime(500),
        switchMap(({state, payload}) => {
            return PartnerApi.getAll(state.filter).pipe(
                map(response => response.data),
                map(response => store.dispatch.Main.loadPartnersDone(response)),
                catchError(() => of([]))
            );
        })
    );
});

export const loadLocationsEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return LocationApi.getAll(payload).pipe(
                map(response =>
                    store.dispatch.Main.loadLocationsDone(response)
                ),
                catchError(() => of([]))
            );
        })
    );
});

export const loadVarietyEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return VarietyApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadVarietyDone(response)),
                catchError(() => of([]))
            );
        })
    );
});

export const loadProcessEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return ProcessApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadProcessDone(response)),
                catchError(() => of([]))
            );
        })
    );
});

export const loadPartnerInfoEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return PartnerApi.getInfo(payload).pipe(
                map(response =>
                    store.dispatch.Main.loadPartnerInfoDone(response.response)
                ),
                catchError(() => of([]))
            );
        })
    );
});

export const loadCertificationsEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return CertificationApi.getAll(payload).pipe(
                map(response =>
                    store.dispatch.Main.loadCertificationsDone(response)
                ),
                catchError(() => of([]))
            );
        })
    );
});

export const loadBaseEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({payload}) => {
            return BaseApi.getAll(payload).pipe(
                map(response => store.dispatch.Main.loadBaseDone(response)),
                catchError(() => of([]))
            );
        })
    );
});

export const filterEpic = Effects(subject => {
    return subject.pipe(
        switchMap(({state, payload}) => {
            let filter = state;
            console.log(filter);
            return empty();
        })
    );
});
