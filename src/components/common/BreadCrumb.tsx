import type { JSX } from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  path?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps): JSX.Element => {
  return (
    <nav className="text-sm text-gray-400 flex items-center gap-2">
      {/* HOME ALWAYS FIRST */}
      <Link
        to="/"
        className="hover:text-warmpink transition"
      >
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-gray-600">/</span>

            {isLast || !item.path ? (
              <span className="text-warmpink font-semibold">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-warmpink transition"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;