import { Subject } from 'rxjs';
import { action } from 'easy-peasy';

export const Effects = (next) => {
    const subject = new Subject();

    next(subject).subscribe();
    return subject;
};

export function actionEffect(next, ...subjects){
    return action((state, payload) => {
        next(state, payload);
        subjects.forEach(subject => subject.next({ payload }));
    });
}