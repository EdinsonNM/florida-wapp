import {Subject} from 'rxjs';
import {debug, action} from 'easy-peasy';

export const Effects = next => {
    const subject = new Subject();

    next(subject).subscribe();
    return subject;
};

export function actionEffect(next, ...subjects) {
    return action((state, payload) => {
        next(state, payload);
        console.log(debug(state));
        subjects.forEach(subject =>
            subject.next({state: JSON.parse(JSON.stringify(state)), payload})
        );
    }); 
}
