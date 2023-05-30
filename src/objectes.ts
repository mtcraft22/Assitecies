export interface assitencia{
    dia:string
    tipus:string
}
export interface Alumne<T>{
    Num:T
    Nom:string
    Primer_Cognom:string
    Segon_Cognom:string
}
export interface registre_alumne extends Alumne<string>{
    classe:string
}
