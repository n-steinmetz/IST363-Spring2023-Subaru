import classnames from 'classnames/bind';

import styles from './tabs.module.scss';

let cx = classnames.bind(styles);

const Tabs = ({
    activeItem,
    changeHandler,
    items

}) => {
    return <ul className={styles.tabs}>
        {items.map((item, index) => {
            let tabItemClasses = cx({
                tebItem: true,
                active: activeItem === item
            });
            return <li 
            key={`tabItem${index}`}
            className={tabItemClasses}
            onClick={() => {
                changeHandler(item);
            }}
            >{item}</li>
        })}
    </ul>
}
export default Tabs;