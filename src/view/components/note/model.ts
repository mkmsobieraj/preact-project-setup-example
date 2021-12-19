import { v4 as uuidv4 } from 'uuid';
import { Comparable } from '../../../utils/array';

export class Note implements Comparable<Note> {
  private _id: string;
  private _title?: string;
  private _content?: string;
  private _tags: string[];

  constructor(title?: string, content?: string, tags?: string[]) {
    this._id = uuidv4();
    this._title = title;
    this._content = content;
    this._tags = tags === undefined ? [] : tags;
  }

  public update(note: Note): Note {
    this._title = note._title;
    this._content = note._content;
    this._tags = note._tags;

    return this;
  }

  public compare(val: Note): boolean {
    return this.id === val.id;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get title(): string | undefined {
    return this._title;
  }
  public set title(value: string | undefined) {
    this._title = value;
  }

  public get content(): string | undefined {
    return this._content;
  }
  public set content(value: string | undefined) {
    this._content = value;
  }

  public get tags(): string[] {
    return this._tags;
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
}
