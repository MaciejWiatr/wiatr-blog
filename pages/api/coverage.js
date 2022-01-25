/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
	res.status(200).json({
		coverage: global.__coverage__ || null,
	});
};
