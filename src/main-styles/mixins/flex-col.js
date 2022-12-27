const flexCol = (props) => {
	if (!props) props = {};
	return `
		display: flex;
		flex-direction: column;
		gap: ${props.gap || 0};
	`;
};
export default flexCol;