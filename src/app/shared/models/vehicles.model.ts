import { Deserializable } from '../models/deserializable.model';

export class Vehicles implements Deserializable {
    name: string;
    // tslint:disable-next-line: variable-name
    total_no: number;
    // tslint:disable-next-line: variable-name
    max_distance: number;
    speed: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
