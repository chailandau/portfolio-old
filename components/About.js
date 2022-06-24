import Image from "next/image";
import Title from "./Title";

const About = () => {
    return (
        <div className="about">
            <div className="wrapper">
                <Title text="About" />
                <div className="grid">
                    <div className="headshot">
                        <Image
                            src="/img/headshot-web-color-4.jpg"
                            alt="photo of smiling woman with glasses"
                            layout="responsive"
                            height="600"
                            width="600"
                        />
                    </div>
                    <div className="text">
                        <span className="title-sm">
                            Hello! I’m Chai. I’m a designer turned front-end engineer.
                        </span>
                        <p>
                            I discovered my passion for code and utilize my design background to
                            influence how I build things.
                        </p>

                        <p>
                            I love creating functional and beautiful websites, and I am currently a
                            frontend engineer over at &nbsp;
                            <a href="https://cliquestudios.com/" target="_blank" rel="noreferrer">
                                Clique Studios
                            </a>
                            .
                        </p>

                        <p>
                            When I’m not off in the land of code, I love to{" "}
                            <a
                                href="https://www.instagram.com/chaitea_crafts/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                sew and craft
                            </a>
                            . I make my own clothing and I make things for my{" "}
                            <a
                                href="https://www.instagram.com/warren_the_noodlenose/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                super cute dog, Warren
                            </a>
                            . I also have two cats,{" "}
                            <a
                                href="https://www.instagram.com/harvey_and_athena/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Harvey and Athena
                            </a>
                            , although they tolerate my sewing a lot less nicely than the dog.
                        </p>

                        <p>
                            Other fun things I do include horseback riding, reading books, watching
                            TV, and hanging out with friends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
