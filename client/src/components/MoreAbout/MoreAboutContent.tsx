import styles from './MoreAbout.module.scss';

function MoreAboutContent(props: { title: string; text: string }) {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}

export default MoreAboutContent;
