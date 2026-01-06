// app/events/ibaram-report/page.tsx
import Image from "next/image";
import styles from "./styles.module.css";

export default function EventsBody() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Report of Events of Federation of Ibaram Students Union (FISU) <br />
        in Collaboration with Joseph Adaramola Foundation
      </h1>

      <section className={styles.section}>
        <p>
          The programme commenced at <strong>11:00 am</strong> with an opening prayer said by <strong>Ch. (Mrs) Kikelomo Ajakaiye</strong>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Welcome Address</h2>
        <p>
          A welcome address was delivered by the President of the Federation of Ibaram Students Union (FISU), <strong>Mr. Daisi Bibire</strong>. He welcomed Kabiyesi and the entire
          community to the epoch-making event.
        </p>
        <p>
          He expressed profound gratitude to the Founder of the Joseph Adaramola Foundation for consistently supporting youth education through financial assistance to deserving
          students in Ibaram. He appealed to students to be more committed to union activities.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Goodwill Messages</h2>
        <p>
          A goodwill message was delivered by Kabiyesi, the Olubaram,
          <strong> His Royal Majesty, Oba Raphael Oluwasegunota Atibioke (Ajiya III)</strong>. He emphasized that education is the key to success and admonished youths to shun all
          vices.
        </p>
        <p>
          Olori Laide Atibioke and <strong>Ch. Mrs. Iyadun Akande</strong> also appreciated the organizers and encouraged youths to take academics seriously.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Quiz Competition</h2>
        <p>A quiz competition was held among students from the five quarters in Ibaram. The results were as follows:</p>

        <ul className={styles.list}>
          <li>
            <strong>1st Position:</strong> Otein Quarter
          </li>
          <li>
            <strong>2nd Position:</strong> Odo-Oko Quarter
          </li>
          <li>
            <strong>3rd Position:</strong> Elo Quarter
          </li>
          <li>
            <strong>4th Position:</strong> Aato Quarter
          </li>
          <li>
            <strong>5th Position:</strong> Iparasoni / Igum
          </li>
        </ul>

        <p>Kabiyesi congratulated all participants and advised them to prepare better for the 2026 edition. Cash gifts were presented to the winners.</p>
      </section>

      <section className={styles.section}>
        <h2>Interactive Session</h2>
        <p>
          The FISU President and executives discussed how the education summit organized by <strong>Mr. Akin Adaramola</strong>, including an excursion to FUTA, positively changed
          students’ perception of academics.
        </p>
        <p>
          <strong>Mrs. Bolape Clarke</strong>, an educationist, advised parents to educate their children on teenage pregnancy and its consequences.
        </p>
        <p>Contributors lamented the declining value of education among youths and cited examples of successful individuals from Ibaram.</p>
      </section>

      <section className={styles.section}>
        <h2>Joseph Adaramola Foundation Website</h2>
        <p>
          The initiator of the Foundation, <strong>Mr. Akin Adaramola</strong>, announced the launch of the Foundation’s website to ease management processes.
        </p>

        <div className={styles.contacts}>
          <p>
            <strong>Website Contacts:</strong>
          </p>
          <p>Mr. Bola Balogun – 0703317388</p>
          <p>Mr. Wale Jaiyeola – 08032811135</p>
        </div>

        <p>The website was unveiled and dedicated to the glory of God and the benefit of Ibaram sons and daughters worldwide.</p>
      </section>

      <section className={styles.section}>
        <h2>Financial Assistance</h2>
        <ul className={styles.list}>
          <li>Dr. Eniola Awe (Medical Doctor) – ₦100,000</li>
          <li>Oluwajobi Peace – ₦50,000</li>
          <li>Ayodele Olayinka – ₦50,000</li>
          <li>Adewale Lois – ₦50,000</li>
          <li>Aderonke Adesua – ₦50,000</li>
          <li>Rotimi Glory – ₦50,000</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Welfare Programme for Elders</h2>
        <p>Forty-one elders above 80 years (15 males and 26 females) received Christmas gifts. They expressed appreciation and prayers for the Foundation.</p>
      </section>

      <section className={styles.section}>
        <h2>Closing</h2>
        <p>
          Dr. Awe Eniola appreciated the Foundation on behalf of all beneficiaries. The programme ended at <strong>3:10 pm</strong> with grace in unison.
        </p>
      </section>

      {/* IMAGE SECTION */}
      <section className={styles.imagesSection}>
        <h2>Event Gallery</h2>
        <div className={styles.scrollContainer}>
          {[
            "/images/event-1.jpeg",
            "/images/event-2.jpeg",
            "/images/event-3.jpeg",
            "/images/event-4.jpeg",
            "/images/event-5.jpeg",
            "/images/event-6.jpeg",
            "/images/event-7.jpeg",
            "/images/event-8.jpeg",
            "/images/event-9.jpeg",
            "/images/event-10.jpeg",
            "/images/event-11.jpeg",
            "/images/event-12.jpeg",
          ].map((src, index) => (
            <div key={index} className={styles.imageCard}>
              <Image fill src={src} alt={`Event image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          <strong>E-signed:</strong>
        </p>
        <p>Mr. Bibire Daisi – FISU President</p>
        <p>Mr. Rotimi Falusi – Reporter</p>
      </footer>
    </main>
  );
}
