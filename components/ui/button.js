import classes from '../ui/button.module.css'
import Link from "next/link";


function Button(props) {
    if (props.link) {
      return (
        <Link href={props.link}>
          <a className={classes.btn}>{props.children}</a>
        </Link>
      );
    }
  
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }

export default Button;