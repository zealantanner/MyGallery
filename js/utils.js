export class Color {
    constructor(...input) {
        if(input.length == 3) {
            for(let i = 0; i < 3; i++) {
                input[i] = (255 < input[i]) ? 255 : input[i];
                input[i] = (input[i] < 0) ? 0 : input[i];
            }
            this.r = input[0];
            this.g = input[1];
            this.b = input[2];
            this.hex = Color.RGBToHex(this.r, this.g, this.b);
        }
        else if(input.length == 1) {
            this.r = Color.hexToRGB(input[0]).r;
            this.g = Color.hexToRGB(input[0]).g;
            this.b = Color.hexToRGB(input[0]).b;
            this.hex = Color.RGBToHex(this.r, this.g, this.b);
        }
        else {
            throw new Error('Invalid color');  
        }
    }
    get asString() {
        return {
            RGB: `rgb(${this.r}, ${this.g}, ${this.b})`,
            hex: `${this.hex}`
        }
    }
    static RGBToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    static hexToRGB(hex) {
        if (hex.length != 6 && hex.length != 7) {
            throw new Error('Invalid hex code');  
        }
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            text: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
        } : [r,g,b];
    }
    shade(...amt) {
        if(amt.length == 1) {
            return new Color(parseInt(this.r + amt[0]), parseInt(this.g + amt[0]), parseInt(this.b + amt[0]));
        }
        else if(amt.length == 3) {
            return new Color(parseInt(this.r + amt[0]), parseInt(this.g + amt[1]), parseInt(this.b + amt[2]));
        }
        else {
            throw new Error('Invalid color');  
        }
    }
}