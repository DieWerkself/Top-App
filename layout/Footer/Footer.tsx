import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";
import s from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, s.footer)}>
      <div className={s.left}>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
