export class Artist {
    public name: string;
    public image: string[];
    public listeners: number;
    public playcount: number;
    public summary: string;
    public url: string;

    constructor(name : string ,image : string[], listeners: number,  playcount: number, summary: string, url: string){
        this.name = name;
        this.image = image;
        this.listeners = listeners;
        this.playcount = playcount;
        this.summary = summary;
        this.url = url;
    }
}
  