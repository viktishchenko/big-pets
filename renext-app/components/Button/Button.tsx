import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames'

export const Button = ({ appearance,children }: ButtonProps): JSX.Element => {
 return (<button className={styles.button} >{children}</button>)
};