import React, {} from 'react';
import {CapitalEntry} from "./CapitalEntry";

export interface ICapitalListProps {
    aktName:string;
    clickFunc: (name:string,location:string ) => void;
}

class Capital {
    name:string;
    location:number[];
    citizen:number;
    area:number;

    constructor(name:string,location:number[],citizen:number,area:number) {
        this.name = name;
        this.location = location;
        this.citizen = citizen;
        this.area = area;
    }
}

const amsterdam = new Capital("Amsterdam",[52.370197,4.890444],838338,219);
const berlin = new Capital("Berlin",[52.518611,13.408333],3520031,891);
const lissabon = new Capital("Lissabon",[38.716667, -9.166667],545245,85);
const madrid = new Capital("Madrid",[40.4125,-3.703889],3165541,606);
const paris = new Capital("Paris",[48.856667,2.351667],2229621,105);
const prag = new Capital("Prag",[50.088611,14.421389],1267449,496);
const rom = new Capital("Rom",[41.883333,12.483333],2864731,1285);
const stockholm = new Capital("Stockholm",[59.325,18.05],911989,167);

export const CapitalList = (props:ICapitalListProps) => {
    const { aktName,clickFunc } = props;
    return (
        <div className="capitalList">
            <h3>Some European Capitals</h3>
            <ul>
                <CapitalEntry capital={amsterdam} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={berlin} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={lissabon} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={madrid} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={paris} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={prag} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={rom} aktName={aktName} clickFunc={clickFunc}/>
                <CapitalEntry capital={stockholm} aktName={aktName} clickFunc={clickFunc}/>
            </ul>
        </div>
    );
};
