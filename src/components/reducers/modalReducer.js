/* eslint-disable indent */
export default function modalReducer(modalState, action) {
	const newModalState = { ...modalState };
	switch (action.type) {
		case "modal_opened": {
			newModalState.isActive = true;
			newModalState.content = action.content;
			return newModalState;
		}
		case "modal_closed": {
			newModalState.isActive = false;
			return newModalState;
		}
	}
}