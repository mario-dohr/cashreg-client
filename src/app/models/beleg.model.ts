import { Belegzeile } from "./belegzeile";

export class Beleg {
    id? : bigint;
    belegNr? : string;
    datum? : string;
    uhrzeit? : string;
    mitarbeiter? : string;
    gesamtbetrag? : number;
    qrcode?: string;
    belegZeilen? : Belegzeile[];
}
