import React, {
  createContext,
  memo,
  useContext,
  useMemo,
  ReactNode,
  HTMLAttributes,
  FC,
} from "react";
import cn from "@utils/cn";
import { useClickOutside, useToggle } from "@hooks/hooks";

interface DropdownContextProps {
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

const useDropdownContext = (): DropdownContextProps => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext should be used within the scope of a Dropdown"
    );
  }
  return context;
};

interface DropdownProps {
  children: ReactNode;
}

interface DropdownComponent extends FC<DropdownProps> {
  Button: FC<ButtonProps>;
  List: FC<ListProps>;
  Item: FC<ItemProps>;
}

const Dropdown: DropdownComponent = ({ children }: DropdownProps) => {
  const { toggle, handleToggle, setToggle } = useToggle(false);
  const ref = useClickOutside<HTMLDivElement>(() => setToggle(false));

  const contextValue = useMemo(
    () => ({ toggleDropdown: handleToggle, isDropdownOpen: toggle }),
    [handleToggle, toggle]
  );

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <DropdownContext.Provider value={contextValue}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
};

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = memo(
  ({ children, className = "", ...props }) => {
    const { toggleDropdown } = useDropdownContext();

    return (
      <div
        className={cn("cursor-pointer", className)}
        onClick={toggleDropdown}
        role="button"
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

const List: FC<ListProps> = memo(({ children, className = "", ...props }) => {
  const { isDropdownOpen } = useDropdownContext();
  return (
    <>
      {isDropdownOpen && (
        <ul
          className={cn(
            "flex flex-col absolute top-[45px] bg-white right-0 rounded-[6px] z-[2]",
            className
          )}
          style={{
            boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px",
          }}
          {...props}
        >
          {children}
        </ul>
      )}
    </>
  );
});

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

const Item: FC<ItemProps> = memo(({ children, className = "", ...props }) => {
  return (
    <li
      className={cn(
        "cursor-pointer sm:text-[15px] text-[14px] text-[#2b3445] font-Sans w-[170px] sm:w-[180px] md:w-[194px] py-[12px] px-[16px] border-solid border-b border-[#e5e7eb] flex items-center justify-start gap-[5px] transition-all hover:bg-[#2b34450f]",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
});

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
