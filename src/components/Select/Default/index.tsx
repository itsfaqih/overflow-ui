import { useEffect, useState } from 'react';
import { useSelect } from 'downshift';
import classNames from 'classnames';

import { SelectButton } from '../button';
import { SelectOption } from '../option';
import { SelectList } from '../list';

interface SelectProps {
  className?: string;
  placeholder?: string;
  defaultValue?: { label: string; value: string };
  value?: { label: string; value: string };
  onChange?: (
    selectedOption: { label: string; value: string } | null | undefined
  ) => void;
  options?: { value: string; label: string }[];
}

export function Select({
  className,
  placeholder,
  defaultValue,
  value,
  onChange,
  options = [],
}: SelectProps) {
  const [inputItems, setInputItems] = useState<
    { label: string; value: string }[]
  >(options);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    itemToString: item => (!!item?.label ? item.label : ''),
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    selectedItem: value,
    defaultSelectedItem: defaultValue,
  });

  useEffect(() => {
    setInputItems(options);
  }, [options]);

  return (
    <div className={classNames('relative focus:outline-none', className)}>
      <SelectButton
        className={classNames({
          'text-grayDark': selectedItem,
          'text-gray': !selectedItem,
        })}
        isOpen={isOpen}
        {...getToggleButtonProps()}
      >
        {selectedItem?.label || placeholder}
      </SelectButton>
      <div
        className={classNames(
          'focus:outline-none transition transform duration-300 relative z-20',
          {
            'opacity-0 translate-y-2': !isOpen,
            'opacity-100 translate-y-0': isOpen,
          }
        )}
        {...getMenuProps()}
      >
        {isOpen && (
          <SelectList className="mt-2">
            {inputItems.map((item, index) => (
              <SelectOption
                key={item.value}
                highlighted={highlightedIndex === index}
                selected={selectedItem?.value === item.value}
                {...getItemProps({ item, index })}
              >
                {item.label}
              </SelectOption>
            ))}
          </SelectList>
        )}
      </div>
    </div>
  );
}

Select.defaultProps = {
  children: null,
  className: '',
  placeholder: '',
  defaultValue: undefined,
  options: [],
};
