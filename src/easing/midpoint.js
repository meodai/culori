// Color interpolation hint exponential function
export default (H = 0.5) => t =>
	H <= 0 ? 1 : H >= 1 ? 0 : Math.pow(t, Math.log(0.5) / Math.log(H));
