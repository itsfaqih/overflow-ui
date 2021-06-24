import classNames from 'classnames';

interface PageTitleProps {
  text: string;
  className?: string;
}

export function PageTitle({ text, className }: PageTitleProps) {
  return (
    <h1
      className={classNames('text-4xl tracking-wide font-medium text-grayDark', className)}
    >
      {text}
    </h1>
  );
}

PageTitle.defaultProps = { className: null };
