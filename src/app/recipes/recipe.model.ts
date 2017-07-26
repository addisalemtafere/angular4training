/**
 * Created by addis on 7/22/17.
 */


export class Recipe {

  public name: string;
  public descrption: string;
  public imagePath: string;
  constructor(name: string, descrption: string, imagePath: string) {
    this.name = name;
    this.descrption = descrption;
    this.imagePath = imagePath;
  }
}
