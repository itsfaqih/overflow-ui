import { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import classNames from 'classnames';

import { SelectButton } from '../button';
import { SelectList } from '../list';
import { SelectOption } from '../option';

interface ComboboxProps {
  className?: string;
  placeholder?: string;
  defaultValue?: { label: string; value: string };
  value?: { label: string; value: string };
  onChange?: (
    selectedOption: { label: string; value: string } | null | undefined
  ) => void;
  options?: { value: string; label: string }[];
}

export function Combobox({
  className,
  placeholder,
  defaultValue,
  value,
  onChange,
  options = [],
}: ComboboxProps) {
  const [inputItems, setInputItems] = useState<
    { label: string; value: string }[]
  >(options);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    selectedItem,
    setInputValue,
  } = useCombobox({
    items: inputItems,
    itemToString: item => (!!item?.label ? item.label : ''),
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        options.filter(item =>
          item.label
            .toLowerCase()
            .includes(inputValue ? inputValue.toLowerCase() : '')
        )
      );
    },
    selectedItem: value,
    defaultSelectedItem: defaultValue,
  });

  useEffect(() => {
    setInputItems(options);
  }, [options]);

  useEffect(() => {
    setInputValue('');
  }, [selectedItem]);

  return (
    <div className={classNames('relative focus:outline-none', className)}>
      <div {...getComboboxProps()}>
        <SelectButton
          className={classNames({
            'text-grayDark': selectedItem,
            'text-gray': !selectedItem,
          })}
          isOpen={isOpen}
          {...getToggleButtonProps()}
        >
          <input
            className="w-full h-full appearance-none focus:outline-none placeholder-grayDark"
            placeholder={selectedItem?.label || placeholder}
            {...getInputProps()}
          />
        </SelectButton>
      </div>
      <div
        className={classNames(
          'focus:outline-none transition transform duration-300',
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
