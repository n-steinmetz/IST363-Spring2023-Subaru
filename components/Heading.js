import styles from './heading.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Heading = ( {
    children, 
    level,
    textAlign,

} ) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    const headingClasses= cx({
        heading: true,
        [`heading${level}`] : level,
        [`text-align-${textAlign}`] : textAlign
    });

    return <Tag className={headingClasses}>
        {children}
        </Tag>
}
export default Heading