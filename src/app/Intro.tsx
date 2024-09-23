import Image from "next/image"

export default function Intro() {
  return (
    <section id="intro">
      <Image
        src="https://utfs.io/f/4HL9EUy6VJbQf1lcApeI4aSqFU9Q1Hobh3Rk06gTVZtpOy2N"
        alt="profile picture of Chris Jiang"
        width={160}
        height={160}
        className="float-left mr-6 self-center rounded-xl md:h-64 md:w-64"
        unoptimized
      />
      <h2>Hello! Let me give you a brief summary</h2>
      <br />
      <p>
        I&apos;m a <strong>Toronto</strong> based{" "}
        <strong>Front-end Developer</strong> and <strong>UI/UX Designer</strong>
        . My specialty is using my backgrounds together to bridge the gap
        between <strong>product design</strong> and{" "}
        <strong>software development</strong>. I completed my{" "}
        <strong>Bachelor&apos;s degree</strong> in{" "}
        <strong>Math & Computer Science </strong>
        at the Toronto Metropolitan University (fka Ryerson University)
      </p>{" "}
      <br />
      <p>{`Let's connect and build something together :)`}</p>
    </section>
  )
}
