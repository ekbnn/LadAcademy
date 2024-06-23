import clsx from 'clsx';
import { FC } from 'react';
import classes from './Pagination.module.scss';

interface PaginationProps {
  carrentPage: number;
  setCarrentPage: React.Dispatch<React.SetStateAction<number>>;
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
}

const Pagination: FC<PaginationProps> = ({
  carrentPage,
  setCarrentPage,
  //first,
  prev,
  next,
  last,
  pages,
  // items,
}) => {
  if (last === 1) {
    return null;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="">
        <li className={clsx(!prev && classes.mute)}>
          <a
            href=""
            onClick={(event) => {
              event.preventDefault();
              prev && setCarrentPage(prev);
            }}
          >
            Previous
          </a>
        </li>

        {Array.from({ length: pages }, (_, i: number) => i + 1).map((page) => (
          <li
            className={clsx(carrentPage === page && classes.active)}
            key={'key_' + page}
          >
            <div>
              <a
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setCarrentPage(page);
                }}
              >
                {page}
              </a>
            </div>
          </li>
        ))}
        <li className={clsx(!next && classes.mute)}>
          <a
            className=""
            href=""
            onClick={(event) => {
              event.preventDefault();
              next && setCarrentPage(next);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
