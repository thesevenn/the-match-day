import {Interactions} from "../../types/interactions.type";

const SliderInteractions: Interactions = {
	handleStart: (event, setMouseStart, setDragging) => {
		const clientX = event.clientX;
		setDragging(true);
		setMouseStart(clientX);
	},

	handleMovement: (
		event,
		ref,
		dragging,
		mouseStart,
		transformLimit,
		setMoveDirectionLeft
	) => {
		console.log(transformLimit);
		if (!dragging) return;
		const distanceMoved: number = event.clientX - mouseStart;
		console.log(distanceMoved);
		if (distanceMoved < 0) {
			setMoveDirectionLeft(true);
		} else setMoveDirectionLeft(false);

		if (
			ref.current?.style &&
			distanceMoved <= 0 &&
			distanceMoved > -transformLimit
		) {
			ref.current.style.transform = `translateX(${distanceMoved}px)`;
		}
	},

	handleStop: setDragging => {
		setDragging(false);
	},
};
export default SliderInteractions;
