type Nullable<T> = T | null;

interface TitleInfo {
	icon?: Nullable<string>;
	text: string;
}

export enum ButtonType {
	OK, Yes, No
}

export interface ModalInfo {
	title: TitleInfo;
	message: string;
	
	buttons: ButtonType[];
}

export class Modal {
	public id: number;
	public info: ModalInfo;

	public buttons: JQuery;

	public constructor(id: number, info: ModalInfo, buttons: JQuery) {
		this.id = id;
		this.info = info;

		this.buttons = buttons;
	}
}

export interface ModalAPI {
	create: (info: ModalInfo) => Modal;
}
