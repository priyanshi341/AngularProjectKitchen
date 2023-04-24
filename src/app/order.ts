export class Order {
    totalitems:number;
    totalprice:number;
    userid:number;
    items:string;
    dt:string;
    constructor( totalitems:number,totalprice:number,userid:number,dt:string, items:string)
    {
        this.totalitems=totalitems;
        this.totalprice=totalprice;
        this.userid=userid;
        this.dt=dt;
        this.items=items;
    }
        
     

}
