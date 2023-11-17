import styles from "./styles/me.module.css";

export default function Me() {
  return (
    <div className="min-h-screen flex justify-center w-screen ">
      <section className="m-5 sm:m-20">
        <div className="ContextText">
          <span className={`italic text-xl font-bold ${styles.HeroName}`}>
            Hello I'm Rain.
          </span>
          <br />
          <br />
          <p>I'm a self-taught Software Developer.</p>
          <p>
            Be free to follow my{" "}
            <a className="text-blue-600" href="/journey">
              Journey
            </a>
          </p>
          <br />
        </div>
      </section>
    </div>
  );
}
