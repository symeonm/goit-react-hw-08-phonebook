import css from './HomePageStyle.module.css';

export default function Home() {
  return (
    <div className={css.div}>
      <h1 className={css.h1}>
        Вітаємо в додатку контактів
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
