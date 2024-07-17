import { create } from "zustand";
import { storage } from "../configs/Storage";
import { PatientModel } from "patient_lib";


export interface IPatientDataState {
    patients: PatientModel[],
    setPatients: (data: any) => void
    deletePatients:()=>void

}

const parseJSON = <T>(value: string | null, fallback: T): T => {
    try {
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
};

export const patientStore = create<IPatientDataState>((set, get) => ({
    patients: parseJSON<any>(storage.getString("patients"), []),
    setPatients: async (data: any) => {
        try {
            storage.set("patients", JSON.stringify(data));
            set({ patients: data });
        }
        catch (e) {
            console.log(e);
        }
    },
    deletePatients:()=>{
        try{
            storage.delete("patients")
            set({ patients: [] });
        }
        catch(e){

        }
    }



}));
