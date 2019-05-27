import { Deserializable } from '../models/deserializable.model';


export class Planets implements Deserializable {
    name: string;
    distance: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
