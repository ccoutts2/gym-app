interface PageHeadProps {
  header: string;
}

const PageHeader = ({ header }: PageHeadProps) => {
  return (
    <header className="py-4">
      <h1 className="text-xl font-semibold">{header}</h1>
    </header>
  );
};

export default PageHeader;
