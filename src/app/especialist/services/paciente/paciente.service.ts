import { Injectable } from "@angular/core";
export interface PacienteInterface {
  name: string;
  lastTest: string;
}

export type PacientesInterface = Array<PacienteInterface>;

@Injectable({
  providedIn: "root",
})
export class PacienteService {
  constructor() {}
  getAll() {
    return [
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
      {
        name: "Mustafar Hionojosa",
        lastTest: "11/04/2020",
      },
    ];
  }
}
