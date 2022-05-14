import Image from "next/image";
import Title from "./Title";

const About = () => {
    return (
        <div className="about">
            <Title text="About" />
            <div className="wrapper">
                <div className="headshot">
                    <div className="image">
                        <Image
                            src="/img/headshot.jpg"
                            alt="black and white photo of smiling woman with glasses"
                            layout="fill"
                        />
                    </div>
                </div>

                <div className="text">
                    <p>
                        Hello! I’m Chai. I’m a designer turned front-end engineer. I discovered my
                        passion for code and utilize my design background to influence how I build
                        things.
                    </p>

                    <p>
                        I love creating functional and beautiful websites, and I am currently a
                        frontend engineer over at{" "}
                        <a href="https://cliquestudios.com/" target="_blank">
                            Clique Studios
                        </a>
                        .
                    </p>

                    <p>
                        When I’m not off in the land of code, I love to{" "}
                        <a href="https://www.instagram.com/chaitea_crafts/" target="_blank">
                            sew and craft
                        </a>
                        . I make my own clothing and I make things for my{" "}
                        <a href="https://www.instagram.com/warren_the_noodlenose/" target="_blank">
                            super cute dog, Warren
                        </a>
                        . I also have two cats,{" "}
                        <a href="https://www.instagram.com/harvey_and_athena/" target="_blank">
                            Harvey and Athena
                        </a>
                        , although they tolerate my sewing a lot less nicely than the dog.
                    </p>

                    <p>
                        Other fun things I do include horseback riding, reading books, watching TV,
                        and hanging out with friends.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
