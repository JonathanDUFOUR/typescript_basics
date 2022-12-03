interface ISandbox {
	perimeter:number;
	surface:number;
	sand_type:string;
};

class Sandbox implements ISandbox {
	private _perimeter:number;
	private _surface:number;
	private _sand_type:string;

	constructor(perimeter:number, surface:number, sand_type:string) {
		this._perimeter = perimeter;
		this._surface = surface;
		this._sand_type = sand_type;
	}

	get perimeter():number {
		return this._perimeter;
	}

	get surface():number {
		return this._surface;
	}

	get sand_type():string {
		return this._sand_type;
	}
}
