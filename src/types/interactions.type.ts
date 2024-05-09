import {Dispatch, SetStateAction, RefObject, MouseEvent} from "react";

export interface Interactions {
	handleStart: (
		event: MouseEvent,
		setMouseStart: Dispatch<SetStateAction<number>>,
		setDragging: Dispatch<SetStateAction<boolean>>
	) => void;
	handleMovement: (
		event: MouseEvent,
		ref: RefObject<HTMLDivElement>,
		dragging: boolean,
		mouseStart: number,
		transformLimit: number,
		setMoveDirectionLeft: Dispatch<SetStateAction<boolean>>
	) => void;
	handleStop: (setDragging: Dispatch<SetStateAction<boolean>>) => void;
}
