import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
    return (
        <table>
            <thead className={styles.tableHead}>
                <tr className={styles.headList}>
                    <th className={styles.headType}>Type</th>
                    <th className={styles.headAmount}>Amount</th>
                    <th className={styles.headCurrensy}>Currency</th>
                </tr>
            </thead>
            <thead className={styles.tableBody}>
                {items.map(({id, type, amount, currency}) => {
                    return(<tr className={styles.tableItem} key={id}>
                        <td className={styles.type}>{type}</td>
                        <td className={styles.amount}>{amount}</td>
                        <td className={styles.currency}>{currency}</td>
                    </tr>)
                })}
            </thead>
        </table>
    )
}

export default TransactionHistory;