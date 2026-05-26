import styles from './MoreAbout.module.scss';

function MoreAboutContent(props: {
  title: string;
  text: string;
}) {
  return (
    <div className={styles['more-about__content']}>
      <h3 className={styles['more-about__title']}>{props.title}</h3>
      <p className={styles['more-about__text']}>{props.text}</p>
    </div>
  );
}

export default MoreAboutContent;