import React, { useState, useEffect } from "react";
import "./App.css";

const INITIAL_CONTENT = {
  h2: "Loading",
  p: "Loading",
  ol: ["Loading", "Loading", "Loading"],
};

const CONTENT = {
  h2:
    "We need rest. The spirit is willing, but the flesh is spongy and bruised.",
  p:
    "Do a flip! We'll need to have a look inside you with this camera. And I'd do it again! And perhaps a third time! But that would be it. Why not indeed! Do a flip! What are their names?",
  ol: [
    "Enough about your promiscuous mother, Hermes! We have bigger problems.",
    "I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in.",
    "Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon.",
  ],
};

const App = () => {
  const [content, setContent] = useState({ ...INITIAL_CONTENT });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setContent({ ...CONTENT });
      setLoading(false);
    }, 2000);
  }, []);

  const { h2, p, ol } = content;

  return (
    <main>
      <h1>Calculon is gonna kill us and it's all everybody else's fault!</h1>
      <p>
        Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to
        feel ways about stuff! And so we say goodbye to our beloved pet,
        Nibbler, who's gone to a place where I, too, hope one day to go. The
        toilet.
      </p>
      <p>
        <strong>Oh, I don't have time for this.</strong>
        <em>
          I have to go and buy a single piece of fruit with a coupon and then
          return it, making people wait behind me while I complain.
        </em>
        Anyhoo, your net-suits will allow you to experience Fry's worm infested
        bowels as if you were actually wriggling through them.
      </p>
      <h2 className={loading ? "loading" : ""}>{h2}</h2>
      <p className={loading ? "loading" : ""}>{p}</p>
      <ol>
        {ol.map((li, i) => (
          <li key={i} className={loading ? "loading" : ""}>
            {li}
          </li>
        ))}
      </ol>

      <h3>Well, let's just dump it in the sewer and say we delivered it.</h3>
      <p>
        Look, last night was a mistake. Doomsday device? Ah, now the ball's in
        Farnsworth's court! Yeah, I do that with my stupidness. We don't have a
        brig. There's no part of that sentence I didn't like! Well, let's just
        dump it in the sewer and say we delivered it.
      </p>
      <ul>
        <li>
          Oh, but you can. But you may have to metaphorically make a deal with
          the devil. And by "devil", I mean Robot Devil. And by
          "metaphorically", I mean get your coat.
        </li>
        <li>Noooooo!</li>
        <li>
          I could if you hadn't turned on the light and shut off my stereo.
        </li>
      </ul>

      <p>
        They're like sex, except I'm having them! No, she'll probably make me do
        it. Well I'da done better, but it's plum hard pleading a case while
        awaiting trial for that there incompetence. Morbo will now introduce
        tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and
        Morbo's good friend, Richard Nixon.
      </p>
      <p>
        This is the worst part. The calm before the battle. No, she'll probably
        make me do it. Hey, you add a one and two zeros to that or we walk! No,
        I'm Santa Claus! You guys realize you live in a sewer, right?
      </p>
      <p>
        Oh, all right, I am. But if anything happens to me, tell them I died
        robbing some old man. Maybe I love you so much I love you no matter who
        you are pretending to be. She also liked to shut up! Good news,
        everyone! There's a report on TV with some very bad news!
      </p>
      <p>
        You, a bobsleder!? That I'd like to see! This is the worst part. The
        calm before the battle. I am Singing Wind, Chief of the Martians.
        Bender, we're trying our best. Bender?! You stole the atom.
      </p>
      <p>
        Humans dating robots is sick. You people wonder why I'm still single?
        It's 'cause all the fine robot sisters are dating humans! This is the
        worst part. The calm before the battle. What are their names?
      </p>
      <p>
        Daddy Bender, we're hungry. When the lights go out, it's nobody's
        business what goes on between two consenting adults. How much did you
        make me? Bender?! You stole the atom. I love this planet! I've got
        wealth, fame, and access to the depths of sleaze that those things
        bring.
      </p>
      <p>
        This is the worst part. The calm before the battle. Fry, we have a crate
        to deliver. Kif, I have mated with a woman. Inform the men. Why would a
        robot need to drink?
      </p>
      <p>
        I found what I need. And it's not friends, it's things. Now what?
        Professor, make a woman out of me. Ah, the 'Breakfast Club' soundtrack!
        I can't wait til I'm old enough to feel ways about stuff! It must be
        wonderful.
      </p>
      <p>
        Just once I'd like to eat dinner with a celebrity who isn't bound and
        gagged. Five hours? Aw, man! Couldn't you just get me the death penalty?
        You'll have all the Slurm you can drink when you're partying with Slurms
        McKenzie!
      </p>
      <p>
        Leela, Bender, we're going grave robbing. Throw her in the brig. No.
        We're on the top. Bender, we're trying our best.
      </p>
      <p>
        Yes, I saw. You were doing well, until everyone died. One hundred
        dollars. Who said that? SURE you can die! You want to die?! It doesn't
        look so shiny to me. That could be 'my' beautiful soul sitting naked on
        a couch. If I could just learn to play this stupid thing.
      </p>
    </main>
  );
};

export default App;
