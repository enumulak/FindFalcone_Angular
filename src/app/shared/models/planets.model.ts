import { Deserializable } from '../models/deserializable.model';


export class Planets implements Deserializable {
    name: string;
    distance: number;
    isSelected: boolean;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    getName() {
        return this.name;
    }
}
