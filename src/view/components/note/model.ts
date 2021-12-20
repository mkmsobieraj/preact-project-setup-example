import { v4 as uuidv4 } from 'uuid';
import { Comparable } from '../../../utils/array';

export class Note implements Comparable<Note> {
  private _id: string;
  private _title?: string;
  private _content?: string;
  private _tags: string[];
  private _importance: Importance;
  private _progressStatus: ProgressStatus;
  public _editable: boolean;

  constructor(
    title?: string,
    content?: string,
    tags?: string[],
    importance: Importance = Importance.LOW,
    progressStatus: ProgressStatus = ProgressStatus.TO_DO,
    editable = false,
    id = uuidv4()
  ) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._tags = tags === undefined ? [] : tags;
    this._importance = importance;
    this._progressStatus = progressStatus;
    this._editable = editable;
  }

  public static createEmptyEditableNote(): Note {
    return new Note(
      undefined, undefined, undefined, undefined, undefined, true
    );
  }

  public copy(): Note {
    return new Note(
      this.title,
      this.content,
      this.tags,
      this.importance,
      this.progressStatus,
      this.editable,
      this.id
    );
  }

  public compare(val: Note): boolean {
    return this.id === val.id;
  }

  public toggleEditable(): Note {
    this.editable = !this.editable;
    return this;
  }

  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }

  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }

  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }

  get importance(): Importance {
    return this._importance;
  }
  set importance(value: Importance) {
    this._importance = value;
  }

  get progressStatus(): ProgressStatus {
    return this._progressStatus;
  }
  set progressStatus(value: ProgressStatus) {
    this._progressStatus = value;
  }

  get editable(): boolean {
    return this._editable;
  }
  set editable(value: boolean) {
    this._editable = value;
  }
}

export enum Importance {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGHT = 'HIGH',
}

export enum ProgressStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  DISCARDED = 'DISCARDED',
  TO_DO = 'TO_DO',
}
