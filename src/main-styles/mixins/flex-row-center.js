const flexRowCenter = (props) => {
	if (!props) props = {};
	return `
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: ${props.gap || 0};
	`;
};
export default flexRowCenter;