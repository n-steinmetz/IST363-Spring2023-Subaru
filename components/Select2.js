import styles from './select.module.scss'

const Select2 = ({options}) => {
    return <select className={styles.select}>
        {options.map(({option, index}) => {
            const { value, label } = option;
            return <option key={`option${index}`} value={value}>
                {label}
            </option>
        })}
    </select>
}
export default Select2;