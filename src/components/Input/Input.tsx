import styles from "./Input.module.scss";

export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.container}>
      <input {...props} className={styles.input} />
    </div>
  );
};
