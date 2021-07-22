import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>React Out To Us</h1>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="email">E-Mail Address</label>
            <input type="email" name="email" placeholder="johndoe@example.io" required />
          </div>
          <div>
            <label htmlFor="purpose">Purpose</label>
            <select name="purpose" id="purpose">
              <option value="" selected disabled required>
                Select one
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Query / Question">Query / Question</option>
              <option value="Feedback / Message">Feedback / Message</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" placeholder="Hi there!" required></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
