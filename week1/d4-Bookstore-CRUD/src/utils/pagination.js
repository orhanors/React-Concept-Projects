import _ from "lodash";

const paginate = function (currentPage, itemsPerPage, itemsArray) {
	const startIndex = (currentPage - 1) * itemsPerPage;

	return _(itemsArray).slice(startIndex).take(itemsPerPage).value();
};

export default paginate;
