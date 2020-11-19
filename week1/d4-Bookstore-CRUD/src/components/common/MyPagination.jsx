import React from "react";
import _ from "lodash";
const MyPagination = (props) => {
	const { itemsPerPage, totalItems, onPageChange, currentPage } = props;

	const pageSize = Math.ceil(totalItems / itemsPerPage);

	const pages = _.range(1, pageSize + 1);
	return (
		<nav aria-label='Page navigation example'>
			<ul className='pagination'>
				{pages.map((page) => (
					<li key={page} className='page-item'>
						<a
							onClick={() => onPageChange(page)}
							className='page-link'
							href='#'>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MyPagination;
