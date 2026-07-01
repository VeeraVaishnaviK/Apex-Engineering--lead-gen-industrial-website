import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="breadcrumb-container">
        <Link href="/">Home</Link>
        {items.map((item, index) => (
          <span key={index}>
            <span className="breadcrumb-separator"> &gt; </span>
            {index === items.length - 1 ? (
              <span className="breadcrumb-current" aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.url}>{item.name}</Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
