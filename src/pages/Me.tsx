import styles from "./styles/me.module.css";

export default function Me() {
  return (
    <div className="min-h-screen flex justify-center w-screen bg-slate-50">
      <section className="m-5 sm:m-20">
        <div className="ContextText">
          <span className={`italic text-lg font-bold ${styles.HeroName}`}>
            Hello I'm Rain
          </span>
          <br />
          <br />
          <p>I'm a self-taught Software Developer.</p>
          <br />
          <p>
            Im Jahr 2011 habe ich durch das Spiel Metin2 mein Interesse an der
            Programmierung entdeckt.
          </p>
          <br />
          <p>
            Lange Zeit habe ich kostenlos Quests für das Spiel in Lua
            geschrieben. In Foren fand ich gleichgesinnte, nachdem uns das
            Questen irgendwann zu monoton war, fingen wir an uns gegenseitig
            heruszufordern. Das Ziel bestand stets darin, wer den Code am
            effizientesten schreibt, gewinnt. Es gab vielleicht nur eine
            Handvoll Leute, die mich schlagen konnten. Später stellte ich fest,
            dass diese Personen Lua in ihrem Hauptberuf verwendeten.
          </p>
          <br />
          <p></p>
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
