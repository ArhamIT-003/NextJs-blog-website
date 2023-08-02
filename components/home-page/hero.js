import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/random.jpg" alt="Main-Image" width={300} height={300} />
      </div>
      <h1>Hi, I am Arham</h1>
      <p>
        I write blog for the web development. The main focus of my topics are
        React JS, Node JS, Next JS, Angular
      </p>
    </section>
  );
}

export default Hero;
